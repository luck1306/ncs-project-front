import axios from "axios";

export default function GetProblemAPI(props) {
    axios({
        method: "GET",
        url: "http://localhost:8080/problem?size=10&page=0",
        headers: {
            Authorization: sessionStorage.getItem("access-token")
        }
    }).then((res) => {
        props.setProblem(res.data.list);
    }).catch((err) => {
        alert(err.response.data.code + " " + err.response.data.message);
    });
}