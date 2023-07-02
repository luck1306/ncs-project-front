import { useEffect, useState } from "react";
import GetProblemAPI from "../../libs/api/GetProblemAPI";
import CheckAnswer from "../../libs/function/CheckAnswer";
import PutProblemAPI from "../../libs/api/PutProblemAPI";

export default function ProblemPage() {
    const [problem, setProblem] = useState([]);
    const [count, setCount] = useState(0);
    const [score, setScore] = useState({
        maxScore : 0,
        currentScore : 0
    });
    useEffect(()=> {
        GetProblemAPI({setProblem});
    }, []);
    useEffect(()=>{
        console.log(score);
    }, [score]);
    if (sessionStorage.getItem("access-token") === null) return (
        <div>
            로그인 해주세요
        </div>
    )
    else 
    return (
        <div>
            {problem.map((e)=> (
                <Problem {...{...e, count, setCount}}></Problem>
            ))}
            <br />
            <button onClick={()=>PutProblemAPI(count, setScore)}>채점하기</button> 
            <h1>내 최고 점수 : {score.maxScore}</h1>
            <h1>현재 점수 : {score.currentScore}</h1>
        </div>
    );
}

function Problem(props) {
    const [myAnswer,setMyAnswer] = useState('');
    return (
        <div>
            <p>{props.problem}</p>
            <input type="text" id="myAnswer" placeholder="문제가 뜻하는 단어를 쓰시오" value={myAnswer} onInput={(e)=>{
                setMyAnswer(e.target.value)
            }}/>
            <input type="hidden" id="answer" value={props.answer}/>
            <br />
            <button onClick={(e)=>CheckAnswer({
            ...props,
                myAnswer,
            })}>확정</button>
        </div>
    )
}