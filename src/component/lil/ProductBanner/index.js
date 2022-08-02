import styles from './ProductBanner.module.css';
function ProductBanner() {
    return (
        <>
            <div className={styles.banner}>
                <img src="images/seafood-space.jpg" alt="" />
                <h3>海鮮</h3>
            </div>
        </>
    );
}

export default ProductBanner;
//TODO: position
