import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import "./EditUser.css"

const EditUser = () => {
    const [selectEditData, setSelectEditData] = useState([])
    const [formData, setFormData] = useState({
        staus: '',
        plan: '',
        role: '',
        email: '',
        name: ''
    })
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState({ image: selectEditData?.image })
    const [error, setError] = useState('')

    const id = useParams().id
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://antiquity-server.vercel.app/singleUser/${id}`)
            .then(res => res.json())
            .then(data => setSelectEditData(data))
    }, [id])

    const addUserHandle = (e) => {
        // setLoading(true)
        const form = new FormData();
        form.append('image', image.photo)

        if (image) {
            // setLoading(true)
            fetch(`https://api.imgbb.com/1/upload?key=8c9606c529fcf035df626c98a2bd8605`, {
                method: "POST",
                body: form,
            })
                .then(res => res.json())
                .then(photo => {
                    const image = photo?.data?.display_url
                    saveUser(formData, image)
                    e.target.reset();
                })
        }
        else {
            saveUser(formData, image)
        }
        e.preventDefault()
    }

    const saveUser = (data, image) => {
        let readyData = { data, image }
        if (image === undefined) {
            readyData.image = selectEditData?.image
        }
        else {
            readyData = { data, image }
        }

        if (readyData.data.email === "") {
            readyData.data.email = selectEditData?.data?.email;
        }
        if (readyData.data.name === "") {
            readyData.data.name = selectEditData?.data?.name;
        }
        if (readyData.data.staus === "") {
            readyData.data.staus = selectEditData?.data?.staus;
        }
        if (readyData.data.role === '') {
            readyData.data.role = selectEditData?.data?.role;
        }
        if (readyData.data.plan === "") {
            readyData.data.plan = selectEditData?.data?.plan;
        }
        console.log(readyData);

        fetch(`https://antiquity-server.vercel.app/updateUser/${selectEditData?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(readyData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("User added success")
                    setLoading(false)
                    navigate("/dashboard/allUsers")
                }
            })
    }

    const formHandle = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const fileHandle = (e) => {
        setImage({ ...image, [e.target.name]: e.target.files[0] });
    }
    return (
        <section className="full-addUser">
            <form onSubmit={addUserHandle} className="adduser-form">
                <h1 className='heading'>Edit User</h1>
                <p className='error-text'>{error}</p>
                <div className='form-group'>
                    <div className="form-control mb fw">
                        <input onBlur={formHandle} type="text" name="name" placeholder="Name" className="input input-bordered" defaultValue={selectEditData?.data?.name} required />
                    </div>
                    <div className="form-control mb fw">
                        <input onBlur={formHandle} type="email" name="email" placeholder="email" className="input input-bordered" defaultValue={selectEditData?.data?.email} required />
                    </div>
                </div>
                <div className="form-control mb  selector">
                    <select onBlur={formHandle} name="role" id=""  >
                        <option defaultValue={selectEditData?.data?.role} className="selector">Select Role</option>
                        <option defaultValue="Admin" className="selector">Admin</option>
                        <option defaultValue="Editor" className="selector">Editor</option>
                        <option defaultValue="Author" className="selector">Author</option>
                        <option defaultValue="Maintainer" className="selector">Maintainer</option>
                    </select>
                    <p className='default'>Current Role : {selectEditData?.data?.role}</p>
                </div>
                <div className="form-control mb  selector">
                    <select onBlur={formHandle} name="plan" id="" >
                        <option defaultValue={selectEditData?.data?.plan} className="selector">Select Plan</option>
                        <option defaultValue="Enterprise" className="selector">Enterprise</option>
                        <option defaultValue="Team" className="selector">Team</option>
                        <option defaultValue="Company" className="selector">Company</option>
                        <option defaultValue="Basic" className="selector">Basic</option>
                    </select>
                    <p className='default'>Current Plan : {selectEditData?.data?.plan}</p>
                </div>
                <div className="form-control mb  selector">
                    <select onBlur={formHandle} name="staus" id="" >
                        <option defaultValue={selectEditData?.data?.staus} className="selector">Select Status</option>
                        <option defaultValue="Pending" className="selector">Pending</option>
                        <option defaultValue="Active" className="selector">Active</option>
                        <option defaultValue="In active" className="selector">In Active</option>
                    </select>
                    <p className='default'>Current Status : {selectEditData?.data?.staus}</p>
                </div>
                <div className="form-control mb ">
                    <input onChange={fileHandle} type="file" name="photo" placeholder="Photo" className="input file input-bordered" />
                </div>
                <div className="form-control mb">
                    {!loading ? <button className="button login-btn">Update User</button> : <button disabled className="button login-btn">loading...</button>}
                </div>
            </form>
        </section >
    );
};

export default EditUser;