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
      const handleSubmit = (e) => {
        e.preventDefault();
    
        /* const errors = validateForm();
        if (Object.keys(errors).length > 0) {
          setErrors(errors);
          return;
        } */
    
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
                </label>
                <label>
                    eKTP Number:
                    <input type="text" value={idNumber} name="idNumber" onChange={(e) => handleInputChange(e)} />
                </label>
                <label>
                    Address:
                    <textarea value={address} name="address" onChange={(e) => handleInputChange(e)} />
                </label>
                <label>
                    Job:
                    <input type="text" value={job} name="job" onChange={(e) => handleInputChange(e)} />
                </label>
                <label>
                    Date of Birth:
                    <input type="date" value={dob} name="dob" onChange={(e) => handleInputChange(e)} />
                </label>
                <label>
                    Phone Numbers:
                    {phoneNumbers.map((phoneNumber, index) => (
                        <div key={index}>
                        <input
                            type="text"
                            value={phoneNumber.number}
                            onChange={(event) => handlePhoneChange(index, event)}
                        />
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
                        <label>Name:</label>
                        <input
                        type="text"
                        value={member.name}
                        onChange={(event) => handleFamilyChange(index, event)}
                        name="name"
                        />
                        <label>Date of Birth:</label>
                        <input
                        type="date"
                        value={member.dob}
                        onChange={(event) => handleFamilyChange(index, event)}
                        name="dob"
                        />
                        <label>Relationship:</label>
                        <input
                        type="text"
                        value={member.relationship}
                        onChange={(event) => handleFamilyChange(index, event)}
                        name="relationship"
                        />
                    </div>
                    ))}
                    <button type="button" onClick={handleAddFamilyMember}>
                        Add Family Member
                    </button>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
        )
}