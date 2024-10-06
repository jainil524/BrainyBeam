# Form Validation Project with Modern UI

This project is a **Form Validation Application** built using **React** and **Formik** with a visually appealing, modern UI. The form includes various types of input fields like text, email, password, dropdown, radio buttons, and checkbox inputs, all dynamically rendered using a reusable `Input` component. The application also ensures form validation using **Yup** and features a sleek background with smooth transitions and a stylish submit button.

## Key Features

- **Reusable Input Components**: Dynamic `Input` component supporting text, email, password, dropdown, checkbox, and radio button inputs.
- **Formik & Yup Validation**: Integration of `Formik` for form handling and `Yup` for validation schema definitions.
- **Modern UI Design**: An elegant design with a gradient button, smooth background transitions, and shadows for an enhanced user experience.
- **Responsive Layout**: The form is responsive and adaptable to different screen sizes, ensuring a consistent experience across devices.
- **Error Handling**: Shows appropriate validation error messages for each input field.

## Technologies Used

- **React**: For building the UI components and handling state.
- **Formik**: For form management and state handling.
- **Yup**: For validation schema and form validation.
- **CSS**: Custom styling for modern design and smooth transitions.
- **Unsplash API**: Dynamically loads background images for aesthetic appeal.

## Project Structure

```bash
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Input.jsx
│   │   └── SharedInput/
│   │       ├── CheckBoxInput.jsx
│   │       ├── RadioInput.jsx
│   │       ├── TextBoxInput.jsx
│   │       └── Dropdown.jsx
│   ├── styles/
│   │   └── FormStyles.css
│   ├── App.js
│   ├── index.js
│   └── validation/
│       └── validationSchema.js
├── README.md
├── package.json
└── yarn.lock
```

## How to Run the Project

1. **Clone the repository**:

```bash
git clone https://github.com/your-username/form-validation-project.git
cd form-validation-project
```

2. **Install dependencies**:

```bash
yarn install
```

3. **Start the development server**:

```bash
yarn start
```

4. **Open the application**:

After running the development server, open your browser and navigate to `http://localhost:3000`.

## Folder Structure

- **/components**: Contains all reusable components like the `Input` component and its subcomponents (e.g., TextBoxInput, RadioInput, Dropdown, etc.).
- **/styles**: Contains the CSS styles used to create the UI of the form and the application container.
- **/validation**: Contains the validation schema file (`validationSchema.js`) where all the Yup-based validation rules are defined.

## Features Highlight

### 1. Dynamic Input Rendering

All form inputs are dynamically rendered using a single `Input` component, which takes the `type` prop and renders the appropriate input element. This makes it easy to extend and manage different types of input fields.

```jsx
<Input
  type="text"
  id="name"
  label="Name"
  error={touched.name && errors.name ? <ErrorMessage name="name" /> : null}
  value={values.name}
  placeholder="Enter name"
  onChange={handleChange}
  name="name"
/>
```

### 2. Form Validation with Formik & Yup

Formik handles the form state and submission, while Yup manages the validation schema for each input field. Here is an example of how validation is done for fields like name, email, and password:

```js
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  isagreementAccpeted: Yup.boolean().oneOf([true], 'You must accept the terms').required(),
  country: Yup.string().required('Country is required'),
  gender: Yup.string().required('Gender is required'),
});
```

### 3. Smooth UI & Animations

The app's UI features:
- **Gradient background transitions** for an aesthetic and modern touch.
- A **submit button with hover effects** that gives the form a polished, interactive feel.

```css
button[type="submit"] {
    background: linear-gradient(90deg, #4caf50, #8bc34a);
    color: white;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
}

button[type="submit"]:hover {
    background: linear-gradient(90deg, #388e3c, #76ff03);
    transform: translateY(-2px);
}
```

## Future Enhancements

- Add **dynamic background switching** based on user interactions.
- Implement **dark mode** and other theme options.
- Add **real-time validations** and tooltips for better user feedback.

## License

This project is licensed under the MIT License.
