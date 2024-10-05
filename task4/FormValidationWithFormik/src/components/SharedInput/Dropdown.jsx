import React, { useState } from 'react';

/**
 * Dropdown component to render a select input.
 * 
 * @param {string} id - The id for the dropdown.
 * @param {string} label - The label for the dropdown.
 * @param {string} value - The current selected value of the dropdown.
 * @param {Array} options - An array of options for the dropdown, each being an object with 'value' and 'label'.
 * @param {function} onChange - Function to handle changes in the selected value.
 * @param {string} error - Error message for validation.
 * @param {Array} classes - Additional CSS classes for styling the dropdown.
 * @param {function} validate - Optional validation function to validate selected value.
 * @param {object} additionalProps - Additional HTML properties to be passed to the dropdown.
 * 
 */
const Dropdown = ({ id, label, options, value, onChange, error, classes = [], validate, ...additionalProps }) => {

    return (
        <div className="input-wrapper">
            {label && <label htmlFor={id}>{label}</label>}
            <select
                id={id}
                value={value}
                onChange={onChange}
                className={`border rounded p-2 ${error ? 'border-red-500' : 'border-gray-300'} ${classes.join(' ')}`}
                {...additionalProps}
            >
                <option value="" disabled>Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {([""," ",null,undefined].includes(error)==false) && <span className="error">{error}</span>}
        </div>
    );
};

export default Dropdown;
