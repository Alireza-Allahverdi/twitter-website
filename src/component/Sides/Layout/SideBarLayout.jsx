import { Outlet } from "react-router"
import RightSide from "../RightSide/RightSide"
import LeftSide from "../LeftSide/LeftSide"


function SideBarLayout() {
  return (
    <>
        <RightSide />
        <hr /> 
        {/* outlet allows it to take the routes that need these features as children inside a route now
        all the pages except the authentication page have the right and left sidebar */}
        <Outlet />
        <hr />
        <LeftSide />
    </>
  )
}

export default SideBarLayout