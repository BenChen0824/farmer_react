import Button from '../Button';
import styles from './ProductRecipe.module.css';
import Box from '../Box';
import clsx from 'clsx';
function ProductRecipe() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>今日食譜推薦</div>
                <div className={clsx(styles.wrap, 'row')}>
                    <div
                        className={clsx(
                            styles.RCard,
                            'col-lg-4',
                            'col-sm-6',
                            'col-12'
                        )}
                    >
                        <div className={styles.RCard_img}>
                            <Box>
                                <img
                                    src="/images/d_japanese_eel-don_2.jpg"
                                    alt=""
                                    style={{
                                        width: ' 100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </div>
                        <div className={styles.RCard_info}>
                            <h4>香煎雞腿肉</h4>
                            <span>料理難易度:</span>
                            <span>新手輕鬆入門</span>
                            <br />
                            <span>分享者:</span>
                            <span>otter2266</span>
                            <br />
                            <div className={styles.Button}>
                                <Button name="如何製作？" />
                            </div>
                        </div>
                    </div>
                    <div
                        className={clsx(
                            styles.RCard,
                            'col-lg-4',
                            'col-sm-6',
                            'col-12'
                        )}
                    >
                        <div className={styles.RCard_img}>
                            <Box>
                                <img
                                    src="/images/d_japanese_eel-don_2.jpg"
                                    alt=""
                                    style={{
                                        width: ' 100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </div>
                        <div className={styles.RCard_info}>
                            <h4>香煎雞腿肉</h4>
                            <span>料理難易度:</span>
                            <span>新手輕鬆入門</span>
                            <br />
                            <span>分享者:</span>
                            <span>otter2266</span>
                            <br />
                            <div className={styles.Button}>
                                <Button name="如何製作？" />
                            </div>
                        </div>
                    </div>
                    <div
                        className={clsx(
                            styles.RCard,
                            'col-lg-4',
                            'col-sm-6',
                            'col-12'
                        )}
                    >
                        <div className={styles.RCard_img}>
                            <Box>
                                <img
                                    src="/images/d_japanese_eel-don_2.jpg"
                                    alt=""
                                    style={{
                                        width: ' 100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </div>
                        <div className={styles.RCard_info}>
                            <h4>香煎雞腿肉</h4>
                            <span>料理難易度:</span>
                            <span>新手輕鬆入門</span>
                            <br />
                            <span>分享者:</span>
                            <span>otter2266</span>
                            <br />
                            <div className={styles.Button}>
                                <Button name="如何製作？" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductRecipe;
