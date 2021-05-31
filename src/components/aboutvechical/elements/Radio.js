import React, { useContext, Fragment, useEffect, useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import '../App.css';
import { FormHandleChangeContext } from '../FormContext';
import Element from '../Element';
import { Button } from 'react-bootstrap';


function Radio({field_id, field_label, field_placeholder, field_value, field_options, field_mandatory, yes_options, registered_keeper_fields, legal_owner_fields, errors}){

    const { handleChange } = useContext(FormHandleChangeContext)

    const [yesChecked, setyesChecked] = useState(false)
    const [registeredKeeperChecked, setRegisteredKeeperChecked] = useState(false)
    const [legalOwnerChecked, setLegalOwnerChecked] = useState(false)
    const [carModification, setCarModification] = useState(false)

    useEffect(()=>{

        const accessories = document.getElementById("accessories");
        const accessories_btn = document.getElementById("#accessories");
        accessories_btn.onclick = function () {
            if (accessories_btn.innerHTML === "+") {
                accessories.style.display = "block";
                accessories_btn.innerHTML = "-";
            } else {
                accessories.style.display = "none";
                accessories_btn.innerHTML = "+";
            }
        };

        const body_modifications = document.getElementById("body_modifications");
        const body_modifications_btn = document.getElementById("#body_modifications");
        body_modifications_btn.onclick = function () {
            if (body_modifications_btn.innerHTML === "+") {
                body_modifications.style.display = "block";
                body_modifications_btn.innerHTML = "-";
            } else {
                body_modifications.style.display = "none";
                body_modifications_btn.innerHTML = "+";
            }
        };

        const brakes_suspension_steering = document.getElementById("brakes_suspension_steering");
        const brakes_suspension_steering_btn = document.getElementById("#brakes_suspension_steering");
        brakes_suspension_steering_btn.onclick = function () {
            if (brakes_suspension_steering_btn.innerHTML === "+") {
                brakes_suspension_steering.style.display = "block";
                brakes_suspension_steering_btn.innerHTML = "-";
            } else {
                brakes_suspension_steering.style.display = "none";
                brakes_suspension_steering_btn.innerHTML = "+";
            }
        };

        const engine_transmission = document.getElementById("engine_transmission");
        const engine_transmission_btn = document.getElementById("#engine_transmission");
        engine_transmission_btn.onclick = function () {
            if (engine_transmission_btn.innerHTML === "+") {
                engine_transmission.style.display = "block";
                engine_transmission_btn.innerHTML = "-";
            } else {
                engine_transmission.style.display = "none";
                engine_transmission_btn.innerHTML = "+";
            }
        };

        const paintwork_stickers = document.getElementById("paintwork_stickers");
        const paintwork_stickers_btn = document.getElementById("#paintwork_stickers");
        paintwork_stickers_btn.onclick = function () {
            if (paintwork_stickers_btn.innerHTML === "+") {
                paintwork_stickers.style.display = "block";
                paintwork_stickers_btn.innerHTML = "-";
            } else {
                paintwork_stickers.style.display = "none";
                paintwork_stickers_btn.innerHTML = "+";
            }
        };

        const spoilers_bodykits = document.getElementById("spoilers_bodykits");
        const spoilers_bodykits_btn = document.getElementById("#spoilers_bodykits");
        spoilers_bodykits_btn.onclick = function () {
            if (spoilers_bodykits_btn.innerHTML === "+") {
                spoilers_bodykits.style.display = "block";
                spoilers_bodykits_btn.innerHTML = "-";
            } else {
                spoilers_bodykits.style.display = "none";
                spoilers_bodykits_btn.innerHTML = "+";
            }
        };

        const wheels_tyres = document.getElementById("wheels_tyres");
        const wheels_tyres_btn = document.getElementById("#wheels_tyres");
        wheels_tyres_btn.onclick = function () {
            if (wheels_tyres_btn.innerHTML === "+") {
                wheels_tyres.style.display = "block";
                wheels_tyres_btn.innerHTML = "-";
            } else {
                wheels_tyres.style.display = "none";
                wheels_tyres_btn.innerHTML = "+";
            }
        };
        
    },[])

    

    const radioButtonCheck = (e) => {
        // const radio_button_field = document.getElementById('radio-button-field');
        // if(radio_button_field.checked){
        //     radio_button_field.checked = "false";
        // }
        // else radio_button_field.checked;
        
        [...document.getElementsByClassName("radio-button-input")].forEach(node => {
                node.checked === true
                  ? (node.parentElement.classList.add("radio-button-checked"))
                  : (node.parentElement.classList.remove("radio-button-checked"));
              });

        if(document.getElementById('car_modifications_yes').checked) {
            setyesChecked(true);
        }
        else setyesChecked(false);

        if(document.getElementById('policy_holder_registered_keeper').checked) {
            setRegisteredKeeperChecked(true);
        }
        else setRegisteredKeeperChecked(false);

        if(document.getElementById('policy_holder_legal_owner').checked) {
            setLegalOwnerChecked(true);
        }
        else setLegalOwnerChecked(false);

    }
    
    return (
        <Form.Group>
            <Form.Label id="radio-button-label">{field_label}</Form.Label>{field_mandatory === "yes" ? <span className="mandatory"><b> * </b></span> : " "}<br/>
            <Row>
                {field_options.length > 0 && field_options.map((option, i) =>
                <Fragment key={i} >
                    <Col lg={5}>
                    <Form.Group id="radio-button-field" className="radio-button" onChange={(e)=>radioButtonCheck(e)} >
                        <input id={option.option_id} name={field_id} className="radio-button-input" type="radio" value={option.option_value} checked={field_value === option.option_value} onChange={event => handleChange(field_id, event)} />
                        {' '}{' '}
                        <Form.Label>{option.option_label}</Form.Label>
                    </Form.Group>
                    </Col>

                </Fragment>
            )}
            </Row>
        <span style={{color: "red"}}>{errors ? errors : ""}</span>

        <div style={{display: (yesChecked ? 'block' : 'none')}}> 
                <Row>
                {yes_options.length > 0 && yes_options.map((yes_option, i) => { 
                    return (
                        <Col lg={5}>
                        <Form.Group key={i}>
                            <Button id={`#${yes_option.field_id}`} style={{border: "1.5px solid  #6F29B8", color: "#6F29B8"}} variant="light" size="sm">+</Button><span style={{paddingLeft: "15px", color: "#6F29B8"}}>{yes_option.field_label}</span>
                            <Form.Control className="yes-option-group" id={yes_option.field_id} style={{display: 'none'}} className="form-field" as="select" multiple={true} value={yes_option.field_value || []} onChange={event => handleChange(yes_option.field_id, event)}>
                                {yes_option.field_options.length > 0 && yes_option.field_options.map((option, i) =>
                                    <option id={option.option_label} value={option.option_label} key={i} >{option.option_label}</option>                
                                )}
                            </Form.Control>
                            <span style={{color: "red"}}>{yes_option.errors ? yes_option.errors : ""}</span>
                        </Form.Group>
                        </Col>
                    );
                })}
                </Row>
        </div>


        <div style={{display: (registeredKeeperChecked ? 'block' : 'none')}}>  
            <Row>  
                {registered_keeper_fields.length > 0 && registered_keeper_fields.map((sub_field, i) => {
                    return (
                        <Col lg={5}>
                            <Element
                            key={i}
                            field={sub_field}
                            />
                        </Col>
                      );
                })}
            </Row>
        </div>

        <div style={{display: (legalOwnerChecked ? 'block' : 'none')}}> 
            <Row>   
                {legal_owner_fields.length > 0 && legal_owner_fields.map((sub_field, i) => {
                    return (
                        <Col lg={5}>
                            <Element
                            key={i}
                            field={sub_field}
                            />
                        </Col>
                      );
                })}
            </Row>
        </div>

        </Form.Group>
      );
}

export default Radio;