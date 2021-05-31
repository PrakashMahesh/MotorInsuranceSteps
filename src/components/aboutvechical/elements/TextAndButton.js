import React, { useContext, useEffect, Fragment} from 'react';
import { Form, Button } from 'react-bootstrap';
import { FormHandleChangeContext, FormVehicleDetailsContext } from '../FormContext';
import '../App.css';

function TextAndButton({field_id, field_label, button_id, button_label, field_placeholder, field_value, field_mandatory, errors}){

    const { handleChange } = useContext(FormHandleChangeContext);
    const { loadVehicleDetails } = useContext(FormVehicleDetailsContext);

    useEffect(() => {
        console.log(document.getElementById("car_registration_no").value);
        document.getElementById("find_vehicle_details").onclick = function () {
            if(document.getElementById("car_registration_no").value){
            loadVehicleDetails();
            }
        }
      }, []);

    
    return (
        <Form.Group>
            <Form.Label>{field_label}</Form.Label>{field_mandatory === "yes" ? <span className="mandatory"><b> * </b></span> : " "}
            <Form.Group style={{display: "inline-flex"}} >
                <Form.Control id={field_id} className="form-field bold" placeholder={field_placeholder? field_placeholder : " "} value={field_value} onChange={event => handleChange(field_id, event)}/>
                <Button style={{marginLeft: "20px"}} className="button-rounded" id={button_id}>{button_label}</Button>
            </Form.Group><br/>
            <span style={{color: "red"}}>{errors ? errors : ""}</span>
        </Form.Group>
      );
}

export default TextAndButton;