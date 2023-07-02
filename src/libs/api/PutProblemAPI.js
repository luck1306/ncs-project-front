import axios from "axios";

export default function PutProblemAPI(count, setScore) {
    console.log(count);
    axios({
        method: "PUT",
        url: "http://localhost:8080/problem",
        headers: {
            Authorization : sessionStorage.getItem("access-token"),
            score: count
        }
    }).then((res) => {
        console.log(res.data);
        setScore({
            maxScore :  res.data.maxScore,
            currentScore : res.data.currentScore
        });
    })
}