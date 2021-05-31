import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import '../App.css';
import { FormHandleChangeContext } from '../FormContext';

const MultipleSelect = ({ field_id, field_label, field_placeholder, field_value, field_options, field_mandatory, errors}) => {

    const { handleChange } = useContext(FormHandleChangeContext)

    return (
        <Form.Group>
            <Form.Label>{field_label}</Form.Label>{field_mandatory === "yes" ? <span className="mandatory"><b> * </b></span> : " "}
            <Form.Control className="form-field bold" as="select" multiple={true} value={field_value || []} onChange={event => handleChange(field_id, event)}>
                {field_options.length > 0 && field_options.map((option, i) =>
                    <option value={option.option_label} key={i}>{option.option_label}</option>

                )}
                </Form.Control>
            <span style={{color: "red"}}>{errors ? errors : ""}</span>
        </Form.Group>
    )
}

export default MultipleSelect;