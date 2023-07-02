export default function onChangeProperty(e, STATE) {
    STATE.setState({
        ...STATE.state,
        [e.target.name]: e.target.value
    });
    // console.log(STATE.state);
}