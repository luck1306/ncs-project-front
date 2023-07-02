import { useEffect, useState } from "react"
import PostProbleAPI from "../../libs/api/PostProblemAPI"

export default function PostProblemPage() {
    const [problem4Post, setProblem4Post] = useState({
        problem: "",
        answer: "",
        type: ""
    })
    useEffect(()=> {console.log(problem4Post)}, [problem4Post])
    return (
        <div>
            <input type="text" name="problem" placeholder="problem" value={problem4Post.problem} onInput={(e)=>{
                setProblem4Post({
                    ...problem4Post,
                    [e.target.name] : e.target.value
                })
            }}/> <br />
            <input type="text" name="answer" placeholder="answer" value={problem4Post.answer} onInput={(e)=>{
                setProblem4Post({
                    ...problem4Post,
                    [e.target.name] : e.target.value
                })
            }}/> <br />
            {/* <input type="text" name="type" placeholder="OLD/YOUNG" value={problem4Post.type} onInput={(e)=>{
                setProblem4Post({
                    ...problem4Post,
                    [e.target.name] : e.target.value
                })
            }}/>  */}
            <select name="type" onInput={(e) => {
                setProblem4Post({
                    ...problem4Post,
                    [e.target.name] : e.target.value
                })
            }}>
                <option value="OLD">for senior user</option>
                <option value="YOUNG">for junior user</option>
            </select>
            <br />
            <button onClick={(e)=>PostProbleAPI(problem4Post)}>post</button>
        </div>
    )
}