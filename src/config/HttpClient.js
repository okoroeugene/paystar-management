import axios from "axios";

let axiosInstance = axios.create({
    baseURL: `${API_URL}`,
    timeout: 10000,
});

export default axiosInstance;


// import axios from "axios";
// import config from '../config'



// class HttpClient {
//     constructor(sessidHeaderName) {
//         this.sessidHeaderName = sessidHeaderName;
//         this.sessid = ''
//         this.axiosInstance = axios.create({
//             baseURL: "http://localhost:3000/",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//     }

//     setSessId(sessidValue) {
//         this.sessid = sessidValue;
//     }

//     getSessId() {
//         return this.sessid;
//     }

//     clearSessId() {
//         this.sessid = '';
//     }

//     get(url, config) {
//         if (config == null) {
//             config = {};
//         }

//         if (config.headers == null) {
//             config.headers = {};
//         }

//         if (this.sessid != '') {
//             config.headers[`${this.sessidHeaderName}`] = this.sessid;
//         }

//         return this.axiosInstance.get(url, config);
//     }

//     post(url, data, config) {

//         if (data == null) {
//             data = {};
//         }

//         if (config == null) {
//             config = {};
//         }

//         if (config.headers == null) {
//             config.headers = {};
//         }

//         if (this.sessid != '') {
//             config.headers[`${this.sessidHeaderName}`] = this.sessid;
//         }

//         return this.axiosInstance.post(url, data, config);
//     }

// }

// // const httpclient = axios.create({
// //   baseURL: "http://localhost:3000/",
// //   headers: {
// //     "Content-Type": "application/json"
// //   }
// // })


// //export default httpclient;
// export default new HttpClient(config.sessidHeaderName);