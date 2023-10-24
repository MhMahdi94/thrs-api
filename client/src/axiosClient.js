import axios from "axios";

const axiosClient= axios.create({
    baseURL: `https://clever-tesla.82-165-200-34.plesk.page/api/`,//`http://localhost:8000/api`
    //
    withCredentials:false,
    
});

axiosClient.interceptors.request.use((config)=>{
    var token=localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization=`Bearer ${token}`;
    return config;
})


axiosClient.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        const{response}=error;
        print('response')
        // if(response.status===401){
        //     localStorage.removeItem('ACCESS_TOKEN');
        // }
        
        throw error;
    });

export default axiosClient;