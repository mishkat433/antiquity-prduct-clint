import React from 'react';
import { FaEllipsisV, FaPencilAlt, FaPenNib, FaTrash } from 'react-icons/fa';
import { FcBusinessman, FcServices, FcSynchronize } from "react-icons/fc";
import { BsLaptop } from "react-icons/bs";
import { Link } from 'react-router-dom';

const UserTableRow = ({ row, deleteHandle, allcheck, columnShow, }) => {
    const { staus, name, email, role, plan } = row.data

    return (
        <tr>
            {columnShow.selectBox === "selectBox" ? <td className='no-print'>{allcheck ? <input checked={allcheck ? true : false} type="checkbox" name="" id="" /> : <input type="checkbox" name="" id="" />}</td> : undefined}
            {columnShow.user === "user" ? <td className='user-row'> <img className='image-row' src={row.image} alt="" /> <p>{name}</p> </td> : undefined}
            {columnShow.email === "email" ? <td>{email}</td> : undefined}
            {columnShow.role === "role" ? <td className='role-row'>{role === 'Admin' && <BsLaptop className='laptop' />} {role === 'Subscriber' && <FcBusinessman />} {role === 'Editor' && <FaPencilAlt />} {role === "Maintainer" && <FcSynchronize />} {role === 'Author' && <FcServices />} {role}</td> : undefined}
            {columnShow.plan === "plan" ? <td className='role-row'>{plan}</td> : undefined}
            {columnShow.status === "status" ? <td className=""><button className={(staus === "Pending" && "pending") || (staus === "In Active" && "inActive") || (staus === "Active" && "active")}>{staus}</button> </td> : undefined}
            {columnShow.action === "action" ? <td id='action-row' className='dropdown no-print'><button className='action-dot'><FaEllipsisV /></button>
                <div className='action-item'>
                    <Link to={`/dashboard/allUsers/${row?._id}`} className='edit' title='edit'><FaPenNib /></Link>
                    <button onClick={() => deleteHandle(row?._id)} className='delete' title='delete'><FaTrash /></button>
                </div>
            </td> : undefined}
        </tr>
    );
};
export default UserTableRow;