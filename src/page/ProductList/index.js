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
import React, { useEffect, useState, Component } from 'react';
import { fetchProduct, getHotSale } from '../../api/product';
import { HASHTAG } from '../../config/variables';
import { useQuery } from '../../hooks';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { toggleHashTag } from '../../store/slices/product';
import { useNavigate, useSearchParams } from 'react-router-dom';

const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
};

function ProductList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const query = useQuery();
    const page = query['page'] || 1;
    const type = query['type'];
    const search = query['search'];

    const [hotSales, setHotSale] = useState([]);
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
        dispatch(toggleHashTag(key));
    };

    useEffect(() => {
        getHotSales();
    }, []);

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

    return (
        <>
            <ProductBanner />
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className="row">
                        <div className="col-3" style={{ marginTop: '53px' }}>
                            <SearchP />
                            <PriceSelect
                                value={selectedOption}
                                onSelect={setSelectedOption}
                            />
                            <ProductNavBar />
                        </div>
                        <div className="col-9">
                            <Title zh={'熱銷商品'} eg={'hot sales'} />
                            <div className={clsx('row', styles.card)}>
                                <Slider {...settings}>
                                    {hotSales.rows &&
                                        hotSales.rows
                                            .filter((v) => v.hot_sale)
                                            .map((v, i) => {
                                                return (
                                                    <ProductCard
                                                        key={i}
                                                        onClick={() =>
                                                            goToPath(v.sid)
                                                        }
                                                        className={styles.slick}
                                                        name={v.product_name}
                                                        supplier={
                                                            v.product_supplier
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

                            <Title zh={'小農產品'} eg={'products'} />

                            <div className={clsx('row', styles.card)}>
                                {data && data.rows
                                    ? data.rows.map((v, i) => {
                                          return (
                                              <ProductCard
                                                  key={i}
                                                  onClick={() =>
                                                      goToPath(v.sid)
                                                  }
                                                  className="col-6 col-lg-4"
                                                  name={v.product_name}
                                                  supplier={v.product_supplier}
                                                  price={v.product_price}
                                                  unit={v.product_unit}
                                                  img={
                                                      v.product_img &&
                                                      v.product_img[0]
                                                  }
                                                  inventory={
                                                      v.product_inventory
                                                  }
                                                  hotSale={false}
                                              />
                                          );
                                      })
                                    : null}
                            </div>
                            <div className={styles.pagination}>
                                {data && data.totalPage ? (
                                    <Pagination
                                        page={data.page}
                                        totalPage={data.totalPage}
                                    />
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductList;

//TODO: card排版  熱銷輪播rwd彙報版
