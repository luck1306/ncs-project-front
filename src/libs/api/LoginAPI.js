import axios from "axios";

export default function LoginAPI(props) {
    axios({
        url: "http://localhost:8080/auth/sign-in",
        method: "POST",
        data: {
            accountId: props.state.accountId,
            password: props.state.password
        }
    })
    .then((res) => {
        sessionStorage.setItem("access-token", "Bearer " + res.data.accessToken);
        sessionStorage.setItem("refresh-token", "Bearer " + res.data.refreshToken);
        alert("로그인되었습니다.");
        window.location.replace("http://localhost:3000");
    })
    .catch((err) => {
        alert(err.response.data.code + " " + err.response.data.message);
    });
}