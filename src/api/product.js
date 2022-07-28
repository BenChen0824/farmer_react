import axios from 'axios';
import { AB_GET_PRODUCT, getImgUrl } from '../config/ajax-path';

export async function fetchProduct(goToPage, hashTag, type) {
    const res = await axios.get(
        `${AB_GET_PRODUCT}?page=${goToPage}&hashTag=${hashTag}&type=${type}`
    );
    const { data } = res;

    if (data && data.rows) {
        const newRows = data.rows.map((el) => {
            const { product_img, ...rest } = el;
            return {
                ...rest,
                product_img: product_img.map((o) => getImgUrl(o)),
            };
        });
        data.rows = newRows;
    }

    return res.data;
}

export async function getProductItem(sid) {
    const res = await axios.get(`${AB_GET_PRODUCT}?sid=${sid}`);
    const { data } = res;

    if (data && data.rows) {
        const [item] = data.rows.map((el) => {
            const { product_img, ...rest } = el;
            return {
                ...rest,
                product_img: product_img.map((o) => getImgUrl(o)),
            };
        });
        return item;
    }

    return {};
}
