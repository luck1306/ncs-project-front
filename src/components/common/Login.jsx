import LoginAPI from "../../libs/api/LoginAPI";
import onChangeProperty from "../../libs/function/onChangeProperty";

export default function Login(props) {
    return (
        <div>
            <input 
                type="text" 
                name="accountId"
                placeholder="accountId"
                onChange={
                    (e) => onChangeProperty(e, props.values)
                }
            /><br />
            <input 
                type="password" 
                name="password"
                placeholder="password"
                onChange={
                    (e) => onChangeProperty(e, props.values)
                }
            /><br />
            <button 
                type="submit"
                onClick={(e) =>
                    LoginAPI(props.values)
                }
            >로그인</button>
        </div>
    );
}