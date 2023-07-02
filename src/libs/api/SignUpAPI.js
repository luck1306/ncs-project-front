import axios from "axios";

export default function SignUpAPI(props) {
    axios({
        url: "http://localhost:8080/auth/sign-up",
        method: "POST",
        data: {
            accountId: props.state.accountId,
            name: props.state.name,
            password: props.state.password,
            birth: props.state.birth
        }
    })
    .then((res) => {
        console.log(res.data);
        window.location.replace("http://localhost:3000");
    })
    .catch((res) => {
        alert("SIGN UP ERROR");
    });
}