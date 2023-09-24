import { Outlet } from "react-router-dom";
import NavMenu from "../Components/Header/NavMenu";

const Root = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;