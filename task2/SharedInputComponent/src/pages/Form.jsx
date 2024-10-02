// Form.jsx
import React, { useState } from 'react';
import Input from '../components/Input';
import "/public/css/Form.css";

const Form = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');

    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const [isagreementAccpeted, setIsAgreementAccpeted] = useState('');
    const [isAgreementError, setIsAgreementError] = useState('');

    const [gender, setGender] = useState('');
    const [genderError, setGenderError] = useState('');

    const handleChange = (type, value) => {
        switch (type) {
            case 'name':
                setName(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'isChecked':
                setIsAgreementAccpeted(value);
                break;
            case "gender":
                setGender(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (["",null,undefined," "].includes(name)) {
            setNameError('Name is required');
        }else{
            setNameError('');
        }
        
        if (["",null,undefined," "].includes(description)) {
            setDescriptionError('Description is required');
        } else{
            setDescriptionError('');
        }

        if (["",null,undefined," "].includes(isagreementAccpeted)) {
            setIsAgreementError('Please accept the terms');
        } else{
            setIsAgreementError('');
        }
        
        if (["",null,undefined," "].includes(gender)) {
            setGenderError('Please select the gender');
        }else{
            setGenderError('');
        }
        
        
        if(nameError != null || descriptionError != null || isAgreementError != null || genderError != null){
            return;
        }else{
            alert("Form submitted successfully");
        }
        

    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                id="name"
                label="Name"
                error={nameError}
                value={name}
                placeholder="Enter name"
                onChange={(value) => handleChange('name', value)}
                required={true}
            />
            <Input
                type="textarea"
                id="description"
                error={descriptionError}
                label="Description"
                value={description}
                placeholder="Enter description"
                onChange={(value) => handleChange('description', value)}
                required={true}
            />
            <Input
                type="checkbox"
                id="isChecked"
                error={isAgreementError}
                label="Accept Terms"
                options={[{ value: 'accept', label: 'I accept the terms' }]}
                checked={isagreementAccpeted}
                onChange={(value) => handleChange('isChecked', value)}
            />
            <Input
                type="radio"
                id="gender"
                name="gender"
                error={genderError}
                label="Gender"
                options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                ]}
                checked={gender}
                onChange={(value) => handleChange('gender', value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
