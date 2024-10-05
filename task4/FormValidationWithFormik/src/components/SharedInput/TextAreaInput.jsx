import React from 'react';

/**
 * TextAreaInput component to render a textarea field.
 * 
 * @param {string} id - The id for the textarea.
 * @param {string} label - The label for the textarea.
 * @param {string} value - The current value of the textarea.
 * @param {string} placeholder - Placeholder text for the textarea.
 * @param {function} onChange - Function to handle changes in the textarea value.
 * @param {string} error - Error message for validation.
 * @param {Array} classes - Additional CSS classes for styling the textarea.
 * @param {object} additionalProps - Additional html properties to pass to be passed to the textarea.
 *
 */

function TextAreaInput({ id, label, value, placeholder, onChange, error, classes = [], ...additionalProps}) {
    return (
        <div className="input-wrapper">
            {label && <label htmlFor={id}>{label}</label>}
            <textarea
                id={id}
                value={value}
                placeholder={placeholder}
                className={classes}
                onChange={onChange}
                {...additionalProps}
            />
            {[""," ",null,undefined].includes(error)==false && <span className="error">{error}</span>}
        </div>
    );
}

export default TextAreaInput;
