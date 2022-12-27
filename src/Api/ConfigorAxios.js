import axios from 'axios';

export const ConfigorAxios =  () =>{
    
    axios.defaults.baseURL = 'http://meeting.sahwalaws.com/api';
    
}