export const SERVER = 'http://localhost:3600';

export const AB_GET_PRODUCT = `${SERVER}/product`;
export const AB_GET_LIST_AUTH = `${SERVER}/manage/product?userId=1`;
export const AB_GET_HOT_SALES = `${AB_GET_PRODUCT}/hot_sale`;

export function getImgUrl(name) {
    return `${SERVER}/images/${name}`;
}
