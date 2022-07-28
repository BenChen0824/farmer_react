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
import { fetchProduct } from '../../api/product';
import { HASHTAG } from '../../config/variables';
import { useQuery } from '../../hooks';
import Slider from 'react-slick';
import { AB_GET_HOT_SALES } from '../../config/ajax-path';
import { useSelector, useDispatch } from 'react-redux';
import { toggleHashTag } from '../../store/slices/product';

const settings = {
    // focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
};

function ProductList() {
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const query = useQuery();
    const page = query['page'] || 1;
    const type = query['type'];
    const [hotSales, setHotSale] = useState([]);
    const { hashTag } = useSelector((state) => state.product);

    const getProduct = async (page, hashTag, type) => {
        const data = await fetchProduct(page, hashTag, type);
        if (data && data.rows) {
            console.log(data);
            setData(data);
        }
    };

    const getHotSales = async () => {
        const r = await fetch(AB_GET_HOT_SALES);
        const obj = await r.json();
        console.log(obj);
        setHotSale(obj);
    };

    const handleToggleHashTag = (key) => {
        dispatch(toggleHashTag(key));
    };

    useEffect(() => {
        getHotSales();
    }, []);

    useEffect(() => {
        getProduct(page, hashTag, type);
    }, [page, hashTag, type]);

    return (
        <>
            <ProductBanner />
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className="row">
                        <div className="col-3">
                            <SearchP />
                            <PriceSelect />
                            <ProductNavBar />
                        </div>
                        <div className="col-9">
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
                                                        // className="col-6 col-lg-4"
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
                                                    />
                                                );
                                            })}
                                </Slider>
                            </div>

                            <Title zh={'小農產品'} eg={'products'} />

                            <div className={clsx('row', styles.card)}>
                                {data && data.rows
                                    ? data.rows.map((v, i) => {
                                          return (
                                              <ProductCard
                                                  key={i}
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
