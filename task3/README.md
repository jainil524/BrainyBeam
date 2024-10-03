# 🌈 Theme Changer

Welcome to the **Theme Changer** project! This application allows users to effortlessly switch between dark and light themes, creating a customizable and enjoyable user experience. 

## 🚀 About the Project

The Theme Changer enhances usability by providing a sleek interface that accommodates different lighting conditions and user preferences. Whether you prefer a soothing dark mode for late-night browsing or a bright and vibrant light mode for daytime use, this project offers a smooth and visually appealing transition between themes.

### Key Features:
- **Dynamic Theme Switching**: Easily toggle between dark and light modes with just one click.
- **Custom Icons**: Beautifully designed sun and moon icons represent the current theme, making it intuitive and visually engaging.
- **Smooth Animations**: Enjoy smooth transitions when switching themes, providing a delightful user experience.
- **Responsive Design**: The application is designed to look great on all devices, ensuring accessibility and usability across different screen sizes.

## 📸 Sample Screenshots

**Dark Mode:**

![Dark Mode](https://github.com/jainil524/BrainyBeam/blob/main/task3/ThemeChanger/public/img/darkTheme.jpg)

**Light Mode:**

![Light Mode](https://github.com/jainil524/BrainyBeam/blob/main/task3/ThemeChanger/public/img/lightTheme.jpg)

## 🔧 Installation

To get started with the Theme Changer project, follow these simple steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/theme-changer.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd theme-changer
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the application**:

   ```bash
   npm start
   ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## 🎨 Usage

- Upon launching the application, you'll see the theme toggle button in the header.
- Click the toggle button to switch between dark and light themes seamlessly.
- The beautifully animated sun and moon icons will indicate the current theme, enhancing user interaction.

## 📝 Example

Here’s an example of how you can implement the theme toggle in your React component:

```javascript
import ThemeToggleButton from './ThemeToggleButton';

const App = () => {
    return (
        <div>
            <header>
                <h1>Welcome to the Theme Changer App!</h1>
                <ThemeToggleButton />
            </header>
            <main>
                <p>Enjoy switching themes!</p>
            </main>
        </div>
    );
};

export default App;
```

## ⚡️ Contributing

Contributions are welcome! If you have suggestions for improvements or find any bugs, feel free to open an issue or submit a pull request.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgments

- Special thanks to the open-source community for their inspiring designs and contributions.
- Icons sourced from [Font Awesome](https://fontawesome.com/) and tailored for this project.
