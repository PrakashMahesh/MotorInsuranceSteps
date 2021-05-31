import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { FormHandleChangeContext } from '../FormContext';
import '../App.css';

function TextInput({field_id, field_label, field_placeholder, field_value, field_mandatory, errors}){

    const { handleChange } = useContext(FormHandleChangeContext)
    
    return (
        <Form.Group>
            <Form.Label>{field_label}</Form.Label>{field_mandatory === "yes" ? <span className="mandatory"><b> * </b></span> : " "}
            <Form.Control className="form-field bold" placeholder={field_placeholder? field_placeholder : " "} value={field_value} onChange={event => handleChange(field_id, event)}/>
            <span style={{color: "red"}}>{errors ? errors : ""}</span>
        </Form.Group>
      );
}

export default TextInput;