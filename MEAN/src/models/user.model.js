class User{
    /**
     * 
     * @param {String} userAccount 
     * @param {String} userPassword 
     * @param {String} userName 
     * @param {Number} userPhone 
     * @param {String} userAddress 
     * @param {String} userImage 
     * @param {Number} userCoin 
     */
    constructor(userAccount,userPassword,userName,userPhone,userAddress,userImage,userCoin){
        this.userAccount = userAccount;
        this.userPassword = userPassword;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userAddress = userAddress;
        this.userImage = userImage;
        this.userCoin = userCoin;
    }
}

module.exports = User;