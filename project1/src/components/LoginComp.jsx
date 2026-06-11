import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginSuccess } from '../redux/authSlice'
import { Navigate, useNavigate } from "react-router-dom"

export default function LoginComp(){
    const [username, SetUsername] = useState("")
    const [password, SetPassword] = useState("")
    const[msg, setMsg] = useState("") 
    const dispatch = useDispatch();

  const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const reqoptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    };
    fetch("http://localhost:9000/login",reqoptions)
    .then(
        resp => {
            if(resp.status === 200)
                return resp.json();
            else if(resp.status === 404)
                setMsg("Wrong Id/password")
                return{}
        }
    ).then(data => {
        console.log(JSON.stringify(data))
        //redux state modify
        dispatch(loginSuccess({user: data.user , token: data.token}))

        if(data.user.role ===1 ){
            //admin
            navigate("/admin")
        }
        else if(data.user.role === 2){
            //user
            //navigate to dashboard
            navigate("/user")
        }
        //routing to the dashboard
    })
    alert("login successful");
    };
    
    return (
        <>
        <h1>Login Form</h1>
        <form>
            Enter Username : 
            <input type="text" name="username" value={username} onChange={(e)=>{SetUsername(e.target.value)}} /><br />
            Enter Password : <input type="text" name="password" value={password} onChange={(e)=>{SetPassword(e.target.value)}} /> <br />
            <input type="submit" value="LOGIN" onClick={handleSubmit}/>
        </form>
        <p>{username}</p>
        <p>{password}</p>
        <p>{msg}</p>
        </>
    )
}