export const SERVER = 'http://localhost:3600';

export const AB_GET_PRODUCT = `${SERVER}/product`;
// export const AB_GET_LIST_AUTH = `${SERVER}/manage/product?userId=1`;
export const AB_GET_HOT_SALES = `${AB_GET_PRODUCT}/hot_sale`;
export const CART_LIST_TOBUY = `${SERVER}/cart`;
export const CART_LIST_CHANGE_COUNT = `${SERVER}/cart/changenum`;
export const CART_LIST_DELETE = `${SERVER}/cart/delete`;
export const CART_LIST_CHECK = `${SERVER}/cart/readytobuy`;
export const CART_LIST_ORDERLIST = `${SERVER}/cart/addtoorderlist`;
export const CART_LINEPAY = `${SERVER}/linepay`;
export const CART_LINEPAY_CHECK = `${SERVER}/linepay-check`;
export const CART_EMAIL = `${SERVER}/cartemail`;
export const CART_DISCOUNT = `${SERVER}/cart/getdiscount`;
export const CART_DISCOUNT_CHANGEISUESD = `${SERVER}/cart/discountcouponused`;
export const customized_lunch_CHECK = `${SERVER}/customized_lunch/api`;
export const AB_POST_UPLOAD_PHOTOS = `${SERVER}/try-uploads`;
export const CART_ADD_PRODUCT = `${SERVER}/cart/addfresh`;
export const AB_GET_COUPON = `${SERVER}/game/coupon`;

export const COMMENT_MAIN = `${SERVER}/comment`;
export const COMMENT_ITEM = `${SERVER}/comment/sid`;

export const PRODUCT_COLLECT = `${SERVER}/product_collect`;
// export const COMMENT_MAIN = `${SERVER}/comment`;
// export const COMMENT_ITEM = `${SERVER}/comment/sid`;

export function getImgUrl(name) {
    return `${SERVER}/images/${name}`;
}
