class AppUrl {


    // https://backend.hellosuperstars.com/api/
    static BaseUrl = 'https://backend.hellosuperstars.com/api/';
    static MediaBaseUrl = 'https://backend.hellosuperstars.com/';

    static QrVerification = this.BaseUrl + 'star_qr_verify';
    static CreateUser = this.BaseUrl + 'superStar/register';
    static otpVerification = this.BaseUrl + 'star_otp_verify';
    static StarInstrucation = this.BaseUrl + 'star-instrucation';
    static SuperStarReg = this.BaseUrl + 'superStar/register';
    static SuperStarLogin = this.BaseUrl + 'star_login';




}

export default AppUrl;