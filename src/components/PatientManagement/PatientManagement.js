import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../../Reducer/PatientReducer';
import './PatientManagement.css';

const PatientManagement = () => {
    const nameRef=useRef();
    const [state,dispatch]=useReducer(patientReducer,patientState);
    const handleNameSubmit=e=>{
        e.preventDefault();
        const patientLen=state.patients.length;
        dispatch({type:'ADD_PATIENT',
        patientInfo:{
            id: state.patients.length===0 ? patientLen+1 : state.patients[patientLen-1].id+1,
            name:nameRef.current.value}});
        nameRef.current.value='';
    }
    return (
        <div>
            <h2>Patient management using useReducer</h2>
            <form onSubmit={handleNameSubmit}>
                <input type="text" ref={nameRef} />
            </form>
            {state.patients.map(patient=>
                <div className='patient' key={patient.id}>
                    <h5>Patient Id: {patient.id}</h5>
                    <h2>Patient Name: {patient.name}</h2>
                    <button onClick={()=>dispatch({type:'REMOVE_PATIENT',id:patient.id})}>Remove Patient</button>
                </div>
            )}
        </div>
    );
};

export default PatientManagement;