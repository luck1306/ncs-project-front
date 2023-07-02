import SignUp from "../common/SignUp";
import { useState } from "react";

export default function SignUpPage() {
    const [account, setAccount] = useState({
    accountId: "",
    password: "",
    birth: "",
    name: ""
});
    return (
        <div>
            <SignUp values={{
                state: account, 
                setState:setAccount
                }}></SignUp>
        </div>
    );
}