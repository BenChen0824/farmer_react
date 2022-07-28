import styles from './ProductCard.module.css';
import { BsCart4 } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';
import { UNIT } from '../../../config/variables';
import clsx from 'clsx';
import Box from '../Box';

function ProductCard({
    className,
    name,
    supplier,
    price,
    unit,
    img,
    inventory,
}) {
    const [amount, setAmount] = useState(1);
    const [collect, setCollect] = useState(false);
    const [hover, setHover] = useState(true);

    const handleClickMinus = () => {
        setAmount(amount > 1 ? amount - 1 : amount);
    };
    const handleClickPlus = () => {
        setAmount(amount + 1); //TODO: storage
    };

    const AddToCart = () => {
        setAmount(1);
    };

    return (
        <div className={className}>
            <div
                className={styles.card}
                onMouseOver={() => {
                    setHover(false);
                }}
                onMouseOut={() => {
                    setHover(true);
                }}
            >
                <Box>
                    <div className={styles.card_img}>
                        <img src={img} alt="" />
                    </div>
                </Box>
                <div className={styles.card_detail}>
                    <p>{supplier}</p>
                    <h3>{name}</h3>
                    <div className={styles.card_price}>
                        <div className={styles.dollar_tag}>$</div>
                        <div className={styles.dollar}>{price}</div>
                        <div className={styles.slash}>/</div>
                        <div className={styles.type}>{UNIT[unit]}</div>
                    </div>
                    <div
                        className={clsx(styles.card_cart, {
                            [styles.hidden]: hover,
                        })}
                    >
                        <div
                            className={clsx(styles.collect, {
                                [styles.active]: collect,
                            })}
                            onClick={() => {
                                setCollect((prev) => !prev);
                            }}
                        >
                            <AiOutlineHeart size={24} /> {/* TODO: 連接收藏 */}
                        </div>
                        <div className={styles.count}>
                            <div
                                className={styles.minus}
                                onClick={handleClickMinus}
                            >
                                <AiOutlineMinus size={14} />
                            </div>
                            <div className={styles.num_box}>
                                <div className={styles.num}>{amount}</div>
                            </div>
                            <div
                                className={styles.plus}
                                onClick={handleClickPlus}
                            >
                                <AiOutlinePlus size={14} />
                            </div>
                        </div>

                        <div className={styles.buy} onClick={AddToCart}>
                            <BsCart4 size={24} /> {/* TODO: add to cart */}
                        </div>
                    </div>
                </div>
                <div className={styles.hotSale}>hot sale</div>
            </div>
        </div>
    );
}

export default ProductCard;
