import React from 'react';
import TextInput from './elements/TextInput'
import DateInput from './elements/DateInput'
import Select from './elements/Select'
import MultipleSelect from './elements/MultipleSelect'
import Radio from './elements/Radio'
import TextAndButton from './elements/TextAndButton'

function Element({ field }){
        switch (field.field_type) {
            case 'text':
                return (
                <TextInput
                    field_id={field.field_id}
                    field_label={field.field_label}
                    field_placeholder={field.field_placeholder}
                    field_value={field.field_value}
                    field_mandatory={field.field_mandatory}
                    errors={field.errors}
    
                />)

            case 'text_and_button':
                return (
                    <TextAndButton
                        field_id={field.field_id}
                        field_label={field.field_label}
                        field_placeholder={field.field_placeholder}
                        field_value={field.field_value}
                        field_mandatory={field.field_mandatory}
                        button_id={field.button_id}
                        button_label={field.button_label}
                        errors={field.errors}
        
                    />)
            
            case 'date':
                return (<DateInput
                    field_id={field.field_id}
                    field_label={field.field_label}
                    field_placeholder={field.field_placeholder}
                    field_value={field.field_value}
                    field_mandatory={field.field_mandatory}
                    errors={field.errors}
    
                />)

            case 'select':
                return (<Select
                    field_id={field.field_id}
                    field_label={field.field_label}
                    field_value={field.field_value}
                    field_options={field.field_options}
                    field_mandatory={field.field_mandatory}
                    errors={field.errors}
    
                />)

            case 'multiple_select':
                return (<MultipleSelect
                    field_id={field.field_id}
                    field_label={field.field_label}
                    field_value={field.field_value}
                    field_options={field.field_options}
                    field_mandatory={field.field_mandatory}
                    errors={field.errors}
        
                />)

            
            case 'radio':
                return (<Radio
                    field_id={field.field_id}
                    field_label={field.field_label}
                    field_value={field.field_value}
                    field_options={field.field_options}
                    field_mandatory={field.field_mandatory}
                    yes_options = {field.yes_options? field.yes_options : ""}
                    registered_keeper_fields = {field.registered_keeper_fields? field.registered_keeper_fields : ""}
                    legal_owner_fields = {field.legal_owner_fields? field.legal_owner_fields : ""}
                    errors={field.errors}
    
                />)

            default:
                return null;
        }
}

export default Element;