import axios from "axios";

export default function MyPageAPI(props) {
    axios({
        url: "http://localhost:8080/user",
        method: "GET",
        headers : {
            Authorization: sessionStorage.getItem("refresh-token")
        }
    }).then((res)=> {
        props.setData({
            name: res.data.name,
            birth: res.data.birth,
            maxCorrect: res.data.maxCorrect
        })
    }).catch((err)=> {
        alert(err.response.data.code + " " + err.response.data.message);
    });
}