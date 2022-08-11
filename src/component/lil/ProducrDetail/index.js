import styles from './ProductDetail.module.css';
import clsx from 'clsx';
function ProductDetail() {
    return (
        <>
            <div className={styles.container}>
                <div className={clsx(styles.wrap, 'row')}>
                    <div className={clsx(styles.part1, 'col-6')}>
                        <div className={styles.photo}>
                            <img src="/images/apples-02.jpg" alt="" />
                        </div>
                    </div>
                    <div className={clsx(styles.part2, 'col-6')}>
                        <div className={styles.title}>
                            <h5>在地小農有機商品</h5>
                            <h4>檸檬檸檬檸檬</h4>
                        </div>
                        <div className={styles.info}>
                            <p>
                                好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚好吃嘚
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductDetail;
//TODO:
