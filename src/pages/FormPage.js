import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function FormPage() {
    const navigate = useNavigate();

    //Initial State Form
    const [name, setName] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [address, setAddress] = useState("");
    const [job, setJob] = useState("");
    const [dob, setDob] = useState("");
    const [phoneNumbers, setPhoneNumbers] = useState([{ number: "" }]);
    const [familyMembers, setFamilyMembers] = useState([
        { name: "", dob: "", relationship: "" },
    ]);
    const [errors, setErrors] = useState({});

    //Error Handling
    const validateForm = () => {
        const errors = {};
    
        if (!name.trim()) {
          errors.name = 'Name is required';
        }
    
        if (!idNumber.trim()) {
          errors.idNumber = 'eKTP Number is required';
        } else if (!/^\d+$/.test(idNumber)) {
          errors.idNumber = 'eKTP Number must only contain numbers';
        } else if (idNumber.length !== 16) {
          errors.idNumber = 'eKTP Number must be 16 digits';
        }
    
        if (!address.trim()) {
          errors.address = 'Address is required';
        }
    
        if (!job.trim()) {
          errors.job = 'Job is required';
        }
    
        if (!dob) {
          errors.dob = 'Date of Birth is required';
        }
    
        const phoneErrors = phoneNumbers.map((phoneNumber, index) => {
          if (!phoneNumber.number.trim()) {
            return `Phone Number ${index + 1} is required`;
          } else if (!/^\d+$/.test(phoneNumber.number)) {
            return `Phone Number ${index + 1} must only contain numbers`;
          } else if (phoneNumber.number.length !== 10) {
            return `Phone Number ${index + 1} must be 10 digits`;
          }
          return null;
        }).filter(error => error !== null);
    
        if (phoneErrors.length > 0) {
          errors.phoneNumbers = phoneErrors;
        }
    
        const familyErrors = familyMembers.map((member, index) => {
          const memberErrors = {};
    
          if (!member.name.trim()) {
            memberErrors.name = 'Name is required';
          }
    
          if (!member.dob) {
            memberErrors.dob = 'Date of Birth is required';
          }
    
          if (!member.relationship.trim()) {
            memberErrors.relationship = 'Relationship is required';
          }
    
          return Object.keys(memberErrors).length > 0 ? { index, errors: memberErrors } : null;
        }).filter(error => error !== null);
    
        if (familyErrors.length > 0) {
          errors.familyMembers = familyErrors;
        }
    
        return Object.keys(errors).length > 0 ? errors : null;
      };
    //Handle Input Change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
     switch (name) {
       case "name":
         setName(value);
         break;
       case "idNumber":
         setIdNumber(value);
         break;
       case "address":
         setAddress(value);
         break;
       case "job":
         setJob(value);
         break;
       case "dob":
         setDob(value);
         break;
       default:
         break;
     }
      };
      const handlePhoneChange = (index, e) => {
        const { value } = e.target;
        const list = [...phoneNumbers];
        list[index].number = value;
        setPhoneNumbers(list);
      };
    
      const handleFamilyChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...familyMembers];
        list[index][name] = value;
        setFamilyMembers(list);
      };

      //Handle Submit
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
          setErrors(errors);
          return;
        }
    
        const contact = {
          name,
          idNumber,
          address,
          job,
          dob,
          phoneNumbers: phoneNumbers.map((phoneNumber) => phoneNumber.number),
          familyMembers,
        };
        console.log(contact)
        navigate('/');
      };
      const handleAddPhoneNumber = () => {
        setPhoneNumbers([...phoneNumbers, { number: '' }]);
      };
      const handleAddFamilyMember = () => {
        setFamilyMembers([...familyMembers, { name: "", dob: "", relationship: "" }]);
      };
    return(
        <>
            <div className='top'>
                Form Page
            </div>
            <Link to={'/'}>Back to Home</Link>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} name="name" onChange={(e) => handleInputChange(e)} />
                    {errors.name && <div className="error">{errors.name}</div>}
                </label>
                <label>
                    eKTP Number:
                    <input type="text" value={idNumber} name="idNumber" onChange={(e) => handleInputChange(e)} />
                    {errors.idNumber && <div className="error">{errors.idNumber}</div>}
                </label>
                <label>
                    Address:
                    <textarea value={address} name="address" onChange={(e) => handleInputChange(e)} />
                    {errors.address && <div className="error">{errors.address}</div>}
                </label>
                <label>
                    Job:
                    <input type="text" value={job} name="job" onChange={(e) => handleInputChange(e)} />
                    {errors.job && <div className="error">{errors.job}</div>}
                </label>
                <label>
                    Date of Birth:
                    <input type="date" value={dob} name="dob" onChange={(e) => handleInputChange(e)} />
                    {errors.dob && <div className="error">{errors.dob}</div>}
                </label>
                <label>
                    Phone Numbers:
                    {phoneNumbers.map((phoneNumber, index) => (
                        <div key={index}>
                        <input
                            type="text"
                            value={phoneNumber.number}
                            name={`phoneNumber${index}`}
                            onChange={(event) => handlePhoneChange(index, event)}
                        />
                        {errors.phoneNumbers &&
                            errors.phoneNumbers[index] && (
                                <div className="error">{errors.phoneNumbers[index]}</div>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={handleAddPhoneNumber}>
                        Add Phone Number
                    </button>
                </label>
                <label>
                    Family Members:
                    {familyMembers.map((member, index) => (
                    <div key={index}>
                        <label>Name:
                        <input
                        type="text"
                        value={member.name}
                        name={`familyMember${index}Name`}
                        onChange={(event) => handleFamilyChange(index, event)}
                        />
                        {/* {errors.familyMembers &&
                        errors.familyMembers
                        .filter((error) => error.index === index)
                        .map((error) => (
                            <div key={error.index} className="error">
                            {error.errors.name}
                            </div>
                        ))} */}
                        </label>
                        <label>Date of Birth:
                        <input
                        type="date"
                        value={member.dob}
                        name={`familyMember${index}Dob`}
                        onChange={(event) => handleFamilyChange(index, event)}
                        />
                        {/* {errors.familyMembers &&
                        errors.familyMembers
                        .filter((error) => error.index === index)
                        .map((error) => (
                            <div key={error.index} className="error">
                            {error.errors.dob}
                            </div>
                        ))} */}
                        </label>
                        <label>Relationship:
                        <input
                        type="text"
                        value={member.relationship}
                        onChange={(event) => handleFamilyChange(index, event)}
                        name="relationship"
                        />
                        {/* {errors.familyMembers &&
                        errors.familyMembers
                        .filter((error) => error.index === index)
                        .map((error) => (
                            <div key={error.index} className="error">
                            {error.errors.dob}
                            </div>
                        ))} */}
                        </label>
                    </div>
                    ))}
                    <button type="button" onClick={handleAddFamilyMember}>
                        Add Family Member
                    </button>
                    {errors.familyMembers && errors.familyMembers.length > 0 && (
                        <ul className="errorList">
                            {errors.familyMembers.map((error) => (
                                <li key={error.index}>
                                    {Object.values(error.errors).map((message) => (
                                        <div key={message}>{message}</div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    )}
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
        )
}