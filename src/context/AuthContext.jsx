// import { createContext, useReducer } from "react";

// const AuthContext = createContext()

// const authReducer = (state, action) => {
//     switch (action.type) {
//         case 'LOGIN':
//             return { user: action.payload }
//         case 'LOGOUT':
//             return { user: null }
//         case 'REGISTER':
//             return { user: action.payload }
//         default:
//             return state
//     }
// };

// const AuthContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(authReducer, {
//         user: null
//     })

//     return (
//         <AuthContext.Provider value={{...state, dispatch}}>
//             { children }
//         </AuthContext.Provider>
//     )
// }

// export { AuthContext, authReducer, AuthContextProvider }
