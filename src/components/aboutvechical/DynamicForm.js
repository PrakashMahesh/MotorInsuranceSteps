import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import formJSON from './formData.json';
import { useState, useEffect } from 'react';
import Element from './Element';
import FormLayout from './FormLayout';
import { FormHandleChangeContext, FormVehicleDetailsContext } from './FormContext';
import {useSelector, useDispatch} from 'react-redux';
import {showLoader, hideLoader} from '../actions'



function DynamicForm({handleNext,handleBack}) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const loading = useSelector(state => state.loading);

  const [elements, setElements] = useState(formJSON[0]);

  const dispatch = useDispatch();

  
  const handleAPICall = (event)=> {
    dispatch(showLoader());
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      dispatch(hideLoader());
      console.log(response.json());
    })
  }

  const loadVehicleDetails = async () => {
    dispatch(showLoader());
    const response = await fetch("https://run.mocky.io/v3/d47f364e-4f84-44cd-8cb3-84f7bc3e38cc");
    const vehicleDetailsData = await response.json();
    dispatch(hideLoader());
    console.log(vehicleDetailsData);
    
    const newElements = { ...elements }
    newElements.fields.forEach(row => {
      row.fields.forEach(field => {

      if(field.field_id === "car_engine_no"){
          field.field_value = vehicleDetailsData.car_engine_no;
      }
      if(field.field_id === "registration_date"){
        field.field_value = vehicleDetailsData.registration_date;
      }
      if(field.field_id === "chasis_no"){
        field.field_value = vehicleDetailsData.chasis_no;
      } 
      if(field.field_id === "car_manufacturer"){
        field.field_value = vehicleDetailsData.car_manufacturer;
      }
      if(field.field_id === "car_model"){
        field.field_value = vehicleDetailsData.car_model;
      } 
      if(field.field_id === "car_manufacture_year"){
        field.field_value = vehicleDetailsData.car_manufacture_year;
      }
      if(field.field_id === "car_body_type"){
        field.field_value = vehicleDetailsData.car_body_type;
      } 
      if(field.field_id === "car_transmission_system"){
        field.field_value = vehicleDetailsData.car_transmission_system;
      }
      if(field.field_id === "car_seating_capacity"){
        field.field_value = vehicleDetailsData.car_seating_capacity;
      }
      if(field.field_id === "car_differential_type"){
        field.field_value = vehicleDetailsData.car_differential_type;
      }
      if(field.field_id === "car_drive_type"){
        field.field_value = vehicleDetailsData.car_drive_type;
      }
      if(field.field_id === "car_fuel_type"){
        field.field_value = vehicleDetailsData.car_fuel_type;
      }
      setElements(newElements);
    })
    });
};

  //leftExpression ?? rightExpression. It returns the right operand (rightExpression) if the left operand (leftExpression) is null or undefined.
  const { fields, step, page_label, page_description } = elements ?? {}

  const handleSubmit = (event) => {
    let verify=true;
    event.preventDefault();

    const newElements = { ...elements }
    newElements.fields.forEach(row => {
      row.fields.forEach(field => {

      if(field.field_mandatory == "yes" && field.field_value == ""){
          field.errors = "Should not be empty";
          setElements(newElements);
          verify=false;
      }
    })
    });

    console.log(elements)
    if(verify){
      handleNext();
      }
  }

  const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(row => {
      row.fields.forEach(field => {
      // const { field_type, field_id } = field;
      if (id === field.field_id) {
        switch (field.field_type) {
          case 'checkbox':
            field.field_value = event.target.checked;
            break;

          case 'multiple_select':
            field.field_value = Array.from(event.target.selectedOptions, option => option.value);
            break;
            
          default:
            field.field_value = event.target.value;
            break;
        }
      }

      if(field.yes_options){
        field.yes_options.forEach(yes_option =>{
          if (id === yes_option.field_id) {
            switch (yes_option.field_type) {
              case 'checkbox':
                yes_option.field_value = event.target.checked;
                break;
    
              case 'multiple_select':
                yes_option.field_value = Array.from(event.target.selectedOptions, option => option.value);
                break;
                
              default:
                yes_option.field_value = event.target.value;
                break;
            }
          }
        })
      }

      if(field.legal_owner_fields){
        field.legal_owner_fields.forEach(sub_field =>{
          if (id === sub_field.field_id) {
            switch (sub_field.field_type) {
              case 'checkbox':
                sub_field.field_value = event.target.checked;
                break;
    
              case 'multiple_select':
                sub_field.field_value = Array.from(event.target.selectedOptions, option => option.value);
                break;
                
              default:
                sub_field.field_value = event.target.value;
                break;
            }
          }
        })
      }

      if(field.registered_keeper_fields){
        field.registered_keeper_fields.forEach(sub_field =>{
          if (id === sub_field.field_id) {
            switch (sub_field.field_type) {
              case 'checkbox':
                sub_field.field_value = event.target.checked;
                break;
    
              case 'multiple_select':
                sub_field.field_value = Array.from(event.target.selectedOptions, option => option.value);
                break;
                
              default:
                sub_field.field_value = event.target.value;
                break;
            }
          }
        })
      }

      if(field.conviction_table_fields){
        field.conviction_table_fields.forEach(sub_field =>{
          if (id === sub_field.field_id) {
            switch (sub_field.field_type) {
              case 'checkbox':
                sub_field.field_value = event.target.checked;
                break;
    
              case 'multiple_select':
                sub_field.field_value = Array.from(event.target.selectedOptions, option => option.value);
                break;
                
              default:
                sub_field.field_value = event.target.value;
                break;
            }
          }
        })
      }

      field.errors = "";

      if(field.field_id === "car_registration_no"){
        if(field.field_value != ""){
          if(!Number(field.field_value)){
            field.errors = "Must be a number";
          }
          if(Number(field.field_value) && field.field_value.length > 5){
            field.errors = "Should not contain more than 5 digits";
          }
          if(Number(field.field_value) && field.field_value.length < 5){
            field.errors = "Should contain maximum of 5 digits";
          }
        }
      }


      if(field.field_id === "chasis_no"){
        if(field.field_value != ""){
          if(!Number(field.field_value)){
              field.errors = "Must be a number";
          }
        }
      }

      // if(field.field_id === "car_model"){
      //   if(field.field_value != ""){
      //     if(!field.field_value.match(/^[a-zA-Z]+$/)){
      //       field.errors = "Only letters";
      //     }
      //   }
      // }

      setElements(newElements)
    })
    });
    console.log(elements)
  }

    return (
      <>
      <FormHandleChangeContext.Provider value={{ handleChange }}>
        <FormVehicleDetailsContext.Provider value={{ loadVehicleDetails }}>
        <Form className="container form-container">
        <p style={{color: "#BBADE2", fontSize: "18px"}}>{step}</p>
        <h3 style={{color: "#5A2F7D"}}><b>{page_label}</b></h3>
        <p style={{color: "#090909", fontSize: "16px"}}>{page_description}</p>
          {
          fields.map((field, i) => {
          if (field.layout === "row") {  
              return (
                <FormLayout
                  key={i}
                  field={field}
                />
              );
              }
            else
            {
              return (
                <Element
                  key={i}
                  field={field.fields[0]}
                />
              );
            }
              })
              }
              <br/>
              <br/>
              
          <Button variant="secondary" className="button-rounded grey-btn" type="button">
            Cancel
          </Button>
          {' '}
          <Button variant="success" className="button-rounded green-btn" type="submit" onClick={(e) => handleSubmit(e)}>
            Continue
          </Button>
          {' '}
          {/* <Button variant="primary" className="button-rounded" type="button" onClick={(e) => handleAPICall(e)}>
            API Call
          </Button> */}
      </Form>
      </FormVehicleDetailsContext.Provider>
      </FormHandleChangeContext.Provider>
      </>
    );
  }
  
  export default DynamicForm;