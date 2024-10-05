import React from 'react';

/**
 * CheckBoxInput component to render a checkbox.
 * 
 * @param {string} id - The id for the checkbox.
 * @param {string} name - The name for the checkbox.
 * @param {string} label - The label for the checkbox.
 * @param {boolean} checked - Whether the checkbox is checked.
 * @param {function} onChange - Function to handle changes in checkbox state.
 * @param {string} error - Error message for validation.
 * @param {Array} classes - Additional CSS classes for styling the checkbox.
 * @param {object} additionalProps - Additional html properties to pass to the checkbox.
 */

function CheckBoxInput({ id, name, label, checked, onChange, error, classes = [], ...additionalProps }) {
    return (
        <div className="input-wrapper">
            <div>
                <input
                    id={id}
                    type="checkbox"
                    name={name}
                    checked={checked} // Use the boolean checked state directly
                    onChange={onChange} // Use the onChange function passed from the parent
                    className={classes}
                    {...additionalProps}
                />
                <label htmlFor={id}>{label}</label>
            </div>
            {error && <span className="error">{error}</span>} {/* Display error message if exists */}
        </div>
    );
}

export default CheckBoxInput;
