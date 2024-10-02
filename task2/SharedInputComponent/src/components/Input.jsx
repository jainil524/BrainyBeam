// Input.jsx
import React from 'react';

import TextBoxInput from './SharedInput/TextBoxInput';
import TextAreaInput from './SharedInput/TextAreaInput';
import CheckBoxInput from './SharedInput/CheckBoxInput';
import RadioInput from './SharedInput/RadioInput';

import "/public/css/Input.css";

/**
 * Input component acts as a central point of access for rendering 
 * various input types (text, textarea, checkbox, radio).
 * 
 * @param {string} type - Type of input (text, textarea, checkbox, radio).
 * @param {object} props - Additional props to be passed to specific input components.
 * @returns {JSX.Element} - Renders the appropriate input component based on the type.
 */

function Input({ type, ...props }) {
    switch (type) {
        case 'text':
            return <TextBoxInput {...props} />;
        case 'textarea':
            return <TextAreaInput {...props} />;
        case 'checkbox':
            return <CheckBoxInput {...props} />;
        case 'radio':
            return <RadioInput {...props} />;
        default:
            return null; // In case an unknown type is passed
    }
}

export default Input;
