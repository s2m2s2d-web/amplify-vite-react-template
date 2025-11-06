# GitHub Copilot Instructions for AWS Amplify React+Vite Template

## Project Overview

This is a starter template for building applications using React, Vite, TypeScript, and AWS Amplify. The template provides pre-configured AWS services including Cognito for authentication, AppSync for GraphQL APIs, and DynamoDB for real-time database capabilities.

## Technology Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.x
- **Language**: TypeScript 5.x
- **UI Library**: @aws-amplify/ui-react 6.x
- **Backend**: AWS Amplify 6.x with AWS CDK 2.x
- **Styling**: CSS
- **Linter**: ESLint with TypeScript support

## Project Structure

```
├── amplify/              # AWS Amplify backend configuration
│   ├── auth/            # Authentication resources
│   ├── data/            # Data models and GraphQL schema
│   └── backend.ts       # Backend resource definitions
├── src/                 # React application source code
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── assets/          # Static assets
├── public/              # Public static files
└── dist/                # Build output directory (generated)
```

## Development Workflow

### Installing Dependencies

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

This starts the Vite development server with hot module replacement.

### Building the Project

```bash
npm run build
```

This command:
1. Runs TypeScript compiler (`tsc`) to check types
2. Builds the application using Vite

**Note**: The build may fail if `amplify_outputs.json` is not present. This file is generated when deploying the Amplify backend and contains the configuration for AWS services. For local development without AWS deployment, you may need to mock or skip the Amplify configuration.

### Linting

```bash
npm run lint
```

Runs ESLint on all TypeScript and TSX files with the following rules:
- Reports unused disable directives
- Maximum warnings set to 0 (no warnings allowed)

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.

## Code Style and Conventions

### TypeScript

- Use strict TypeScript configurations
- Prefer type inference where possible, but add explicit types for function parameters and return values
- Use interfaces for object shapes and types for unions/intersections
- Avoid using `any` type

### React

- Use functional components with hooks
- Follow React best practices for component composition
- Use React.StrictMode in development
- Prefer named exports for components

### File Naming

- Component files: PascalCase (e.g., `App.tsx`, `UserProfile.tsx`)
- Utility files: camelCase (e.g., `helpers.ts`, `apiClient.ts`)
- CSS files: Same name as component (e.g., `App.css` for `App.tsx`)

### Imports

- Group imports in the following order:
  1. React and React-related libraries
  2. Third-party libraries
  3. AWS Amplify libraries
  4. Local components and utilities
  5. CSS files
- Use absolute imports from `src/` directory when configured

## AWS Amplify Specific Guidelines

### Configuration

- The `amplify_outputs.json` file is auto-generated and should not be manually edited
- Add `amplify_outputs.json` to `.gitignore` to avoid committing sensitive configuration
- Backend resources are defined in the `amplify/` directory using AWS CDK

### Authentication

- Use `@aws-amplify/ui-react` components for authentication UI
- Follow AWS Amplify authentication best practices
- Handle authentication state properly in components

### Data/API

- GraphQL schemas are defined in `amplify/data/`
- Use Amplify DataStore or API categories for data operations
- Follow AWS AppSync best practices for GraphQL operations

### Backend Development

- Backend resources are defined in `amplify/backend.ts`
- Use AWS CDK constructs for infrastructure
- Test backend changes locally when possible before deployment

## Testing

Currently, this template does not include a testing framework. When adding tests:

- Consider using Vitest (Vite-native test framework) or Jest
- Follow React Testing Library best practices
- Add test scripts to `package.json`
- Aim for meaningful test coverage of business logic and critical user flows

## Common Issues and Solutions

### Build Fails with Missing `amplify_outputs.json`

This is expected before deploying the Amplify backend. To resolve:
1. Deploy the backend using `npx ampx sandbox` or deploy to AWS
2. For local development, you can conditionally configure Amplify only when the file exists

### TypeScript Version Warning

The template uses TypeScript 5.4.5, but the system may have a newer version installed. This is generally safe to ignore, but for consistency, you may want to update `@typescript-eslint` packages to support the latest TypeScript versions.

### ESLint Deprecation Warnings

Some ESLint packages show deprecation warnings. These are dependency-level warnings and don't affect functionality. Consider updating ESLint to v9+ when the ecosystem fully supports it.

## Deployment

Refer to the [AWS Amplify deployment documentation](https://docs.amplify.aws/react/start/quickstart/#deploy-a-fullstack-app-to-aws) for detailed deployment instructions.

## Security Considerations

- Never commit AWS credentials or sensitive configuration to the repository
- Keep dependencies up to date to address security vulnerabilities
- Run `npm audit` regularly and address vulnerabilities
- Follow AWS security best practices for Amplify applications
- For security issues, follow the reporting process in CONTRIBUTING.md

## Contributing

- Review CONTRIBUTING.md before making contributions
- Ensure all tests pass and linting succeeds before submitting PRs
- Follow the existing code style and conventions
- Keep changes focused and well-documented
- Update this instructions file if you make significant changes to the project structure or workflow
