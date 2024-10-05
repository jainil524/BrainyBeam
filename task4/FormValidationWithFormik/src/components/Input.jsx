import React from 'react';

import TextBoxInput from './SharedInput/TextBoxInput';
import TextAreaInput from './SharedInput/TextAreaInput';
import CheckBoxInput from './SharedInput/CheckBoxInput';
import RadioInput from './SharedInput/RadioInput';
import Dropdown from './SharedInput/Dropdown';

import "/public/css/Input.css";

/**
 * Input component acts as a central point of access for rendering 
 * various input types (text, textarea, checkbox, radio, dropdown).
 * 
 * @param {string} type - Type of input (text, textarea, checkbox, radio, dropdown).
 * @param {Object} props - Additional props to be passed to specific input components.
 * @param {string} props.id - The unique identifier for the input element.
 * @param {string} props.label - The label text for the input element.
 * @param {string} props.value - The current value of the input.
 * @param {string} props.placeholder - The placeholder text for the input (for text-based inputs).
 * @param {Function} props.onChange - The callback function that triggers when the input value changes.
 * @param {string} props.error - The error message to display for validation.
 * @param {string} props.classes - Additional CSS classes to style the input.
 * @param {Object} [props.additionalProps] - Optional additional props that can be passed to customize inputs.
 * 
 * @returns {JSX.Element|null} - Renders the appropriate input component based on the type.
 */

function Input({ type, ...props }) {
    console.log("Type: ", type);
    switch (type) {
        case 'text':
        case 'email':
        case 'password':
        case 'number':
        case 'tel':
        case 'url':
        case 'search':
        case 'date':
        case 'time':
        case 'datetime-local':
        case 'month':
        case 'week':
        case 'color':
            return <TextBoxInput type={type} {...props} />;
        case 'textarea':
            return <TextAreaInput {...props} />;
        case 'checkbox':
            return <CheckBoxInput {...props} />;
        case 'radio':
            return <RadioInput {...props} />;
        case 'dropdown':
            return <Dropdown {...props} />;
        default:
            return null; // In case an unknown type is passed
    }
}

export default Input;
