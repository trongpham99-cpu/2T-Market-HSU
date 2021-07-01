export interface Product {
    _id: string;
    productName: string;
    productPrice: number;
    description: string;
    checkStatus: boolean,
    productAddress:string,
    loai_sp: string,
    nguoi_dang: string,
    imageUrl: string,
    uploaded: Date,
}

