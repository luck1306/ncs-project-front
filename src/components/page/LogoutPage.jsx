import { useEffect } from "react"
import LogoutAPI from "../../libs/api/LogoutAPI";

export default function LogoutPage() {
    useEffect(()=> {
        LogoutAPI();
    }, [])
    return (
        <div></div>
    )
}