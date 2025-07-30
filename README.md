# Snaproom React - Feature-Sliced Design Architecture with TypeScript

A React application built using **TypeScript** and the Feature-Sliced Design (FSD) methodology for better code organization, maintainability, scalability, and type safety.

## 🌐 Language Support

- [한국어 문서](README-ko.md)
- [日本語ドキュメント](README-ja.md)

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
│   └── index.tsx          # App entry point
├── pages/                 # Pages layer
│   ├── home/              # Home page slice
│   │   └── index.tsx      # Home page component
│   ├── login/             # Login page slice
│   │   └── index.tsx      # Login page component
│   └── index.tsx          # Routing configuration
├── widgets/               # Widgets layer
│   └── auth-widget/       # Authentication widget
│       ├── ui/            # Widget components
│       ├── model/         # Widget logic
│       └── index.tsx      # Widget entry point
├── features/              # Features layer
│   └── auth/              # Authentication feature slice
│       ├── ui/            # Feature components (.tsx)
│       ├── model/         # Feature business logic (.tsx)
│       ├── api/           # Feature API calls (.tsx)
│       ├── lib/           # Feature utilities (.ts)
│       └── index.tsx      # Public API
├── entities/              # Entities layer
│   └── user/              # User entity slice
│       ├── ui/            # Entity components (.tsx)
│       ├── model/         # Entity business logic (.ts)
│       ├── api/           # Entity API calls (.tsx)
│       └── index.tsx      # Public API
└── shared/                # Shared layer
    ├── ui/                # Reusable UI components (.tsx)
    ├── api/               # Common API utilities (.tsx)
    ├── lib/               # Shared utilities (.ts)
    └── config/            # Shared configuration (.ts)
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
│   └── login-form.tsx     # Login form component
├── model/
│   └── use-auth.tsx       # Authentication logic hook
├── api/
│   └── auth-api.tsx       # Authentication API calls
└── index.tsx              # Public API
```

### Entity Layer (`src/entities/user/`)
```
user/
├── ui/
│   └── user-card.tsx      # User display component
├── api/
│   └── user-api.tsx       # User data API calls
└── index.tsx              # Public API
```

### Widget Layer (`src/widgets/auth-widget/`)
```
auth-widget/
├── ui/
│   └── auth-widget.tsx    # Composite auth component
└── index.tsx              # Public API
```

### Shared Layer (`src/shared/`)
```
shared/
├── ui/
│   ├── button.tsx         # Generic button component
│   └── input.tsx          # Generic input component
└── api/
    └── index.tsx          # API client utilities
```

## 🎯 TypeScript Configuration

This project is fully configured with TypeScript to provide:
- **Type Safety**: Compile-time error checking and better IDE support
- **Strict Mode**: Enhanced type checking for better code quality
- **Interface Definitions**: Clear contracts for component props and API responses
- **Generic Types**: Reusable type-safe utilities

### Key TypeScript Features
- All React components use `React.FC` typing
- Comprehensive interfaces for props, state, and API responses
- Generic API client methods for type-safe HTTP requests
- Strict TypeScript configuration in `tsconfig.json`

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- TypeScript knowledge recommended

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd snaproom-react

# Install dependencies (includes TypeScript)
npm install

# Start development server with TypeScript compilation
npm start
```

### Available Scripts
- `npm start` - Start development server with TypeScript hot reload
- `npm run build` - Build for production with TypeScript compilation
- `npm test` - Run tests with TypeScript support
- `npm run lint` - Run ESLint with TypeScript rules
- `npm run lint:fix` - Fix ESLint issues automatically

## 📝 Development Guidelines

### Import Rules
Follow these import conventions to maintain proper layer dependencies:

```typescript
// ✅ Correct - importing from lower layers
import { Button } from '../../../shared/ui';
import { UserCard, User } from '../../../entities/user';

// ❌ Incorrect - importing from higher layers
import { HomePage } from '../../../pages/home';
```

### TypeScript Development Guidelines

#### Component Type Definitions
```typescript
// Define interfaces for component props
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

// Use React.FC for functional components
export const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', disabled = false }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
```

#### API and Hook Types
```typescript
// Define interfaces for API responses
interface LoginResponse {
  user: User;
  token: string;
}

// Type custom hooks with return type
interface AuthState {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<User>;
  logout: () => void;
}

export const useAuth = (): AuthState => {
  // Hook implementation
};
```

### Layer Dependencies
- **Pages** can import from: widgets, features, entities, shared
- **Widgets** can import from: features, entities, shared
- **Features** can import from: entities, shared
- **Entities** can import from: shared
- **Shared** should not import from any other layers

### Naming Conventions
- Use PascalCase for components and interfaces: `LoginForm`, `UserCard`, `ButtonProps`
- Use camelCase for hooks and utilities: `useAuth`, `formatDate`
- Use kebab-case for directories: `auth-widget`, `user-profile`
- Use `.tsx` extension for files containing JSX
- Use `.ts` extension for utility files without JSX

## 🤝 Contributing

1. Follow the FSD methodology when adding new features
2. Respect layer boundaries and import rules
3. Define TypeScript interfaces for all props and API responses
4. Use strict type checking and avoid `any` types
5. Write tests for new functionality
6. Update documentation when necessary

## 📚 Further Reading

- [Feature-Sliced Design Documentation](https://feature-sliced.design/)
- [FSD Examples and Best Practices](https://github.com/feature-sliced/examples)
- [React Best Practices](https://reactjs.org/docs/thinking-in-react.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Best Practices](https://react-typescript-cheatsheet.netlify.app/)
