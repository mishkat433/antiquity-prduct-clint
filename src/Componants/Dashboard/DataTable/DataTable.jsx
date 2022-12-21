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
    const [allcheck, setAllCheck] = useState(false)
    const [showHide, setShowHide] = useState({})


    // const colHandle = (e) => {

    // }

    useEffect(() => {
        fetch('https://antiquity-server.vercel.app/getAllUser')
            .then(res => res.json())
            .then(data => setAllUser(data))
    }, [reload])

    const printHandle = () => {
        window.print()
    }

    const deleteHandle = (id) => {
        const confirm = window.confirm("Do you want to delete this user?")
        if (confirm) {
            fetch(`https://antiquity-server.vercel.app/deleteUser/${id}`, {
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

    const showHideHandle = (e) => {
        setShowHide(e.target.value)
    }

    if (allUser.length === 0) {
        return <h3>Loading...</h3>
    }

    return (
        <div className='full-user-table'>

            <div className='data-user-table'>
                <div className='action-btn no-print '>
                    <Pdf targetRef={ref} options={options} x={.5} y={.5} scale={1} filename="dataTable.pdf">
                        {({ toPdf }) => <button className="admin-btn no-print" onClick={toPdf}><FaCloudDownloadAlt className='icon' /> Download</button>}
                    </Pdf>
                    <button className="admin-btn no-print" onClick={printHandle}><FaCloudDownloadAlt className='icon' /> Excel Sheet</button>
                    <button className="admin-btn no-print" onClick={printHandle}><FaPrint className='icon' /> Print</button>
                    <select className="admin-btn no-print" onChange={(e) => showHideHandle(e)} name="showHide" id="">
                        <option value="">Show/Hide Column</option>
                        <option value="user">User</option>
                        <option value="email">Email</option>
                        <option value="plan">Plan</option>
                        <option value="role">Role</option>
                        <option value="status">Status</option>
                        <option value="action">Action</option>
                    </select>
                </div>

                <div ref={ref} className='print full-table'>
                    <h1 className='heading'>All Users</h1>
                    <table className="table-customized " >
                        <thead>
                            <tr className=''>
                                <th className='check-th no-print'><input onClick={() => setAllCheck(!allcheck)} type="checkbox" name="" id="" /></th>
                                {showHide === "user" ? undefined : <th> User</th>}
                                {showHide === "email" ? undefined : <th>Email</th>}
                                {showHide === "role" ? undefined : <th> Role</th>}
                                {showHide === "plan" ? undefined : <th> Plan</th>}
                                {showHide === "status" ? undefined : <th> Status</th>}
                                {showHide === "action" ? undefined : <th id='action-row' className='no-print'>action</th>}

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUser.map(row => <UserTableRow row={row} key={row._id} deleteHandle={deleteHandle} allcheck={allcheck} showHide={showHide} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default DataTable;