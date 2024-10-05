import React from 'react';

/**
 * RadioInput component to render a group of radio buttons.
 * 
 * @param {string} id - The id for the radio group.
 * @param {string} name - The name for the radio group.
 * @param {string} label - The label for the radio group.
 * @param {Array} options - Array of options with {value, label} for the radio buttons.
 * @param {string} checked - The currently checked radio button's value.
 * @param {function} onChange - Function to handle changes in selected radio value.
 * @param {string} error - Error message for validation.
 * @param {Array} classes - Additional CSS classes for styling the radio buttons.
 * @param {object} additionalProps - Additional html properties to pass to be passed to the radio button.
 * 
 */

function RadioInput({ id, name, label, value, checked, onChange, options, error, classes = [],  ...additionalProps}) {
    return (
        <div className="input-wrapper">
            {label && <label>{label}</label>}
            {options.map((option) => (
                <div key={option.value}>
                    <input
                        id={`${id}_${option.value}`}
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={checked === option.value}
                        onChange={onChange}
                        className={classes}
                        {...additionalProps}
                    />
                    <label htmlFor={`${id}_${option.value}`}>{option.label}</label>
                </div>
            ))}
            {[""," ",null,undefined].includes(error)==false && <span className="error">{error}</span>}
        </div>
    );
}

export default RadioInput;
