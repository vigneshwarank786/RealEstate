import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register ,clearAuthError} from "../../actions/userActions";
import MetaData from "../Layout/MetaData";
import { toast } from "react-toastify";

const Registration = () => {


  const [formData, setForm] = useState({
    username: "",
    email: "",
    password: ""
    });

  const [avatar,setAvatar]=useState("");
  const [avatarPreview,setAvatarPreview]=useState("images/default_avatar.png");

const dispatch=useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(state => state.authState)


  const handleChange = (e) => {
    if(e.target.name === 'avatar') {
      const reader = new FileReader();
      reader.onload = () => {
           if(reader.readyState === 2) {
               setAvatarPreview(reader.result);
               setAvatar(e.target.files[0])
           }
      }


      reader.readAsDataURL(e.target.files[0])
   }else{
    setForm({...formData, [e.target.name]:e.target.value })
   }
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(avatar,"avatar");
    console.log(formData,"formData");

    const finalData=new FormData();
    finalData.append('username',formData.username)
    finalData.append('email',formData.email)
    finalData.append('password',formData.password)
    finalData.append('avatar',avatar)
    console.log(finalData,"finalData");
    dispatch(register(finalData))
  };

  useEffect(()=>{
    if(isAuthenticated) {
        navigate('/');
        return
    }
    if(error)  {
        toast(error, {
            position: toast.POSITION.BOTTOM_CENTER,
            type: 'error',
            onOpen: ()=> { dispatch(clearAuthError) }
        })
        return
    }
},[error, isAuthenticated, dispatch, navigate])


  return (
    <Fragment>
      <MetaData title={'Register Page'}/>
     <form className="Rform" onSubmit={handleForm} encType='multipart/form-data'>
        <h2 className="text-center">Register Form</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <figure className="avatar mr-3 item-rtl">
            <img
              src={avatarPreview}
              className="rounded-circle"
              alt="Avatar"
            />
          </figure>
          <div className="custom-file">
            <input
              type="file"
              name="avatar"
              className="custom-file-input"
              id="customFile"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group text-center mt-4">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            Submit
          </button>
        </div>
        <Link to="/login" className="links">
          Login Page
        </Link>
      </form>
    </Fragment>
  );
};

export default Registration;
