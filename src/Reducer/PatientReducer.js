export const patientState={patients:[]};
export const patientReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_PATIENT':
            return {patients:[...state.patients,action.patientInfo]};
        case 'REMOVE_PATIENT':
            const remainingPatients=state.patients.filter(patient=>patient.id!==action.id);
            return {patients:remainingPatients};
        default:
            return state;
    }
};