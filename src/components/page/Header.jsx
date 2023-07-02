import styled from "styled-components";

export default function Header() {
    if (sessionStorage.getItem("access-token") == null)
    return (
        <div style={{display: "inline-flex"}}>
            <a href="/"><P>Main</P></a>
            <a href="/login"><P>Login</P></a>
            <a href="/sign-up"><P>Sign up</P></a>
        </div>
    );
    else 
    return (
        <div style={{display: "inline-flex"}}>
            <a href="/"><P>Main</P></a>
            <a href="/post/problem"><P>Post Problem</P></a>
            <a href="/my-page"><P>my-page</P></a>
            <a href="/problem"><P>go to solve problem!</P></a>
            <a href="/logout"><P>logout</P></a>
        </div>
    );
}
const P = styled.span`
    color: red;
    padding: 50px;
`;