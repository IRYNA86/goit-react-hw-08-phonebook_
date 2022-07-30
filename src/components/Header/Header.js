import { useSelector } from "react-redux";
import { authSelectors } from "components/store/auth"; 
import UserMenu from "components/UserMenu/UserMenu";
import Navigation from "components/Navigation/Navigation";

function Header() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return(
        <>
        {isLoggedIn ? <UserMenu/> : <Navigation/>}
        </>
    )
    
}
export default Header