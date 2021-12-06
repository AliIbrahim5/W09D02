// const instialState={
//     user:'',
//     token:'',
// };

// const sigin = (state = instialState,action) => {
//  const {type,payload} = action;
//  switch (type) {
//      case 'LOGIN':
//      const {user,token} = payload;
//      localStorage.setItem('token',token);
//      return {user,token};

//      case 'LOGOUT':
//      localStorage.clear();
//      return {user:null,token:''};

//    default: return state;

//  } 

// };

// export default sigin;

// export const login =(data) => {
//     return {
//         type: 'LOGIN',
//         payload:data
//     };
// };

// export const logout =(data) => {
//     return {
//         type: 'LOGOUT',
//         payload:data,
//     };
// };
// // const initialState = {
// //     token: "",
// //     role: "user"
// // }

// // const SignIn = (state = initialState, action) => {
// //     const { type, payload } = action;

// //     switch(type){
// //         case 'LOGIN':

// //         case 'LOGOUT':

// //         default:
// //             return state;
// //     }
// // }

// // export const SgnIn = (data) =>{
// //     return {
// //         type: 'LOGIN',
// //         payload: data
// //     }
// // }

// // export const LogOut = (data) =>{
// //     return {
// //         type: 'LOGOUT',
// //         payload: data
// //     }
// // }

// // export default SignIn;
const insitialState = {
    user: null,
    token: "",
  };
  
  const signIn = (state = insitialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "LOGIN":
        const { user, token } = payload;
        localStorage.setItem("token", token);
        return { user, token };
  
      case "LOGOUT":
        localStorage.clear();
        return { user: null, token: "" };
      default:
        return state;
    }
  };
  
  export default signIn;
  
  export const login = (data) => {
    return {
      type: "LOGIN",
      payload: data,
    };
  };
  
  export const logout = (data) => {
    return {
      type: "LOGOUT",
      payload: data,
    };
  };
  