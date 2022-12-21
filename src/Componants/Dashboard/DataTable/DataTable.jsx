import React, { createRef, useEffect, useState } from 'react';
import "./DataTable.css";
import UserTableRow from './UserTableRow';
import { toast } from 'react-hot-toast';
import { FaCloudDownloadAlt, FaPrint } from 'react-icons/fa';
import Pdf from "react-to-pdf";
// import { ExportCSV } from "./Excel/ExportToCSV";

const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [14, 20]
};

const ref = createRef();

const DataTable = () => {
    const [allUser, setAllUser] = useState([])
    const [reload, setReload] = useState(true)


    const colHandle = (e) => {

    }

    useEffect(() => {
        fetch('http://localhost:5200/getAllUser')
            .then(res => res.json())
            .then(data => setAllUser(data))
    }, [reload])

    const printHandle = () => {
        window.print()
    }

    const deleteHandle = (id) => {
        const confirm = window.confirm("Do you want to delete this user?")
        if (confirm) {
            fetch(`http://localhost:5200/deleteUser/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Image delete Successful')
                        setReload(!reload)
                    }
                })
        }
    }

    if (allUser.length === 0) {
        return <h3>Loading...</h3>
    }

    return (
        <div className='full-user-table'>

            <div className='data-user-table'>
                <div className='action-btn no-print '>
                    <Pdf targetRef={ref} options={options} x={.5} y={.5} scale={1} filename="dataTable.pdf">
                        {({ toPdf }) => <button className="admin-btn" onClick={toPdf}><FaCloudDownloadAlt className='icon' /> Download</button>}
                    </Pdf>
                    <button className="admin-btn" onClick={printHandle}><FaPrint className='icon' /> Print</button>
                    <button className='admin-btn' onClick={printHandle}> Show / HideColumn</button>
                </div>

                <div ref={ref} className='print full-table'>
                    <h1 className='heading'>All Users</h1>
                    <table className="table-customized " >
                        <thead>
                            <tr className=''>
                                <th className='check-th no-print'><input type="checkbox" name="" id="" /></th>
                                <th> User</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Plan</th>
                                <th>status</th>
                                <th id='action-row' className='no-print'>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUser.map(row => <UserTableRow row={row} key={row._id} deleteHandle={deleteHandle} />)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default DataTable;