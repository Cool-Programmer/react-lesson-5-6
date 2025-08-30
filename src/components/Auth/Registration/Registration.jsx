import AppRegistration from '@mui/icons-material/AppRegistration'
import '../Auth.css';
import { useState } from 'react';

function Registration({handleAddUser}) {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email_address_reg: '',
        password_reg: '',
        confirm_password_reg: ''
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

            // Case when password field value and confirm password field value do not match
            if(formData['password_reg'] != formData['confirm_password_reg']){
                newErrors['password_reg'] = 'Passwords do not match';
                newErrors['confirm_password_reg'] = 'Passwords do not match';
            }
        });
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            handleAddUser(formData);
            setFormData({
                first_name: '',
                last_name: '',
                email_address_reg: '',
                password_reg: '',
                confirm_password_reg: ''
            });
        }
    }

  return (
    <>
        <h2 className='heading'>
            <AppRegistration fontSize='large'/>
            Registration
        </h2>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name *</label>
                        <input type="text" value={formData.first_name} onChange={handleChange} className={`form-control ${errors.first_name ? 'border-danger' : ''}`} name="first_name" id="firstName" />
                        {errors.first_name && (
                            <small className="text-danger">{errors.first_name}</small>
                        )}
                    </div>
                </div>
            
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="last_name">Last Name *</label>
                        <input type="text" value={formData.last_name} onChange={handleChange} className={`form-control ${errors.last_name ? 'border-danger' : ''}`} name="last_name" id="lastName" />
                        {errors.last_name && (
                            <small className="text-danger">{errors.last_name}</small>
                        )}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="form-group">
                        <label htmlFor="emailAddressReg">Email Address *</label>
                        <input type="email" value={formData.email_address_reg} onChange={handleChange} className={`form-control ${errors.email_address_reg ? 'border-danger' : ''}`} name="email_address_reg" id="emailAddressReg" autoComplete="username" />
                        {errors.email_address_reg && (
                            <small className="text-danger">{errors.email_address_reg}</small>
                        )}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="passwordReg">Password *</label>
                        <input type="password" value={formData.password_reg} onChange={handleChange} className={`form-control ${errors.password_reg ? 'border-danger' : ''}`} name="password_reg" id="passwordReg" autoComplete="new-password" />
                        {errors.password_reg && (
                            <small className="text-danger">{errors.password_reg}</small>
                        )}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="confirmPasswordReg">Confirm Password *</label>
                        <input type="password" value={formData.confirm_password_reg} onChange={handleChange} className={`form-control ${errors.confirm_password_reg ? 'border-danger' : ''}`} name="confirm_password_reg" id="confirmPasswordReg" autoComplete="new-password" />
                        {errors.confirm_password_reg && (
                            <small className="text-danger">{errors.confirm_password_reg}</small>
                        )}
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-3">
                    <div className="form-group">
                        <button type="submit" className="btn btn-warning">Sign Up</button>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}

export default Registration