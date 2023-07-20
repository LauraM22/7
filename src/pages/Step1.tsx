import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Step2 } from './Step2';
import { first } from 'lodash';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f5f5f5',
    },
    button: {
        backgroundColor: 'blue',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        marginTop: '1rem',
    }, 
    containerForm: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    label : {
        display: 'block',
        marginBottom: '0.5rem',
    },
}

const Step1: React.FC = () => {

    const [step, setStep] = React.useState(1);
    const [data, setData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
    });

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const handleSubmit = (values: typeof data) => {
    // Aquí puedes manejar el envío de los datos del formulario
    console.log(values);
    setData(
    {...data,
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,}
        );
    setStep(2);
  };

  const back = () => {
    setStep(1);
    };
  return (
    <div style={styles.container} className="card">
      <h2 style={{marginBottom: "2rem"}}>Personal Information</h2>
      {
        step === 1  ?
        (<Formik initialValues={data} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form style={styles.containerForm}>
            <div>
                <label style={styles.label} htmlFor="firstName">First Name:</label>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage name="firstName" component="div" />
            </div>
            <div>
                <label style={styles.label} htmlFor="lastName">Last Name:</label>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage name="lastName" component="div" />
            </div>
            <div>
                <label style={styles.label} htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" />
            </div>
            
            <button type="submit" style={styles.button}>Next</button>
            </Form>
        </Formik>) :
      (<Step2 back={back} data={data}/>)
    }
    </div>
  );
};

export default Step1;
