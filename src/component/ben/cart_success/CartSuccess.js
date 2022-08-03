import React from 'react';
import { Link } from 'react-router-dom';

function CartSuccess() {
    const showtime = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const deliveryTime = showtime.toLocaleDateString();
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto mb-5 mt-md-5 cart_step">
                        <div className="d-flex  justify-content-between">
                            <div className="col-2 cart_step_opacity">
                                <div className="text-center pb-2">STEP1</div>
                                <div className="cart_step_block mx-auto d-flex justify-content-center align-items-center flex-column">
                                    <i className="text-light fs-2 fa-solid fa-cart-shopping"></i>
                                </div>
                                <div className="cart_step_fontsize text-center pt-2">
                                    確認購物
                                    <br />
                                    車內商品
                                </div>
                            </div>
                            <div className="col-1 d-flex justify-content-center align-items-center flex-column cart_step_opacity">
                                →
                            </div>
                            <div className="col-2 cart_step_opacity">
                                <div className="text-center pb-2">STEP2</div>
                                <div className="cart_step_block mx-auto d-flex justify-content-center align-items-center flex-column">
                                    <i className="text-light fs-2 fa-solid fa-clipboard-list"></i>
                                </div>
                                <div className="cart_step_fontsize text-center pt-2">
                                    填寫收
                                    <br />
                                    件人資料
                                </div>
                            </div>
                            <div className="col-1 d-flex justify-content-center align-items-center flex-column cart_step_opacity">
                                →
                            </div>
                            <div className="col-2 cart_step_opacity">
                                <div className="text-center pb-2">STEP3</div>
                                <div className="cart_step_block mx-auto d-flex justify-content-center align-items-center flex-column">
                                    <i className="text-light fs-2 fa-solid fa-sack-dollar"></i>
                                </div>
                                <div className="cart_step_fontsize text-center pt-2 text-center">
                                    <div>信用卡</div>
                                    <div>LinePay</div>
                                    <div>貨到付款</div>
                                </div>
                            </div>
                            <div className="col-1 d-flex justify-content-center align-items-center flex-column cart_step_opacity">
                                →
                            </div>
                            <div className="col-2 ">
                                <div className="text-center pb-2">STEP4</div>
                                <div className="cart_step_block mx-auto d-flex justify-content-center align-items-center flex-column">
                                    <i className="text-center text-light fs-2 fa-solid fa-gift"></i>
                                </div>
                                <div className="cart_step_fontsize text-center pt-2">
                                    期待
                                    <br />
                                    您的商品
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 text-center">
                        <h3>恭喜您 ! 付款成功 !</h3>
                        <p>
                            付款成功紀錄已寄至您的Email信箱 aaabb@abc.com
                            <br />
                            可於您的【
                            <Link to="/">
                                <span className="text-primary">購物明細</span>
                            </Link>
                            】中查詢交易資訊
                            <br />
                            本次交易如下
                        </p>
                    </div>
                </div>
                <p className="text-end cart_border_bottom mb-0">幣別：新台幣</p>
                <div className="row justify-content-center mb-5">
                    <div className="col-12">
                        <table className="table table-hover cart_border_left cart_border_right">
                            <tbody>
                                <tr className="my-5">
                                    <td
                                        className="w-25"
                                        style={{ backgroundColor: '#dddddd' }}
                                    >
                                        訂單編號
                                    </td>
                                    <td>202212021034</td>
                                </tr>
                                <tr className="py-5">
                                    <td
                                        className="w-25"
                                        style={{ backgroundColor: '#dddddd' }}
                                    >
                                        商品明細
                                    </td>
                                    <td>
                                        香蕉 30元x3 <br />
                                        客製化便當 180元x1
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className="w-25"
                                        style={{ backgroundColor: '#dddddd' }}
                                    >
                                        訂單金額
                                    </td>
                                    <td>270 元</td>
                                </tr>
                                <tr>
                                    <td
                                        className="w-25"
                                        style={{ backgroundColor: '#dddddd' }}
                                    >
                                        折價券
                                    </td>
                                    <td>-50 元</td>
                                </tr>
                                <tr>
                                    <td
                                        className="w-25"
                                        style={{ backgroundColor: '#dddddd' }}
                                    >
                                        實際繳費金額
                                    </td>
                                    <td>220 元</td>
                                </tr>
                                <tr>
                                    <td
                                        className="w-25"
                                        style={{ backgroundColor: '#dddddd' }}
                                    >
                                        付款方式
                                    </td>
                                    <td>信用卡</td>
                                </tr>
                                <tr>
                                    <td
                                        className="w-25"
                                        style={{ backgroundColor: '#dddddd' }}
                                    >
                                        預計到貨時間
                                    </td>
                                    <td>{deliveryTime}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className=" text-center mt-5 mb-3">
                            <button className="btn">回到購物頁面</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartSuccess;
