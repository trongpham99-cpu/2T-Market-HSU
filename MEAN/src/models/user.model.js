class User{
    /**
     * 
     * @param {String} userAccount 
     * @param {String} userPassword 
     * @param {String} userName 
     * @param {Number} userPhone 
     * @param {String} userAddress 
     * @param {String} userMail
     * @param {String} role
     */
    constructor(userAccount,userPassword,userName,userPhone,userAddress,userMail,role){
        this.userAccount = userAccount;
        this.userPassword = userPassword;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userAddress = userAddress;
        this.userMail = userMail;
        this.role= role;
    }
}

module.exports = User;