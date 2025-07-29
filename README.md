# Snaproom React - Feature-Sliced Design Architecture

A React application built using the Feature-Sliced Design (FSD) methodology for better code organization, maintainability, and scalability.

## 🏗️ Feature-Sliced Design Overview

Feature-Sliced Design is an architectural methodology that provides a standardized way to organize frontend applications. It emphasizes separation of concerns, predictable structure, and maintainable code through a hierarchical approach.

### Core Principles

1. **Hierarchical Organization**: Code is organized into layers based on responsibility
2. **Business Logic Separation**: Clear boundaries between business logic and presentation
3. **High Cohesion, Low Coupling**: Related code stays together, unrelated code stays separate
4. **Predictable Structure**: Consistent patterns across the entire application
5. **Scalability**: Architecture that grows with your application

## 📁 Directory Structure

```
src/
├── app/                    # Application layer
│   ├── config/            # Global configuration
│   ├── model/             # Global state and business logic
│   └── index.js           # App entry point
├── pages/                 # Pages layer
│   ├── home/              # Home page slice
│   ├── login/             # Login page slice
│   └── index.js           # Routing configuration
├── widgets/               # Widgets layer
│   └── auth-widget/       # Authentication widget
│       ├── ui/            # Widget components
│       └── model/         # Widget logic
├── features/              # Features layer
│   └── auth/              # Authentication feature slice
│       ├── ui/            # Feature components
│       ├── model/         # Feature business logic
│       ├── api/           # Feature API calls
│       └── lib/           # Feature utilities
├── entities/              # Entities layer
│   └── user/              # User entity slice
│       ├── ui/            # Entity components
│       ├── model/         # Entity business logic
│       └── api/           # Entity API calls
└── shared/                # Shared layer
    ├── ui/                # Reusable UI components
    ├── api/               # Common API utilities
    ├── lib/               # Shared utilities
    └── config/            # Shared configuration
```

## 🔄 Layers Explained

### 1. App Layer (`src/app/`)
**Purpose**: Application-level logic and global setup
- Global providers and contexts
- Application configuration
- Root routing setup
- Global styles and themes

### 2. Pages Layer (`src/pages/`)
**Purpose**: Full-page components and their specific logic
- Route-level components
- Page-specific layouts
- Page composition using widgets and features
- URL parameter handling

### 3. Widgets Layer (`src/widgets/`)
**Purpose**: Complex, reusable UI blocks combining multiple features
- Composite UI components
- Cross-feature interactions
- Complex business logic blocks
- Reusable page sections

### 4. Features Layer (`src/features/`)
**Purpose**: Specific user features and interactions
- User stories implementation
- Feature-specific business logic
- Interactive elements
- Feature-scoped state management

### 5. Entities Layer (`src/entities/`)
**Purpose**: Business entities and domain models
- Domain model representations
- Entity-specific operations
- Data transformation logic
- Entity validation rules

### 6. Shared Layer (`src/shared/`)
**Purpose**: Generic, reusable code without business context
- UI kit components (buttons, inputs, etc.)
- Utility functions
- Constants and configurations
- Common API utilities

## 🧩 Segments Explained

Within each slice, code is organized into segments based on technical purpose:

- **`ui/`**: Presentational components and styles
- **`model/`**: Business logic, state management, and data handling
- **`api/`**: API interactions and external service calls
- **`lib/`**: Internal utilities and helper functions
- **`config/`**: Configuration specific to the slice

## 🔐 Authentication Example

Here's how the authentication feature is structured across FSD layers:

### Feature Layer (`src/features/auth/`)
```
auth/
├── ui/
│   └── login-form.js      # Login form component
├── model/
│   └── use-auth.js        # Authentication logic hook
├── api/
│   └── auth-api.js        # Authentication API calls
└── index.js               # Public API
```

### Entity Layer (`src/entities/user/`)
```
user/
├── ui/
│   └── user-card.js       # User display component
├── api/
│   └── user-api.js        # User data API calls
└── index.js               # Public API
```

### Widget Layer (`src/widgets/auth-widget/`)
```
auth-widget/
├── ui/
│   └── auth-widget.js     # Composite auth component
└── index.js               # Public API
```

### Shared Layer (`src/shared/`)
```
shared/
├── ui/
│   ├── button.js          # Generic button component
│   └── input.js           # Generic input component
└── api/
    └── index.js           # API client utilities
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd snaproom-react

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 📝 Development Guidelines

### Import Rules
Follow these import conventions to maintain proper layer dependencies:

```javascript
// ✅ Correct - importing from lower layers
import { Button } from '../../../shared/ui';
import { UserCard } from '../../../entities/user';

// ❌ Incorrect - importing from higher layers
import { HomePage } from '../../../pages/home';
```

### Layer Dependencies
- **Pages** can import from: widgets, features, entities, shared
- **Widgets** can import from: features, entities, shared
- **Features** can import from: entities, shared
- **Entities** can import from: shared
- **Shared** should not import from any other layers

### Naming Conventions
- Use PascalCase for components: `LoginForm`, `UserCard`
- Use camelCase for hooks and utilities: `useAuth`, `formatDate`
- Use kebab-case for directories: `auth-widget`, `user-profile`

## 🤝 Contributing

1. Follow the FSD methodology when adding new features
2. Respect layer boundaries and import rules
3. Write tests for new functionality
4. Update documentation when necessary

## 📚 Further Reading

- [Feature-Sliced Design Documentation](https://feature-sliced.design/)
- [FSD Examples and Best Practices](https://github.com/feature-sliced/examples)
- [React Best Practices](https://reactjs.org/docs/thinking-in-react.html)
