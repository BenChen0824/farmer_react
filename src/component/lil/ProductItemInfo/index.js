import styles from './ProductItemInfo.module.css';
import clsx from 'clsx';
import { useState } from 'react';
import {
    AiTwotoneStar,
    AiOutlinePlus,
    AiOutlineMinus,
    AiOutlineHeart,
} from 'react-icons/ai';
import Box from '../Box';
import { UNIT, SUPPLIER, HASHTAG } from '../../../config/variables';
import LineShare from '../LineShare';

function ProductItemInfo({ data, sid, onSubmit }) {
    const images = data.product_img;
    const [collect, setCollect] = useState(false);
    const [addCart, setAddCart] = useState(false);
    const [amount, setAmount] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const selectedImgUrl = images && images[selectedImage];

    const handleImageClicked = (event, index) => {
        setSelectedImage(index);
    };

    return (
        <>
            <div className={styles.container}>
                <div className="bread">
                    <p>商品/水果/屏東現採有機萊姆</p>
                </div>
                <div className={styles.product_info_wrap}>
                    <div className={styles.product_imgs}>
                        <div className={styles.img_main}>
                            <div className={styles.img_1}>
                                <Box>
                                    <img
                                        className={styles.img_show}
                                        src={selectedImgUrl}
                                        alt=""
                                    />
                                </Box>
                            </div>
                        </div>
                        <div className={styles.img_else}>
                            {images &&
                                images.map((el, index) => (
                                    <div
                                        key={el}
                                        className={styles.img_2}
                                        onClick={(event) =>
                                            handleImageClicked(event, index)
                                        }
                                    >
                                        <Box>
                                            <img
                                                src={el}
                                                alt=""
                                                className={styles.img_show}
                                            />
                                        </Box>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className={styles.product_info}>
                        <h2>{data.product_name}</h2>
                        <p>{SUPPLIER[data.product_supplier]}</p>
                        <div className={styles.star}>
                            <div className={styles.star_area}>
                                <AiTwotoneStar size={18} />
                                <AiTwotoneStar size={18} />
                                <AiTwotoneStar size={18} />
                                <AiTwotoneStar size={18} />
                                <AiTwotoneStar size={18} />
                            </div>
                            <div className={styles.point}>5.0</div>
                            <div className={styles.total_point}>(39)</div>
                        </div>
                        <div className={styles.info_price}>
                            <div className={styles.dollar_tag}>$</div>
                            <div className={styles.dollar}>
                                {data.product_price}
                            </div>
                            <div className={styles.slash}>/</div>
                            <div className={styles.type}>
                                {UNIT[data.product_unit]}
                            </div>
                        </div>
                        <div className={styles.info_count}>
                            <div
                                className={styles.minus}
                                style={{ fontWeight: 'normal' }}
                                onClick={() => {
                                    setAmount(() => {
                                        return amount > 1 ? amount - 1 : amount;
                                    });
                                }}
                            >
                                <AiOutlineMinus />
                            </div>
                            <div className={styles.num_box}>
                                <div className={styles.num}>{amount}</div>
                            </div>
                            <div
                                className={styles.plus}
                                style={{ fontWeight: 'normal' }}
                                onClick={() => {
                                    setAmount(amount + 1);
                                }}
                            >
                                <AiOutlinePlus />
                            </div>
                        </div>
                        <div className={styles.storage}>
                            <div className={styles.storage_title}>
                                剩餘庫存:
                            </div>
                            <div className={styles.storage_num}>
                                {data.product_inventory}
                            </div>
                        </div>
                        <div
                            className={clsx(styles.add_to_cart, {
                                [styles.added]: addCart,
                            })}
                            onClick={() => {
                                setAddCart((prev) => !prev);
                                onSubmit(amount, addCart);
                            }}
                        >
                            {addCart ? '立刻結帳' : '加入購物車'}
                        </div>
                        <div
                            className={clsx(styles.add_to_collect, {
                                [styles.collected]: collect,
                            })}
                            onClick={() => {
                                setCollect((prev) => !prev);
                            }}
                        >
                            {collect ? '已收藏' : '加入收藏'}
                            <AiOutlineHeart
                                size={20}
                                className={styles.heart}
                            />
                        </div>
                        <div className={styles.hashtag_area}>
                            {data.product_hashtag &&
                                data.product_hashtag.map((v, i) => {
                                    return (
                                        <div className={styles.hashtag} key={i}>
                                            #{HASHTAG[v]}
                                        </div>
                                    );
                                })}
                        </div>
                        <LineShare />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductItemInfo;
