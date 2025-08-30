import React, {useState} from 'react'
import LoginIcon from '@mui/icons-material/Login';

function Login() {

    const [formData, setFormData] = useState({
        email_address: '',
        password: ''
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: false
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            // Case when the filed is empty
            if (!formData[key]) {
                newErrors[key] = 'This field is required';
            }
        });
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Submit form
        }
    }

    return (
        <>
            <h2 className='heading'>
                <LoginIcon fontSize='large'/>
                Login
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-8">
                        <div className="form-group">
                            <label htmlFor="emailAddress">Email Address *</label>
                            <input type="email" value={formData.email_address} onChange={handleChange} className={`form-control ${errors.email_address ? 'border-danger' : ''}`} name="email_address" id="emailAddress" autoComplete="username" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="form-group">
                            <label htmlFor="password">Password *</label>
                            <input type="password" value={formData.password} onChange={handleChange} className={`form-control ${errors.password ? 'border-danger' : ''}`} name="password" id="password" autoComplete="current-password" />
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-3">
                        <div className="form-group">
                            <button type="submit" className="btn btn-warning">Log In</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login