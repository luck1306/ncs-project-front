import { useEffect, useState } from "react";
import MyPageAPI from "../../../libs/api/MyPageAPI";

export default function MyPage() {
    const [data, setData] = useState({
        name: "",
        birth: "",
        maxCorrect : 0
    });
    useEffect(()=> {
        MyPageAPI({setData});
    }, [])
    if (sessionStorage.getItem("access-token") === null) return(
        <div>
            로그인 해주세요
        </div>
    ) 
    else 
    return (
        <div>
            <h1>MyPage</h1>
            <div>
                name : {data.name}
            </div>
            <div>
                birth : {data.birth}
            </div>
            <div>
                max correct : {data.maxCorrect}
            </div>
        </div>
    );
}