import React, { useState } from "react";
import { HeadingThree } from "../headingThree/headingThree";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumb";

export const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        religion: "",
        email: "",
        studentClass: "",
        phone: "",
        photo: null,
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "photo") {
            setFormData({ ...formData, photo: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.photo) {
            setError("Please upload photo");
            setSuccess("");
            return;
        }

        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        try {
            const res = await fetch("http://localhost:5000/api/admission", {
                method: "POST",
                body: data,
            });

            const result = await res.json();
            if (res.ok) {
                setSuccess("Form submitted successfully!");
                setError("");
                setFormData({
                    firstName: "",
                    lastName: "",
                    dob: "",
                    religion: "",
                    email: "",
                    studentClass: "",
                    phone: "",
                    photo: null,
                });
            } else {
                setError(result.error || "Something went wrong");
                setSuccess("");
            }
        } catch (err) {
            setError("Could not connect to server");
            setSuccess("");
        }
    };

    return (
        <>
            <Breadcrumbs headingthree='Students' breadcrumbOne='Home' breadcrumbSecond='All Studnets' />
            <div className="container card p-3 mt-4">
                <HeadingThree title='Add New Students' />
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            className="form-control"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Religion</label>
                        <input
                            type="text"
                            name="religion"
                            className="form-control"
                            value={formData.religion}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Class</label>
                        <input
                            type="text"
                            name="studentClass"
                            className="form-control"
                            value={formData.studentClass}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            pattern="[0-9]{10}"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Upload Photo</label>
                        <input
                            type="file"
                            name="photo"
                            className="form-control"
                            onChange={handleChange}
                            accept="image/*"
                            required
                        />
                    </div>

                    {formData.photo && (
                        <div className="col-md-6 mt-2">
                            <p>Preview:</p>
                            <img
                                src={URL.createObjectURL(formData.photo)}
                                alt="Preview"
                                className="img-thumbnail"
                                style={{ height: "150px", width: "150px", objectFit: "cover" }}
                            />
                        </div>
                    )}

                    <div className="col-12 text-center mt-3">
                        <button type="submit" className="btn btn-primary px-5">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>

    );
};
