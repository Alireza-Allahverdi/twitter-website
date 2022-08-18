import { useEffect } from "react"
import { Outlet } from "react-router"
import RightSide from "../RightSide/RightSide"
import LeftSide from "../LeftSide/LeftSide"
import { GetProfileReq } from "../../../api/auth-api"
import { useNavigate } from "react-router-dom"
import { useTweetState } from "../../../context/TweetContext"
import { BarLoader } from "react-spinners"


function SideBarLayout() {

  let navigate = useNavigate()

  const { loaderState } = useTweetState()
  const { offcanvasState } = useTweetState()

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
      {
        loaderState ?
          <div className="barloader">
            <BarLoader
              width={200}
              height={5}
              color='#00b3ff'
            />
            <p>لطفا شکیبا باشید</p>
          </div>
          :
          <>
            <div className={offcanvasState ? "rightSideStuffOpen" :"rightSideStuff"}>
              {
                <RightSide />
              }
              <hr />
            </div>
            {/* outlet allows it to take the routes that need these features as children inside a route now
  all the pages except the authentication page have the right and left sidebar */}
            <Outlet />
            <hr />
            <LeftSide />

          </>
      }
    </>
  )
}

export default SideBarLayout