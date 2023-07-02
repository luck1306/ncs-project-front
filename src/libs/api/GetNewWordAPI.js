import axios from "axios";

export default function GetNewWordAPI() {
    return axios({
        url: "http://localhost:8080",
        method: "GET"
    })
    .then((res) => {
        return res.data;
    })
    .catch((err) => alert(err.response.data.code + " " + err.response.data.message));
}