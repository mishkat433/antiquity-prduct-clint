import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import "./AddUser.css"

const AddUser = () => {
    const [formData, setFormData] = useState({
        staus: "Pending",
    })
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState([])

    const addUserHandle = (e) => {
        setLoading(true)
        const form = new FormData();
        form.append('image', image.photo)

        fetch(`https://api.imgbb.com/1/upload?key=8c9606c529fcf035df626c98a2bd8605`, {
            method: "POST",
            body: form,
        })
            .then(res => res.json())
            .then(photo => {
                const image = photo?.data?.display_url
                saveUser(image, formData)
                e.target.reset();
            })
        e.preventDefault()
    }

    const saveUser = (image, data) => {
        const readyData = { image, data }

        fetch('https://antiquity-server.vercel.app/addUser', {
            method: "POST",
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
                <h1 className='heading'>Add User</h1>
                <div className='form-group'>
                    <div className="form-control mb fw">
                        <input onChange={formHandle} type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb fw">
                        <input onChange={formHandle} type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mb  selector">
                    <select onChange={formHandle} name="role" id="" required>
                        <option value="" className="selector">Select Role</option>
                        <option value="Admin" className="selector">Admin</option>
                        <option value="Editor" className="selector">Editor</option>
                        <option value="Author" className="selector">Author</option>
                        <option value="Maintainer" className="selector">Maintainer</option>
                    </select>
                </div>
                <div className="form-control mb  selector">
                    <select onChange={formHandle} name="plan" id="" required>
                        <option value="" className="selector">Select Plan</option>
                        <option value="Enterprise" className="selector">Enterprise</option>
                        <option value="Team" className="selector">Team</option>
                        <option value="Company" className="selector">Company</option>
                        <option value="Basic" className="selector">Basic</option>
                    </select>
                </div>
                <div className="form-control mb ">
                    <input onChange={fileHandle} type="file" name="photo" placeholder="Photo" className="input file input-bordered" required />
                </div>
                <div className="form-control mb">
                    {!loading ? <button className="button login-btn">Add User</button> : <button disabled className="button login-btn">loading...</button>}
                </div>
            </form>
        </section >
    );
};

export default AddUser;