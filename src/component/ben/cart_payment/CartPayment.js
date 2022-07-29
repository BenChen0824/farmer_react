function CartPayment() {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8 mx-auto cart_step">
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
                            <div className="col-2">
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
                            <div className="col-1 d-flex justify-content-center align-items-center flex-column">
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
                            <div className="col-2 cart_step_opacity">
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
                <div className="row flex-row-reverse">
                    <div className="col-12 col-md-4 px-4 py-3">
                        <h2>您的訂單</h2>
                        <p className="text-end cart_payment_border_bottom pb-2">
                            總計
                        </p>
                        <div className="d-flex pb-3">
                            <div className="col-4">香蕉</div>
                            <div className="col-2">*1</div>
                            <div className="col-6 text-end">NT$150</div>
                        </div>
                        <div className="d-flex justify-content-between cart_payment_border_top py-3">
                            <div className="col-6">小計</div>
                            <div className="col-6 text-end">NT$150</div>
                        </div>
                        <div className="d-flex justify-content-between py-3">
                            <div className="col-6">優惠券</div>
                            <div className="col-6 text-end">-NT$100</div>
                        </div>

                        <div className="d-flex justify-content-between cart_payment_border_bottom cart_payment_border_top py-3">
                            <div className="col-6">總金額</div>
                            <div className="col-6 text-end">NT$100</div>
                        </div>
                        <div className="d-none d-md-block my-5">
                            <h2 className="my-3">付款方式</h2>
                            <div className="">
                                <div className="form-check d-flex align-items-baseline py-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    />
                                    <label
                                        className="form-check-label px-2"
                                        htmlFor="flexRadioDefault1"
                                    >
                                        <img
                                            style={{ height: '50px' }}
                                            src="/images/ben/linepay_logo.png"
                                            alt=""
                                        />
                                    </label>
                                </div>
                                <div className="form-check d-flex align-items-center py-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    />
                                    <label
                                        className="form-check-label px-2"
                                        htmlFor="flexRadioDefault1"
                                    >
                                        信用卡付款
                                    </label>
                                </div>
                                <div className="form-check d-flex align-items-center py-3">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                    />
                                    <label
                                        className="form-check-label px-2"
                                        htmlFor="flexRadioDefault2"
                                    >
                                        貨到付款
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="my-4 text-end d-none d-md-block">
                            <button className="btn btn-success px-5">
                                下單付款
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <h2 className="my-3">帳單資訊</h2>
                        <form action="" name="form_payment">
                            <div className="my-2">
                                <label htmlFor="name">姓名*</label>
                                <br />
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form-control my-2"
                                    placeholder="請輸入您的姓名"
                                />
                            </div>
                            <div className="my-2">
                                <label htmlFor="mobile">通訊電話*</label>
                                <br />
                                <input
                                    type="text"
                                    name="mobile"
                                    id="mobile"
                                    className="form-control my-2"
                                    placeholder="09xx-xxx-xxx"
                                />
                            </div>
                            <div className="my-2">
                                <label htmlFor="email">電子信箱郵件*</label>
                                <br />
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="form-control my-2"
                                    placeholder="EX:farmer@gmail.com"
                                />
                            </div>
                            <div className="my-2">
                                <label htmlFor="">縣/市*</label>
                                <br />
                                <input
                                    type="text"
                                    name=""
                                    className="form-control my-2"
                                    placeholder="縣/市*"
                                />
                            </div>
                            <div className="my-2">
                                <label htmlFor="">鄉鎮市*</label>
                                <br />
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control my-2"
                                    placeholder="鄉鎮市:"
                                />
                            </div>
                            <div className="my-2">
                                <label htmlFor="">地址*</label>
                                <br />
                                <input
                                    type="text"
                                    className="form-control my-2"
                                    placeholder="地址:"
                                />
                            </div>
                            <div className="my-2">
                                <label htmlFor="cart_comment">訂單備註</label>
                                <br />
                                <textarea
                                    name="cart_comment"
                                    className="form-control my-2"
                                    id="cart_comment"
                                    cols="30"
                                    rows="10"
                                    placeholder="123"
                                ></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 d-md-none">
                        <h2 className="my-3">付款方式</h2>
                        <div className="">
                            <div className="form-check d-flex align-items-baseline py-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label
                                    className="form-check-label px-2"
                                    htmlFor="flexRadioDefault1"
                                >
                                    <img
                                        style={{ maxHeight: '50px' }}
                                        src="/images/ben/linepay_logo.png"
                                        alt=""
                                    />
                                </label>
                            </div>
                            <div className="form-check d-flex align-items-center py-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label
                                    className="form-check-label px-2"
                                    htmlFor="flexRadioDefault1"
                                >
                                    信用卡付款
                                </label>
                            </div>
                            <div className="form-check d-flex align-items-center py-3">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                />
                                <label
                                    className="form-check-label px-2"
                                    htmlFor="flexRadioDefault2"
                                >
                                    貨到付款
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4 text-center d-md-none">
                    <button className="btn btn-success px-5">下單付款</button>
                </div>
            </div>
        </>
    );
}

export default CartPayment;
