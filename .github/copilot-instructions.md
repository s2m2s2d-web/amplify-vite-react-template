# GitHub Copilot Instructions

This repository is an AWS Amplify React+Vite starter template for building fullstack applications with authentication, API, and database capabilities.

## Project Overview

- **Framework**: React 18 with Vite
- **Language**: TypeScript with strict mode enabled
- **Backend**: AWS Amplify Gen 2 (Authentication with Cognito, GraphQL API with AppSync, Database with DynamoDB)
- **UI Library**: @aws-amplify/ui-react for pre-built authentication components
- **Build Tool**: Vite
- **Linter**: ESLint with TypeScript support

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production (runs TypeScript compiler + Vite build)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Code Style and Conventions

### TypeScript
- Use strict TypeScript mode (enabled in tsconfig.json)
- Prefer `interface` for object types
- Use type inference where possible
- Leverage AWS Amplify type generation (`Schema["ModelName"]["type"]`)

### React
- Use functional components with hooks
- Prefer named exports for components (except default export in main component files)
- Use TypeScript for prop types
- Follow React Hooks rules (enforced by eslint-plugin-react-hooks)

### File Organization
- **src/**: Frontend React application code
  - `App.tsx`: Main application component
  - `main.tsx`: Application entry point
  - Components should be self-contained with co-located styles when needed
- **amplify/**: Backend infrastructure as code
  - `backend.ts`: Backend configuration
  - `auth/`: Authentication resources
  - `data/`: Data models and GraphQL schema
- **public/**: Static assets

### Naming Conventions
- **Files**: Use PascalCase for component files (e.g., `App.tsx`), camelCase for utilities
- **Components**: PascalCase (e.g., `TodoList`)
- **Variables/Functions**: camelCase (e.g., `createTodo`)
- **Constants**: UPPER_SNAKE_CASE for true constants

## AWS Amplify Specific Guidance

### Data Access
- Use `generateClient<Schema>()` from `aws-amplify/data` for type-safe data access
- Models are defined in `amplify/data/resource.ts`
- Use `.observeQuery()` for real-time subscriptions
- Use `.create()`, `.update()`, `.delete()` for mutations

### Authentication
- Configure Amplify in `main.tsx` using `Amplify.configure(outputs)`
- Use `@aws-amplify/ui-react` components like `<Authenticator>` for UI
- The `amplify_outputs.json` file is auto-generated during deployment (not committed to git)

### Backend Development
- Backend is defined using `defineBackend()` in `amplify/backend.ts`
- Auth and data resources are modular (separate resource files)
- Use AWS CDK constructs for infrastructure customization if needed

## Build Considerations

- **TypeScript Compilation**: The build runs `tsc` first, then Vite build
- **Missing amplify_outputs.json**: This file is generated during AWS deployment and is not present in the repository. The app won't build locally without it or a mock file
- **ESLint Warnings**: Currently using TypeScript 5.6.3 which may show warnings with @typescript-eslint (officially supports up to 5.5.x)

## Testing

- No test framework is currently configured in this template
- When adding tests, consider:
  - Vitest (recommended for Vite projects)
  - React Testing Library for component tests
  - MSW for mocking AWS Amplify API calls

## Dependencies

### Key Dependencies
- `react` & `react-dom`: UI framework
- `aws-amplify`: AWS Amplify client library
- `@aws-amplify/ui-react`: Pre-built UI components
- `vite`: Build tool
- `typescript`: Type system

### Key Dev Dependencies
- `@aws-amplify/backend`: Backend infrastructure
- `eslint` & TypeScript ESLint plugins: Linting
- `aws-cdk` & `aws-cdk-lib`: Infrastructure as Code

## Security Notes

- Never commit AWS credentials or secrets
- The `.gitignore` excludes `.amplify`, `amplify_outputs*`, and `amplifyconfiguration*`
- Use environment variables for sensitive configuration
- Review AWS Amplify security best practices for production deployments

## Common Tasks

### Adding a New Data Model
1. Define schema in `amplify/data/resource.ts`
2. Update `amplify/backend.ts` if needed
3. Deploy to AWS to regenerate types
4. Use `generateClient<Schema>()` with updated types in frontend

### Adding a New Component
1. Create component file in `src/` (e.g., `TodoList.tsx`)
2. Follow React + TypeScript conventions
3. Import and use in parent components
4. Add CSS in co-located `.css` file if needed

### Modifying Authentication
1. Update `amplify/auth/resource.ts`
2. Redeploy backend
3. Update UI components as needed

## Resources

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
