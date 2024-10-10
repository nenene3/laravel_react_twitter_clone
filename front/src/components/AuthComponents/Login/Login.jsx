import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../formComponents/TextInput";
import { useSelector, useDispatch } from "react-redux";
import { TwitterIcon } from "lucide-react";
import Button from "../../Button";
import axios from "axios";
import {setCredentials} from '../../../features/authSlice'
const Register = () => {

  const [errors,setErrors]= useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "asdf",
  });


  const dispatch = useDispatch();
  const navigate = useNavigate();


  const user = useSelector((state) => state.auth.user);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/login", JSON.stringify(formData));

      const data = res.data;
      console.log(res.data)
      dispatch(setCredentials(data))
      setErrors({});
      navigate('/check');
    } catch (e1) {
      console.log(e1.response.data);
      if(e1.response.data.errors){
        setErrors(e1.response.data.errors);
      }
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="flex h-screen w-screen bg-slate-800 items-center justify-center">
      <div className="bg-slate-400 flex flex-col w-[400px] h-[500px]">
        <TwitterIcon className=" mx-auto border border-black mt-6" size={40} />
        <h1 className=" text-center  text-3xl mt-2">login</h1>
        <div className=" inline-flex mx-auto mb-5 gap-2">
          <h2>have acount? </h2>
          <Link to="/auth/register">register</Link>
        </div>
        <form
          className="   flex flex-col pt-5 gap-5 px-6"
          onSubmit={submitHandler}
          method="POST"
        >
          <TextInput
            placeholder="email"
            id="email"
            name="email"
            type="email"
            onChange={changeHandler}
          />
          {errors.email && <h1 className=" text-red-700">{errors.email}</h1>}
          <TextInput
            placeholder="password"
            id="password"
            name="password"
            type="password"
            onChange={changeHandler}
          />
          {errors.password && <h1 className=" text-red-700">{errors.password}</h1>}

          <Button type="submit">login</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
