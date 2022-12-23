import React from 'react';
import { FaEllipsisV, FaMarker } from 'react-icons/fa';
import { FcSelfServiceKiosk, FcServices, FcSynchronize } from "react-icons/fc";
import { Link } from 'react-router-dom';

const UserTableRow = ({ row, deleteHandle, allcheck, columnShow, }) => {
    const { staus, name, email, role, plan } = row.data

    return (
        <tr>
            <td className='no-print'>{allcheck ? <input checked={allcheck ? true : false} type="checkbox" name="" id="" /> : <input type="checkbox" name="" id="" />}</td>
            {columnShow.user === "user" ? <td className='user-row'> <img className='image-row' src={row.image} alt="" /> <h4>{name}</h4> </td> : undefined}
            {columnShow.email === "email" ? <td>{email}</td> : undefined}
            {columnShow.role === "role" ? <td className='role-row'>{role === 'Admin' && <FcSelfServiceKiosk />} {role === 'Editor' && <FaMarker />} {role === "Maintainer" && <FcSynchronize />} {role === 'Author' && <FcServices />} {role}</td> : undefined}
            {columnShow.plan === "plan" ? <td className='role-row'>{plan}</td> : undefined}
            {columnShow.status === "status" ? <td className=""><button className={(staus === "Pending" && "pending") || (staus === "In Active" && "inActive") || (staus === "Active" && "active")}>{staus}</button> </td> : undefined}
            {columnShow.action === "action" ? <td id='action-row' className='dropdown no-print'><button className='action-dot'><FaEllipsisV /></button>
                <div className='action-item'>
                    <Link to={`/dashboard/allUsers/${row?._id}`} className='edit'>Edit</Link>
                    <button onClick={() => deleteHandle(row?._id)} className='delete'>Delete</button>
                </div>
            </td> : undefined}
        </tr>
    );
};
export default UserTableRow;