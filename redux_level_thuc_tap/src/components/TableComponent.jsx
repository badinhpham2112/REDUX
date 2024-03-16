import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { handleCreateRedux, handleDeleteRedux, handleGetAllUser } from '../redux/actions/userAction';
import {useSelector, useDispatch} from 'react-redux';

const TableComponent = () => {
    // const [lisUser, setListUser] = useState("");
    const lisUser = useSelector((state) => state.user.listUser)
    const isLoading = useSelector((state) => state.user.isLoading)
    const isError = useSelector((state) => state.user.isError)
    console.log(isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(handleGetAllUser())
       
    }, [])

   

    const handleDelete = (item) => {
      // console.log('id: ', id)
      dispatch(handleDeleteRedux(item.id))
    }

    console.log('handleDelete: ', handleDelete)
    return(
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>UserName</th>
          <th>Action</th>
         
        </tr>
      </thead>
     
       <tbody>
     
       {isLoading && isLoading === true ? (
        <>
         <span>Loading...</span>
        </>
        ): isError && isError === true ? (
          <><span>Error</span></>
        ):
       <>
       {lisUser && lisUser.map((item, index) => (
          <tr key={`user_${index}`}>
          <td>{item.id}</td>
          <td>{item.email}</td>
          <td>{item.username}</td>
          <td>
            <div>
                <Button onClick={() => handleDelete(item)} 
                variant="danger mx-2">Delete</Button>
                <Button variant="warning">Edit</Button>
            </div>
             
          </td>
        
        </tr>
 
       ))}
       </>
     
      }
       
       </tbody>

     
     
   
    </Table>
    )
}

export default TableComponent