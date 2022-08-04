import { useEffect } from "react"
import { Outlet } from "react-router"
import RightSide from "../RightSide/RightSide"
import LeftSide from "../LeftSide/LeftSide"
import { GetProfileReq } from "../../../api/auth-api"
import { useNavigate } from "react-router-dom"


function SideBarLayout() {

  let navigate = useNavigate()

  useEffect(() => {
    GetProfileReq((isOk, data) => {
      if (!isOk) {
        return navigate("/auth")

      }
      localStorage.setItem("name", data.name)
      localStorage.setItem("image", data.image)
      localStorage.setItem("username", data.username)
      localStorage.setItem("x-auth-token", data["x-auth-token"])
    })
  }, [])

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