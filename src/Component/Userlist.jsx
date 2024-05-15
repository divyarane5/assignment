import React,{useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Userlist(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost/ptest/phpreactcrud/api/action.php';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
        });
    }, []);
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div class="col-md-6"><b>User Data</b></div>
                    <div class="col-md-6">
                        <Link to="/add" className="btn btn-success btn-sm float-end">Add</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Fullname</th>
                            <th>Email</th>
                  
                            <th>Country Code</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index) => (

                            <tr key={index}>
                                <td>{user.full_name}</td>
                                <td>{user.email}</td>
                               
                                <td>{user.country}</td>
                              
                            </tr>
                        ))
                            
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Userlist;