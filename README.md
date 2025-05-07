# Karan's Portfolio

A modern, responsive portfolio website to showcase personal projects and skills.

## Description

This portfolio website is designed for an engineer to showcase technical projects and professional information. It features a tech-inspired dark theme with blueprint-style grid patterns, circuit-like elements, and code-inspired design touches. The one-page layout provides a streamlined experience with smooth transitions and engaging animations that highlight the engineer's work. The design has been enhanced with fancy elements like gradient effects, glowing animations, interactive hover states, and decorative SVG patterns to create a visually stunning and modern portfolio.

## Features

- Engineering-themed design with technical aesthetics
- Blueprint-style grid backgrounds and circuit-inspired elements
- Code-like styling (command prompts, comments, monospace fonts)
- Interactive project cards with technical indicators and decorative elements
- Smooth animations and transitions for a dynamic experience
- Fancy visual effects including:
  - Gradient backgrounds and buttons
  - Glowing text and border effects
  - Custom animated cursor
  - Rotating and floating decorative elements
  - Interactive hover states with micro-animations
  - Animated tech dots on project cards
- One-page layout with responsive design for all devices
- Project filtering by category (Web, Mobile, Other)
- Contact form for easy communication
- Project cards with links to live demos and source code
- Easy to add new projects

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/karan_portfolio.git
   ```
2. Navigate to the project directory:
   ```
   cd karan_portfolio
   ```

## How to Run the Application

Since this is a static website, you can run it in several ways:

### Option 1: Open directly in a browser

Simply open the `index.html` file in your web browser.

### Option 2: Use a local development server

If you have Node.js installed, you can use a simple HTTP server:

1. Install a simple HTTP server globally (if not already installed):
   ```
   npm install -g http-server
   ```

2. Run the server from the project directory:
   ```
   http-server
   ```

3. Open your browser and navigate to `http://localhost:8080`

### Option 3: Use VS Code Live Server extension

If you're using Visual Studio Code:

1. Install the "Live Server" extension
2. Right-click on `index.html` and select "Open with Live Server"

## How to Add New Projects

Adding new projects is simple. Open the `index.js` file and add a new project object to the `projects` array:

```javascript
{
    id: 7, // Increment the ID
    title: "Your New Project",
    description: "A brief description of your project.",
    image: "path/to/image.jpg", // Or use a placeholder
    tags: ["Web", "React", "Node.js"], // Add relevant tags
    category: "web", // Choose from: web, mobile, other
    liveLink: "https://example.com/your-project",
    codeLink: "https://github.com/username/your-project"
}
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome (for icons)
- Google Fonts

## Customization

Feel free to customize the engineering portfolio by:

- Updating personal information in `index.html`
- Changing colors and styles in `styles.css`:
  - Engineering theme colors are defined in the `:root` variables
  - The primary color (`--primary-color: #00d9ff`) and gradient colors can be changed to match your preferred engineering discipline
  - The glow effects can be adjusted by modifying the `--neon-glow` and `--glow-shadow` variables
  - Background patterns and grid sizes can be adjusted in the body and hero section styles
- Modifying the fancy visual elements:
  - SVG patterns and decorative elements can be customized
  - Gradient backgrounds and buttons can be adjusted by changing the `--primary-gradient` variable
  - Animation timings and effects can be modified in the keyframes section
  - The custom cursor can be changed by updating the SVG in the body style
  - The tech dots on project cards can be styled differently by modifying their colors and animations
- Enhancing the interactive elements:
  - Hover effects and transitions can be adjusted for buttons, cards, and navigation items
  - Glowing text and border effects can be modified by changing the shadow values
  - Rotating and floating animations can be customized by adjusting their timing and properties
- Adding or modifying sections as needed
- Updating project data in `index.js` to showcase your engineering projects

## License

This project is open source and available under the [MIT License](LICENSE).
