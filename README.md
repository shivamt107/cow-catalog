# Cow Catalog

A comprehensive web application for managing cattle inventory built with Angular and PrimeNG. This application provides an intuitive interface for tracking cows, their health status, location, and event history.


### 🎨 UI/UX Features
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Professional UI** - Built with PrimeNG components for consistent styling
- **Data Persistence** - Local storage ensures data survives browser sessions
- **Real-time Validation** - Form validation with helpful error messages

## Tech Stack

- **Frontend Framework**: Angular 20.3.4
- **UI Library**: PrimeNG 20+ (Buttons, Cards, Tables, Forms, Timeline)
- **Styling**: SCSS with custom responsive design
- **Data Storage**: Browser LocalStorage
- **Build Tool**: Angular CLI
- **Language**: TypeScript with strict type checking

## Installation & Setup

### Prerequisites
- Node.js (v20.19+ or v22.12+)
- npm (comes with Node.js)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <url>
   cd cow-catalog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

### Build for Production

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── models/          # TypeScript interfaces and types
│   ├── services/        # Data services and business logic
│   ├── components/      # Reusable UI components
│   ├── cow-list/        # Main cow listing page
│   ├── add-cow/         # Add new cow form
│   ├── cow-detail/      # Individual cow details view
│   └── shared/          # Shared components (header)
├── assets/
│   └── data/            # JSON dataset for initial cow data
└── styles/              # Global SCSS styles
```

## Design Approach & Choices

### Architecture Decisions

1. **Standalone Components** - Used modern Angular standalone components for better tree-shaking and simpler imports
2. **Reactive Forms** - Implemented reactive forms for robust validation and better control
3. **Service-Based Architecture** - Centralized data management through CowService with observable streams
4. **Local Storage Strategy** - Browser storage for data persistence without backend dependency

### UI/UX Design Choices

1. **PrimeNG Integration** - Chose PrimeNG for consistent, professional UI components
2. **Mobile-First Design** - Responsive layouts that work on all device sizes

### Data Management

1. **JSON Dataset** - Initial data loaded from structured JSON file for realistic sample data
2. **Local State Management** - RxJS observables for reactive data flow
3. **Form Validation** - Multi-layer validation including unique ear tag checking


## Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run linting
npm run lint

# Generate new component
ng generate component component-name

# Generate new service
ng generate service service-name
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This project follows Angular style guide and best practices. When contributing:

1. Use TypeScript strict mode
2. Follow component-based architecture
3. Implement proper error handling
4. Add appropriate validation
5. Maintain responsive design principles

## License

This project is for demonstration purposes.