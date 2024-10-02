import React from 'react';

/**
 * TextBoxInput component to render an input field of type text.
 * 
 * @param {string} id - The id for the input field.
 * @param {string} label - The label for the input field.
 * @param {string} value - The current value of the input field.
 * @param {string} placeholder - Placeholder text for the input field.
 * @param {function} onChange - Function to handle changes in the input value.
 * @param {string} error - Error message for validation.
 * @param {Array} classes - Additional CSS classes for styling the input.
 * @param {object} additionalProps - Additional html properties to pass to be passed to the textbox.
 * 
 */

function TextBoxInput({ id, label, value, placeholder, onChange, error, classes = [], ...additionalProps}, ) {
    return (

        <div className="input-wrapper">
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                type="text"
                value={value}
                placeholder={placeholder}
                className={classes}
                onChange={(e) => onChange(e.target.value)}
                {...additionalProps}
            />
            {error && <span className="error">{error}</span>}
        </div>
    );
}

export default TextBoxInput;
