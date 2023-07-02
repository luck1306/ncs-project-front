export default function CheckAnswer(props) {
    if (props.answer === props.myAnswer) {
        props.setCount((prev)=>prev+1);
    };
}