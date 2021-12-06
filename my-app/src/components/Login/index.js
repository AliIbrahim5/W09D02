// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {useDispatch,useSelector} from "react-redux";
// import { login } from "../../reducers/login";
// import "./style.css"


// const URL = "http://localhost:5000";


// const Login = () => {
//   const log = useSelector((state)=>{
//     return {
//       sigin: state.sigin,
//     }
//   });

//   console.log(log);

//   const dispatch = useDispatch();

  
//   const navigate = useNavigate();
//   const [err, setErr] = useState("");
//   const login = async (e) => {
//     e.preventDefault();
//     try {
      
//       const login = await axios.post(`${URL}/login`, {
//         email: e.target.email.value,
//         password: e.target.password.value,
        
//       });

//       const logn ={
//         user: login.data.result,
//         token:login.data.token,
//       }



//       dispatch(login({logn}))
//       // console.log(result);
//       // if (result.data.token) {
//       //   localStorage.setItem("token", result.data.token);
//       //   console.log(result.data);
//       //   localStorage.setItem("role", result.data.result.role);
//       //   if(result.data.result.role.role=='admin'){
//       //     navigate("/Task");
//       //   }else{
           
//       //   }
//       // } else {
//       //   setErr(result.data);
//       // }
//     } catch (error) {
//       console.log(error);
//     }
//   };
  

//   return (
   
//     <div className="login-box">
    
//       <form onSubmit={login}>
//       <div className="input-field">
//         <p>Email:</p>
//         <input type="email" name="email" />
//         </div>
//         <div className="input-field">
//         <p >Password:</p>
//         <input type="password" name="password" />
//         </div>
//         <button type="submit"  className="button">Login</button>
        
//       </form>
      
//       <p>{err}</p>
//     </div>
 
//   );
// };

// export default Login;


// import React from "react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router";
// import axios from "axios";
// import "./style.css";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../reducers/login.js";
// // import signIn from "../reducers/login";

// const URL = "http://localhost:5000";
// const Login = () => {
//   const state = useSelector((state) => {
//     return {
//       signIn: state.signIn,
//     };
//   });
//   console.log(state);
//   const dispatch = useDispatch();
//   // eslint-disable-next-line
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     let local = localStorage.getItem("token");
//     setTokenLocal(local);
//   }, []);

//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [tokenLocal, setTokenLocal] = useState("");
//   const reg = () => {
//     navigate("/register");
//   };

//   const logIn = async (e) => {
//     e.preventDefault();

//     const res = await axios.post(`${URL}/login`, {
//       email: email,
//       password: password,
//     });
//     // console.log(res.data.result);

//     const data = {
//       user: res.data.result,
//       token: res.data.token,
//     };
//     console.log("data", data);
//     dispatch(login({ data }));

//     if (res) {
//       localStorage.setItem("role", res.data.result.role);
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("id", res.data.result._id);

//       let local = localStorage.getItem("token");
//       setTokenLocal(local);
//     }
//   };

//   return (
//     <div className="login">
    
   
//       ) : (
//         <>
//           {" "}
//           <h1>Login</h1>
//           <form onSubmit={logIn}>
//             <input
//               className="inputVal"
//               type="text"
//               name="email"
//               placeholder="Email Address"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               className="inputVal"
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <input
//               type="submit"
//               value="Login"
//               id="loginBtn"
//               className="btn btn-primary"
//             />
            
//           </form>
//           <p onClick={reg}>Not have an account ?</p>{" "}
//         </>
//       )}
//     </div>
//   );
// };

// export default Login;


import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Task from "../Task";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reducers/login.js";
// import signIn from "../reducers/login";

const URL = "http://localhost:5000";
const Login = () => {
  const state = useSelector((state) => {
    return {
      signIn: state.signIn,
    };
  });
  console.log(state);
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let local = localStorage.getItem("token");
    setTokenLocal(local);
  }, []);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tokenLocal, setTokenLocal] = useState("");
  const reg = () => {
    navigate("/Resgister");
  };

  const logIn = async (e) => {
    e.preventDefault();

    const res = await axios.post(`${URL}/login`, {
      email: email,
      password: password,
    });
    // console.log(res.data.result);

    const data = {
      user: res.data.result,
      token: res.data.token,
    };
    console.log("data", data);
    dispatch(login({ data }));

    if (res) {
      localStorage.setItem("role", res.data.result.role);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.result._id);

      let local = localStorage.getItem("token");
      setTokenLocal(local);
    }
  };

  return (
    <div className="login">
      {tokenLocal ? (
        <Task />
      ) : (
        <>
          {" "}
          <h1>Login</h1>
          <form onSubmit={logIn}>
            <input
              className="inputVal"
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="inputVal"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="submit"
              value="Login"
              id="loginBtn"
              className="btn btn-primary"
            />
          </form>
          <p onClick={reg}>Not have an account ?</p>{" "}
        </>
      )}
    </div>
  );
};

export default Login;
