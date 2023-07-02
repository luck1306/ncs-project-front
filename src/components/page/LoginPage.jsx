import { useState } from "react";
import Login from "../common/Login";
export default function LoginPage() {
    const [login, setLogin] = useState({
        accountId: "",
        password: ""
    })
    return (
        <div>
            <Login values={{
                state: login,
                setState: setLogin
            }}></Login>
        </div>
    )
}