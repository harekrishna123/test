
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react';
function Logout({setIsAuthenticated}){
    const navigate = useNavigate();
    useEffect(() => {
    sessionStorage.removeItem("user_name");
    setIsAuthenticated(false);
    navigate("/login")
    },[navigate,setIsAuthenticated]);

    return(
        <>
       
        </>
    )
}
export default Logout;