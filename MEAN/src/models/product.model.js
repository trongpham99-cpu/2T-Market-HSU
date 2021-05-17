class proDuct {
    /**
     * 
     * @param {String} productImage
     * @param {String} productName 
     * @param {Number} productPrice 
     * @param {String} description 
     * @param {Boolean} checkStatus 
     * @param {String} productAddress
     * @param {String} loai_sp
     * @param {String} nguoi_dang
     * @param {Number} uploaded
     * @param {String} imageUrl
     */
    constructor(productImage,productName,productPrice,description,productAddress,checkStatus,loai_sp,nguoi_dang,imageUrl,uploaded){
        this.productImage = productImage;
        this.productName = productName;
        this.productPrice = productPrice;
        this.description = description;
        this.checkStatus = checkStatus;
        this.productAddress = productAddress;
        this.loai_sp = loai_sp;
        this.nguoi_dang = nguoi_dang;
        this.imageUrl = imageUrl;
        this.uploaded = uploaded;
    }
}

module.exports = proDuct;