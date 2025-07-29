# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React application built using Feature-Sliced Design (FSD) methodology. The project emphasizes clean architecture, separation of concerns, and maintainable code structure through hierarchical layer organization.

## Development Commands

- `npm start` - Start development server on port 3000
- `npm run build` - Create production build
- `npm test` - Run test suite
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically

## TypeScript Configuration

This project uses TypeScript with strict type checking enabled. Key TypeScript features:
- Strict mode enabled for better type safety
- All components use React.FC typing
- Proper interface definitions for props and API responses
- Generic types for API client methods

## Architecture: Feature-Sliced Design (FSD)

The codebase follows FSD methodology with strict layer hierarchy:

### Layer Structure (from top to bottom):
- **app/** - Application-level setup, global providers, routing
- **pages/** - Route-level components and page composition  
- **widgets/** - Complex reusable UI blocks combining features
- **features/** - Specific user functionality (auth, forms, etc.)
- **entities/** - Business domain models (user, product, etc.)
- **shared/** - Generic reusable code (UI kit, utilities, API client)

### Import Rules (CRITICAL):
- Higher layers can import from lower layers only
- Never import from same or higher layers
- Example: features/ can import from entities/ and shared/, but not from widgets/ or pages/

### Segments within each slice:
- **ui/** - React components and styles
- **model/** - Business logic, hooks, state management
- **api/** - API calls and external service integration
- **lib/** - Internal utilities and helpers
- **config/** - Slice-specific configuration

## Key Files and Patterns

- `src/app/index.tsx` - Main App component with routing setup
- `src/pages/index.tsx` - Central routing configuration
- `src/shared/api/index.tsx` - API client with auth token handling
- Each slice exports its public API through `index.tsx`

## Development Guidelines

1. **Always follow FSD layer hierarchy** - respect import dependencies
2. **Use existing shared components** before creating new ones
3. **Keep features isolated** - avoid cross-feature dependencies
4. **Export through index.tsx** - maintain clean public APIs
5. **Follow naming conventions**: PascalCase for components, camelCase for hooks/utilities
6. **TypeScript best practices**:
   - Define interfaces for all props and API responses
   - Use React.FC for functional components
   - Leverage generic types for reusable functions
   - Enable strict type checking

## Authentication Example Structure

The auth feature demonstrates proper FSD implementation:
- `features/auth/` - Login logic and forms
- `entities/user/` - User data and display components  
- `widgets/auth-widget/` - Composite auth UI combining feature + entity
- `shared/ui/` - Generic Button and Input components