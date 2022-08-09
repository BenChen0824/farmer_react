import _ from 'lodash';
import ProductBanner from '../../component/lil/ProductBanner';
import ProductNavBar from '../../component/lil/ProductNavBar';
import SearchP from '../../component/lil/SearchP';
import PriceSelect from '../../component/lil/PriceSelect';
import Title from '../../component/lil/Title';
import styles from './ProductList.module.css';
import clsx from 'clsx';
import ProductCard from '../../component/lil/ProductCard';
import ProductHashTag from '../../component/lil/ProductHashTag';
import Pagination from '../../component/lil/Pagination';
import React, { useEffect, useState, useContext, useMemo } from 'react';
import {
    fetchProduct,
    getHotSale,
    addToCart,
    getProductItem,
    updateCollect,
    getCollected,
} from '../../api/product';
import { HASHTAG, SUPPLIER } from '../../config/variables';
import { useQuery } from '../../hooks';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { toggleHashTag } from '../../store/slices/product';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CartCountContext from '../../component/ben/cart_count/CartCountContext';

const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
};

function ProductList() {
    const { cartList, setCartList } = useContext(CartCountContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [hotSales, setHotSale] = useState([]);
    const query = useQuery();
    const page = query['page'] || 1;
    const type = query['type'];
    const search = query['search'];
    const [hashTagURL, setHashTagURL] = useSearchParams();
    const member_info = JSON.parse(localStorage.getItem('auth')) || {};
    const userId = member_info.customer_id;
    const lsKey = `histroy${userId}`;
    const [historyData, setHistoryData] = useState([]);
    const [collectData, setCollectData] = useState([]);

    const productList = useMemo(() => {
        if (data && data.rows) {
            return data.rows.map((el) => {
                // { sid: 112, product_name: "2112", product_type: 2, ... }
                const { sid } = el;

                // { product_id: 112, saved: 0 }
                const { saved = 0 } =
                    _.find(collectData, { product_id: sid }) || {};
                return { ...el, saved };
            });
        }
        return [];
    }, [data, collectData]);

    const hotSaleList = useMemo(() => {
        if (hotSales.rows) {
            return hotSales.rows.map((el) => {
                const { sid } = el;

                const { saved = 0 } =
                    _.find(collectData, { product_id: sid }) || {};
                return { ...el, saved };
            });
        }
        return [];
    }, [hotSales, collectData]);

    const historyList = useMemo(() => {
        if (historyData) {
            return historyData.map((el) => {
                const { sid } = el;
                const { saved = 0 } =
                    _.find(collectData, { product_id: sid }) || {};
                return { ...el, saved };
            });
        }
        return [];
    }, [historyData, collectData]);

    useEffect(() => {
        //取history
        const json = localStorage.getItem(lsKey);
        if (json) {
            const history = JSON.parse(json);
            const ids = Object.keys(history);
            if (ids.length) {
                getProducts(ids);
            }
        }

        // 取收藏
        getCollectedItem();
    }, []);

    useEffect(() => {
        // 取熱門
        getHotSales();
    }, []);

    const getProducts = async (ids) => {
        const getHistoryData = await Promise.all(
            ids.map((v, i) => {
                return getProductItem(v);
            })
        );
        // set state
        setHistoryData(getHistoryData);
    };

    const { hashTag } = useSelector((state) => state.product);

    let orderBy = query['orderBy'] || 'sid';
    let order = query['order'] || 'DESC';

    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedOption, setSelectedOption] = useState(null);

    const goToPath = (sid) => {
        navigate(`/product/${sid}`);
    };
    const getProduct = async (page, hashTag, type, orderBy, order, search) => {
        const data = await fetchProduct(
            page,
            hashTag,
            type,
            orderBy,
            order,
            search
        );
        if (data && data.rows) {
            console.log(data);
            setData(data);
        }
    };

    const getHotSales = async () => {
        const data = await getHotSale();
        if (data && data.rows) {
            setHotSale(data);
        }
    };

    const handleToggleHashTag = (key) => {
        const { search, ...rest } = query;
        setHashTagURL({ ...rest, page: 1 });
        console.log({ key });
        dispatch(toggleHashTag(key));
        //TODO:要改
    };

    useEffect(() => {
        getProduct(page, hashTag, type, orderBy, order, search);
    }, [page, hashTag, type, orderBy, order, search]);

    useEffect(() => {
        const { value: priceOrder } = selectedOption ?? {};
        let orderBy;
        let order;

        switch (priceOrder) {
            case 1: {
                orderBy = 'price';
                order = 'ASC';
                break;
            }
            case 2: {
                orderBy = 'price';
                order = 'DESC';
                break;
            }
            default: {
                break;
            }
        }

        const q = {
            ...query,
            orderBy,
            order,
        };

        if (query.orderBy !== orderBy || query.order !== order) {
            // order = priceOrder === '1' ? 'ASC' : 'DESC'
            setSearchParams(q);
        }
    }, [selectedOption]);

    const handleToCart = async (sid, amount) => {
        if (!member_info.customer_id) {
            alert('請先登入帳號');
            return;
        }
        const newBuyList = await addToCart({
            product_count: amount,
            product_id: +sid,
            member_id: member_info.customer_id,
        });
        console.log(newBuyList.cart);
        setCartList(newBuyList.cart);
    };
    const handleCollect = async (sid, saved) => {
        // update state
        if (!member_info.customer_id) {
            alert('請先登入帳號');
            return;
        }
        setCollectData((prev) => {
            if (_.find(prev, { product_id: sid })) {
                return prev.map((el) => {
                    if (el.product_id === sid) {
                        return { ...el, saved };
                    }
                    return el;
                });
            }
            return [
                ...prev,
                {
                    product_id: sid,
                    saved,
                },
            ];
        });

        // update data
        await updateCollect({
            member_id: member_info.customer_id,
            product_id: +sid,
            saved: +saved,
        });

        // console.log(newCollect);
    };

    const getCollectedItem = async () => {
        // [{member_id: 530, product_id: 6, saved: 1}]
        const collected = await getCollected(userId);
        setCollectData(collected);
    };

    return (
        <>
            <div className={styles.page}>
                <ProductBanner />
                <div className={styles.container}>
                    <div className={clsx('row', styles.row)}>
                        <div
                            className={clsx('col-3', styles.sidebar)}
                            style={{ marginTop: '53px' }}
                        >
                            <SearchP />
                            <PriceSelect
                                value={selectedOption}
                                onSelect={setSelectedOption}
                            />
                            <ProductNavBar />
                        </div>
                        <div className={clsx('col-9', styles.main)}>
                            <Title zh={'熱銷商品'} eg={'Hot Sales'} />
                            <div className={clsx('row', styles.card)}>
                                <Slider {...settings}>
                                    {hotSaleList &&
                                        hotSaleList.map((v, i) => {
                                            return (
                                                <ProductCard
                                                    key={i}
                                                    onClick={() =>
                                                        goToPath(v.sid)
                                                    }
                                                    className={styles.slick}
                                                    name={v.product_name}
                                                    supplier={
                                                        SUPPLIER[
                                                            v.product_supplier
                                                        ]
                                                    }
                                                    price={v.product_price}
                                                    unit={v.product_unit}
                                                    img={
                                                        v.product_img &&
                                                        v.product_img[0]
                                                    }
                                                    inventory={
                                                        v.product_inventory
                                                    }
                                                    hotSale={true}
                                                    onSubmit={(amount) =>
                                                        handleToCart(
                                                            v.sid,
                                                            amount
                                                        )
                                                    }
                                                    onCollect={(save) => {
                                                        handleCollect(
                                                            v.sid,
                                                            save
                                                        );
                                                    }}
                                                    saved={v.saved}
                                                />
                                            );
                                        })}
                                </Slider>
                            </div>
                            <Title zh={'標籤探索'} eg={'Tag exploration'} />
                            <div className={clsx('col-9', styles.hash_tag)}>
                                {Object.keys(HASHTAG).map((key) => {
                                    const value = HASHTAG[key];
                                    const checked = hashTag === key;
                                    return (
                                        <ProductHashTag
                                            key={key}
                                            hashTag={value}
                                            checked={checked}
                                            onClick={() =>
                                                handleToggleHashTag(key)
                                            }
                                        />
                                    );
                                })}
                            </div>

                            <Title zh={'小農產品'} eg={'Products'} />

                            <div className={clsx('row', styles.card)}>
                                {productList.map((v, i) => {
                                    return (
                                        <ProductCard
                                            key={i}
                                            onClick={() => goToPath(v.sid)}
                                            className="col-6 col-lg-4"
                                            name={v.product_name}
                                            supplier={
                                                SUPPLIER[v.product_supplier]
                                            }
                                            price={v.product_price}
                                            unit={v.product_unit}
                                            img={
                                                v.product_img &&
                                                v.product_img[0]
                                            }
                                            inventory={v.product_inventory}
                                            hotSale={false}
                                            onSubmit={(amount) =>
                                                handleToCart(v.sid, amount)
                                            }
                                            onCollect={(save) => {
                                                handleCollect(v.sid, save);
                                            }}
                                            saved={v.saved}
                                        />
                                    );
                                })}
                            </div>
                            <div className={styles.pagination}>
                                {data && data.totalPage ? (
                                    <Pagination
                                        page={data.page}
                                        totalPage={data.totalPage}
                                    />
                                ) : null}
                            </div>
                            {historyData && historyData.length ? (
                                <>
                                    <Title zh={'瀏覽紀錄'} eg={'History'} />
                                    <div className={clsx('row', styles.card)}>
                                        {historyList.map((v, i) => {
                                            return (
                                                <ProductCard
                                                    key={v.sid}
                                                    hotSale={false}
                                                    onClick={() =>
                                                        goToPath(v.sid)
                                                    }
                                                    className="col-6 col-lg-4"
                                                    name={v.product_name}
                                                    supplier={
                                                        SUPPLIER[
                                                            v.product_supplier
                                                        ]
                                                    }
                                                    price={v.product_price}
                                                    unit={v.product_unit}
                                                    img={
                                                        v.product_img &&
                                                        v.product_img[0]
                                                    }
                                                    onSubmit={(amount) =>
                                                        handleToCart(
                                                            v.sid,
                                                            amount
                                                        )
                                                    }
                                                    onCollect={(save) => {
                                                        handleCollect(
                                                            v.sid,
                                                            save
                                                        );
                                                    }}
                                                    saved={v.saved}
                                                />
                                            );
                                        })}
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductList;

//TODO: card排版  熱銷輪播rwd彙報版
