import axios from 'axios';
import {
    AB_GET_PRODUCT,
    getImgUrl,
    AB_GET_HOT_SALES,
    CART_ADD_PRODUCT,
} from '../config/ajax-path';

export async function fetchProduct(
    page,
    hashTag,
    type,
    orderBy,
    order,
    search
) {
    const params = {
        page,
        hashTag,
        type,
        orderBy,
        order,
        search,
    };
    const res = await axios.get(AB_GET_PRODUCT, { params });
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

    return {}; //fallback
}

export async function getHotSale() {
    const res = await axios.get(AB_GET_HOT_SALES);
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

export async function getSupplierProduct(supplier) {
    const params = {
        supplier,
    };
    const res = await axios.get(AB_GET_PRODUCT, { params });
    const { data } = res;

    if (data && data.rows) {
        const newRows = data.rows.map((el) => {
            const { product_img } = el;
            return {
                ...el,
                img_urls: product_img.map((o) => getImgUrl(o)),
            };
        });
        data.rows = newRows;
    }

    return res.data;
}

export async function AddProduct() {
    const body = {};
    const res = await axios.post(AB_GET_PRODUCT, body);
    console.log(res.data);
}

export async function addToCart(val) {
    const { data } = await axios.post(CART_ADD_PRODUCT, val);
    // console.log(data.cart);
    return data;
}
