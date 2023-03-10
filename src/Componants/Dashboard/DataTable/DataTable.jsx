import React, { createRef, useEffect, useState } from 'react';
import "./DataTable.css";
import UserTableRow from './UserTableRow';
import { toast } from 'react-hot-toast';
import { FaAngleDown, FaCloudDownloadAlt, FaPrint } from 'react-icons/fa';
import Pdf from "react-to-pdf";
// import { DownloadTableExcel } from 'react-export-table-to-excel';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


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
    const [showHide, setShowHide] = useState(false)
    const [columnShow, setcolumnShow] = useState({ user: "user", email: "email", plan: "plan", role: "role", status: "status", action: "action", selectBox: "selectBox" })

    useEffect(() => {
        fetch('https://antiquity-server.vercel.app/getAllUser')
            .then(res => res.json())
            .then(data => {
                setAllUser(data)
            })
    }, [reload])


    const deleteHandle = (id) => {
        const confirm = window.confirm("Do you want to delete this user?")
        if (confirm) {
            fetch(`https://antiquity-server.vercel.app/deleteUser/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('User delete Successful')
                        setReload(!reload)
                    }
                })
        }
    }

    const columnHandle = (e) => {
        setcolumnShow({ ...columnShow, [e.target.name]: e.target.value })
    }

    if (allUser.length === 0) {
        return <h3>Loading...</h3>
    }

    return (
        <div className='full-user-table'>

            <div className='data-user-table'>
                <div className='action-btn no-print '>
                    <Pdf targetRef={ref} options={options} x={.5} y={.5} scale={1} filename="dataTable.pdf">
                        {({ toPdf }) => <button className="admin-btn no-print" onClick={toPdf}><FaCloudDownloadAlt className='icon' /> PDF</button>}
                    </Pdf>

                    {/* <DownloadTableExcel
                        filename="users table"
                        sheet="users"
                        currentTableRef={ref.current}
                    >
                        <button className="admin-btn no-print">Download Excel</button>
                    </DownloadTableExcel> */}

                    <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="admin-btn no-print"
                        table="target"
                        filename="usertable"
                        sheet="tablexls"
                        buttonText="Excel" />

                    <button className="admin-btn no-print" onClick={() => window.print()}><FaPrint className='icon' /> Print</button>
                    <button className="admin-btn no-print" onClick={() => setShowHide(!showHide)}> Show/Hide Column <FaAngleDown /></button>
                    {
                        showHide && <div className='full-showHide no-print'>
                            <label className='no-print border' htmlFor="selectBox"><input onClick={columnHandle} type="checkbox" name="selectBox" id="selectBox" value={columnShow.selectBox === "selectBox" ? "" : "selectBox"} defaultChecked={columnShow.user === "user" ? true : false} />SelectBox</label>
                            <label className='no-print border' htmlFor="user"><input onClick={columnHandle} type="checkbox" name="user" id="user" value={columnShow.user === "user" ? "" : "user"} defaultChecked={columnShow.user === "user" ? true : false} />User</label>
                            <label className='no-print border' htmlFor="email"><input onClick={columnHandle} type="checkbox" name="email" id="email" value={columnShow.email === "email" ? "" : "email"} defaultChecked={columnShow.email === "email" ? true : false} />Email</label>
                            <label className='no-print border' htmlFor="plan"><input onChange={columnHandle} type="checkbox" name="plan" id="plan" value={columnShow.plan === "plan" ? "" : "plan"} defaultChecked={columnShow.plan === "plan" ? true : false} />Plan</label>
                            <label className='no-print border' htmlFor="role"><input onChange={columnHandle} type="checkbox" name="role" id="role" value={columnShow.role === "role" ? "" : "role"} defaultChecked={columnShow.role === "role" ? true : false} />Role</label>
                            <label className='no-print border' htmlFor="status"><input onChange={columnHandle} type="checkbox" name="status" id="status" value={columnShow.status === "status" ? "" : "status"} defaultChecked={columnShow.status === "status" ? true : false} />Status</label>
                            <label className='no-print border' htmlFor="action"><input onChange={columnHandle} type="checkbox" name="action" id="action" value={columnShow.action === "action" ? "" : "action"} defaultChecked={columnShow.action === "action" ? true : false} />Action</label>
                        </div>
                    }

                </div>

                <div ref={ref} className='print full-table'>
                    <h1 className='heading2 '>All Users</h1>
                    <table className="table-customized " id='target'  >
                        <thead>
                            <tr className=''>

                                {columnShow.selectBox === "selectBox" ? <th className='check-th no-print' title='select all users'><input onClick={() => setAllCheck(!allcheck)} type="checkbox" name="" id="" /></th> : undefined}
                                {columnShow.user === "user" ? <th> User</th> : undefined}
                                {columnShow.email === "email" ? <th>Email</th> : undefined}
                                {columnShow.role === "role" ? <th> Role</th> : undefined}
                                {columnShow.plan === "plan" ? <th> Plan</th> : undefined}
                                {columnShow.status === "status" ? <th> Status</th> : undefined}
                                {columnShow.action === "action" ? <th id='action-row' className='no-print'>action</th> : undefined}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUser?.map(row => <UserTableRow row={row} key={row._id} deleteHandle={deleteHandle} allcheck={allcheck} columnShow={columnShow} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
            </div>
        </div >
    );
};

export default DataTable;