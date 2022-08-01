import Button from '../Button';
import styles from './ProductRecipe.module.css';
import Box from '../Box';
function ProductRecipe() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrap}>
                    <div className={styles.RCard}>
                        <div className={styles.RCard_img}>
                            <Box>
                                <img src="" alt="" />
                            </Box>
                        </div>
                        <div className={styles.RCard_info}>
                            <h4>香煎雞腿肉</h4>
                            <p>2022.06.15</p>
                            <span>分享者:</span>
                            <span>otter2266</span>
                            <br />
                            <Button name="如何製作" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductRecipe;
