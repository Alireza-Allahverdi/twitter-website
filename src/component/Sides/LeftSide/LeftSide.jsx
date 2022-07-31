import React, { Fragment, useEffect, useRef, useState } from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UploadUserPhoto } from '../../../api/auth-api';
import { GetUsers } from '../../../api/user-api';

function LeftSide() {

   const [users, setUsers] = useState([])
   const [dropdownState, setDropdownState] = useState(false)
   const [userInfo, setUserInfo] = useState({
      name: !!localStorage.getItem('name') ? localStorage.getItem('name') : "no data",
      userName: !!localStorage.getItem('username') ? localStorage.getItem('username') : "no data",
      image: localStorage.getItem('image')
   })
   const [imageFile, setImageFile] = useState()
   const [loaderImg, setLoaderImg] = useState(false)
   const [loaderUser, setLoaderUser] = useState(false)

   const imageInp = useRef()

   const handleImage = (e) => {
      if (e.target.files && e.target.files.length > 0) {
         setImageFile(e.target.files[0])
      }
      const fileReader = new FileReader()
      fileReader.onload = (e) => {
         setUserInfo({
            ...userInfo,
            image: e.target.result
         })
      }
      fileReader.readAsDataURL(e.target.files[0])

      const formData = new FormData()
      formData.append("image", e.target.files[0])
      setLoaderImg(true)
      UploadUserPhoto(formData, (isOk, data) => {
         if (!isOk) {
            return alert(data)
         }
         alert('عکس پروفایل تغییر کرد')
         setLoaderImg(false)
         localStorage.setItem("image", data.imagePath)
      })
   }

   useEffect(() => {
      setLoaderUser(true)
      GetUsers((isOk, data) => {
         if (!isOk) {
            return
         }
         setLoaderUser(false)
         setUsers(data)
      })
   }, [])

   return (
      <div className='leftSide'>
         <div
            className="userInfo"
            onClick={() => {
               setDropdownState(!dropdownState)
            }}
         >
            {
               loaderImg ?
                  <div className="spinner-container">
                     <div className="spinner"></div>
                  </div>
                  :
                  userInfo.image ||
                     userInfo.image !== "undefined" ?
                     <img src={userInfo.image} alt="" />
                     : <FontAwesomeIcon icon={faUser} />

            }
            <div className="profileText">
               <div className='persianUserName'>
                  {userInfo.name}
               </div>
               <div className='userID'>
                  {userInfo.userName}
               </div>
            </div>
            <input
               ref={imageInp}
               type="file"
               style={{ display: "none" }}
               onChange={handleImage}
            />
         </div>
         {
            dropdownState &&
            <div
               className="dropdownMenu"
               onMouseLeave={() => { setDropdownState(false) }}
            >
               {/* TODO complete progfile page */}
               <div className="dropdownItem">
                  <p>
                     پروفایل
                  </p>
               </div>
               <div
                  className="dropdownItem"
                  onClick={() => {
                     imageInp.current.click()
                  }}
               >
                  <p>
                     آپلود عکس پروفایل
                  </p>
               </div>
               <div
                  className="dropdownItem"
                  onClick={() => {
                     localStorage.clear()
                     window.location.reload()
                  }}
               >
                  <p>
                     خروج
                  </p>
               </div>
            </div>

         }

         <div className="bestTwittersContainer">
            <h3 className='bestTwitterTittle'>
               بهترین توییت کنندگان
            </h3>
            <div className="divider"></div>
            {
               loaderUser ?
                  <div className="spinner-container">
                     <div className="spinner"></div>
                  </div>
                  :
                  <div className='tweetersAll'>
                     {
                        users.map((item, index) => {
                           return <Fragment key={index}>
                              <a href={`/users/${item.username}`}>
                                 <button className='bestTwittersButton'>
                                    <div className="twitters">
                                       <span className='bestTwittersImg'>
                                          {
                                             item.image ?
                                                <img className='bestTwittersImg' src={item.image} alt="" />
                                                : <FontAwesomeIcon icon={faUser} />

                                          }
                                       </span>
                                       <div className="twitterProfileText">
                                          <div className='twitterPersianName'>
                                             {item.name}
                                          </div>
                                          <div className='twitterID'>
                                             {item.username}
                                          </div>
                                       </div>
                                    </div>
                                 </button>
                              </a>
                              <div className="twittersDivider"></div>
                           </Fragment>
                        })
                     }
                  </div>
            }
         </div>
      </div>
   )
}

export default LeftSide