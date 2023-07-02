import SignUpAPI from "../../libs/api/SignUpAPI";
import onChangeProperty from "../../libs/function/onChangeProperty";

export default function SignUp(props) {
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
                type="text" 
                name="password" 
                placeholder="password"
                onChange={
                    (e) => onChangeProperty(e, props.values)
                }
            /><br />
            <input 
                type="text" 
                name="birth" 
                placeholder="ex)050224"
                onChange={
                    (e) => onChangeProperty(e, props.values)
                }
            /><br />
            <input 
                type="text"
                name="name"
                placeholder="name"
                onChange={
                    (e) => onChangeProperty(e, props.values)
                } 
            /><br />
            <button 
                type="submit" 
                onClick={
                    () => SignUpAPI(props.values)
                }
            >회원가입</button>
        </div>
    );
}