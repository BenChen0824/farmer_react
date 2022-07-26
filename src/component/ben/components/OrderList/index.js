import ProductItem from './ProductItem';
// import { products } from '../data/products';

function OrderList(props) {
    const { productsInOrder, setProductsInOrder } = props;
    return (
        <>
            <h2>生鮮商品</h2>
            <div className="">
                <ul className="d-flex">
                    <li>商品</li>
                    <li>價格</li>
                    <li>數量</li>
                    <li>總計</li>
                </ul>
            </div>
            <div className="d-flex">
                <div>
                    <span>
                        <input
                            style={{ width: '20px', height: '20px' }}
                            type="checkbox"
                        />
                    </span>
                    <span className="d-block cursor_pointer">
                        <img width="20px" src="./images/ben/red-x.png" alt="" />
                    </span>
                </div>
                <div className="d-flex">
                    <div>
                        <img alt="" />
                    </div>
                    <div></div>
                </div>
                <div>NT$</div>
                <div className="d-flex">
                    <button>-</button>
                    <input />
                    <button>+</button>
                </div>
                <div>NT$</div>
            </div>
        </>
    );
}

export default OrderList;
