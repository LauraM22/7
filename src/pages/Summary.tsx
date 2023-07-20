import React from 'react'
interface Props {
    back?: () => void;
    dataFull?: any;
}
export const Summary: React.FC<Props> = ({dataFull}) => {
  return (
    <div style={sytles.container}>
        <h2>Personal Information</h2>
        <p>First Name: {dataFull.firstName}</p>
        <p>Last Name: {dataFull.lastName}</p>
        <p>Email: {dataFull.email}</p>
        <h2>Company Information</h2>
        <p>Company Name: {dataFull.companyName}</p>
        <p>Contact Number: {dataFull.contactNumber}</p>
        <h2>Contact Information</h2>
        <p>Contact Name: {dataFull.contactName}</p>
        <p>Contact Number: {dataFull.contact_Number}</p>
        <h2>Address Information</h2>
        <p>Place of Residence: {dataFull.placeOfResidence}</p>
        <p>Address: {dataFull.address}</p>
        <h2>Observations</h2>
        <p>Observations: {dataFull.observations}</p>
    </div>
  )
}

const sytles = {
    container: {
        backgroundColor: '#f5f5f5',
        padding: '2rem',
        borderRadius: '5px',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
}