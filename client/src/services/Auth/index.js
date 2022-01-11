import { API } from '../../utils/utilities'
import Axios from 'axios'
export default function login(data) {

    const payload = {
        action: "user.login",
        data: {
            ...data
        }
    }

    Axios({
        method: 'post',
        url: API,
        data: payload, // you are sending body instead
        headers: {
            // 'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        console.log(res);
    })
}