 class AppURL {
    static BaseURL = "http://127.0.0.1:8000/api"
    static VisitorDetails = this.BaseURL+"/get-visitor" //get visitor details
    static PostContact = this.BaseURL+"/post-contact"  //post contact
}

export default AppURL