import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteUser, getUserFetch } from '../../store/reducer/user/userSlice';

import { Table } from 'react-bootstrap';
import "./dashboard.scss";
import UpdateUser from '../../components/modals/UpdateUser';

const Dashboard = () => {
  const [action, setAction] = useState("");
  const [userId, setUserId] = useState("");

    const dispatch = useDispatch();
    const users = useSelector(state=>state.users.users);

    useEffect(()=>{
    dispatch(getUserFetch())
  },[dispatch])

  const handleUpdate = (id) => {
    setAction("update");
    setUserId(id);
  };
  const handleCloseUpdateModal = () => {
    setAction("");
  };
  const handleDeleteUser = (userId) => {
    alert("This will delete the user details");
    dispatch(deleteUser(userId));
  };
  return (
    <>
      <div className="pt-4" id="my_table">
        <div className="scroll_table">
          <Table>
            <thead>
              <tr>
                <th>Avtar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className=''><img src={item?.avatar} alt={item?.first_name}/></td>
                    <td className="">{item?.first_name}</td>
                    <td className="">{item?.email}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <i
                          className="fa fa-pencil me-3 cp"
                          onClick={() => handleUpdate(item.id)}
                        ></i>
                        <i
                          className="fa fa-trash cp"
                          onClick={() => handleDeleteUser(item.id)}
                        ></i>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
      {action === "update" ? (
        <UpdateUser
          userId={userId}
          show={action}
          handleClose={handleCloseUpdateModal}
        />
      ) : null}
    </>
  )
}

export default Dashboard
