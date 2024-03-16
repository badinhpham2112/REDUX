import { useEffect, useState } from "react"
import { handleCreateRedux, handleGetAllUser } from "../redux/actions/userAction"
import { useDispatch , useSelector} from 'react-redux'

const FormCompnent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    const isLoadingCreate = useSelector((state) => state.user.isLoadingCreate)
    const isErrorCreate = useSelector((state) => state.user.isErrorCreate)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     handleCreateUser()

    // })
    const handleCreateUser = async() => {
       await dispatch(handleCreateRedux({email, password, username}))
       await  dispatch(handleGetAllUser())
        setEmail('')
        setPassword('')
        setUserName('')
    }
   
    return(
        // <form className="col-5 my-3">
        <div className="col-5 my-4">
            <h3 className="text-uppercase">Add new user</h3>
            <div className="mb-3 mt-3">
                <label>Email:</label>
                <input
                value={email}
                onChange={(event) => setEmail(event.target.value)} 
                type="email" className="form-control" placeholder="Enter email"/>
            </div>
            <div className="mb-3">
                <label>Password:</label>
                <input 
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                type="password" 
                className="form-control"  
                placeholder="Enter password"/>
            </div>

            <div className="mb-3">
                <label>UserName</label>
                <input
                value={username}
                onChange={(event) => setUserName(event.target.value)}
                type="username" className="form-control"  placeholder="Enter userName"/>
            </div>
            {isLoadingCreate === true && isErrorCreate === false ?(
             <button
             disabled
             onClick={handleCreateUser} 
             className="btn btn-primary">Create</button>
             ):(
                <button
                onClick={handleCreateUser} 
                className="btn btn-primary">Create</button>
             )}
          
            </div>
        // </form>
    )

}
export default FormCompnent