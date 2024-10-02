import React from 'react';

/**
 * CheckBoxInput component to render a group of checkbox.
 * 
 * @param {string} id - The id for the checkbox group.
 * @param {string} name - The name for the checkbox group.
 * @param {string} label - The label for the checkbox group.
 * @param {Array} options - Array of options with {value, label} for the checkbox.
 * @param {string} checked - The currently checked checkbox button's value.
 * @param {function} onChange - Function to handle changes in selected checkbox value.
 * @param {string} error - Error message for validation.
 * @param {Array} classes - Additional CSS classes for styling the checkbox.
 * @param {object} additionalProps - Additional html properties to pass to be passed to the checkbox.
 */

function CheckBoxInput({ id, name, label, value, checked, onChange, options, error, classes = [],  ...additionalProps}) {
    return (
        <div className="input-wrapper">
            {label && <label>{label}</label>}
            {options.map((option) => (
                <div key={option.value}>
                    <input
                        id={`${id}_${option.value}`}
                        type="checkbox"
                        name={name}
                        value={option.value}
                        checked={checked === option.value}
                        onChange={(e) => onChange(e.target.value)}
                        className={classes}
                        {...additionalProps}
                    />
                    <label htmlFor={`${id}_${option.value}`}>{option.label}</label>
                </div>
            ))}
            {error && <span className="error">{error}</span>}
        </div>
    );
}

export default CheckBoxInput;
