import axios from "axios";

export default function PostProbleAPI(props) {
    console.log(props);
    axios({
        method: "POST",
        url: "http://localhost:8080/problem",
        data: {
            problem: props.problem,
            answer: props.answer,
            type: props.type
        },
        headers: {
            Authorization: sessionStorage.getItem("access-token")
        }
    }).then((res) => {
        alert("문제가 등록되었습니다.")
        window.location.replace("http://localhost:3000")
    }).catch((err) => {
        alert(err.response.data.code + " " + err.response.data.message);
    })
}