# 📝 Shared Input Component Library

This project is a **React-based component library** that provides shared components for various input types such as **text**, **textarea**, **checkbox**, and **radio**. The library is designed for **reuse in forms**, promoting maintainable and scalable code.

![Inputs Example](https://via.placeholder.com/800x400?text=Inputs+Example)

---

## 🚀 Features

- 🔄 **Reusable input components** for multiple types (`text`, `textarea`, `checkbox`, `radio`).
- 🌐 **Customizable props** such as `label`, `value`, `placeholder`, and more.
- ⚠️ **Error handling** and inline validation.
- 📋 **Dynamic form building** with easy integration.
- 💅 **Modern UI design** with a responsive layout.
  
---

---

## 📦 Installation

1. **Clone this repository**:

   ```bash
   git clone https://github.com/your-username/shared-input-component.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd shared-input-component
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

---

## 🛠️ Usage

### Basic Example

Here’s how you can import and use the shared `Input` component in your project:

```jsx
import React, { useState } from 'react';
import Input from './components/Input';

function ExampleForm() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        agree: false,
        gender: ''
    });

    const handleChange = (key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <form>
            <Input
                type="text"
                id="name"
                label="Name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={(value) => handleChange('name', value)}
                required
            />
            
            <Input
                type="textarea"
                id="description"
                label="Description"
                value={formData.description}
                placeholder="Enter a description"
                onChange={(value) => handleChange('description', value)}
                maxLength="100"
            />
            
            <Input
                type="checkbox"
                id="agree"
                label="I agree to terms"
                checked={formData.agree}
                onChange={(value) => handleChange('agree', value)}
            />
            
            <Input
                type="radio"
                id="gender"
                label="Gender"
                name="gender"
                options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' }
                ]}
                checked={formData.gender}
                onChange={(value) => handleChange('gender', value)}
            />
        </form>
    );
}

export default ExampleForm;
```

### Available Props

| Prop Name     | Description                                                    |
|---------------|----------------------------------------------------------------|
| `type`        | Specifies the input type (`text`, `textarea`, `checkbox`, `radio`) |
| `id`          | The `id` attribute for the input                               |
| `label`       | The label text for the input                                   |
| `value`       | The current value of the input                                 |
| `onChange`    | Function that handles value changes                            |
| `placeholder` | Placeholder text for the input                                 |
| `checked`     | For checkbox and radio inputs, indicates whether the input is checked |
| `options`     | For radio buttons, defines available options                   |
| `error`       | Displays an error message for input validation                 |

---

## 🎨 Design

This project comes with a **modern and clean design**. You can customize the look and feel by editing the `Input.css` file to fit your design requirements.

