import axios from "axios";

export default function LogoutAPI() {
    axios({
        method: "DELETE",
        url: "http://localhost:8080/auth/logout",
        headers: {
            Authorization: sessionStorage.getItem("access-token")
        }
    }).then((res) => {
        sessionStorage.removeItem("access-token");
        sessionStorage.removeItem("refresh-token");
        alert("로그아웃되었습니다.");
        window.location.replace("http://localhost:3000");
    }).catch((err) => {
        alert(err.response.data.code + " " + err.response.data.message);
    });
}