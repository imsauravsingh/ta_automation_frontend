# TA Automation — Frontend Monorepo

A modern, scalable frontend monorepo built with Next.js 14, TypeScript, and pnpm workspaces. Features three applications sharing common UI components, hooks, and utilities.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ta_automation_frontend

# Install dependencies
pnpm install
```

### Development

```bash
# Start all applications
pnpm dev:recruiter    # http://localhost:3000
pnpm dev:admin        # http://localhost:3001
pnpm dev:analytics    # http://localhost:3002

# Or start individually
pnpm --filter @app/recruiter-dashboard dev
pnpm --filter @app/admin-console dev
pnpm --filter @app/analytics-view dev
```

## 📁 Project Structure

```
ta_automation_frontend/
├── apps/                          # Next.js Applications
│   ├── recruiter-dashboard/       # Port 3000 - Main recruiter interface
│   ├── admin-console/             # Port 3001 - Admin management
│   └── analytics-view/            # Port 3002 - Analytics & reporting
├── packages/                      # Shared Packages
│   ├── ui/                        # Reusable UI components (shadcn/ui)
│   ├── hooks/                     # Custom React hooks
│   ├── api-client/                # API client & schemas
│   ├── types/                     # Shared TypeScript types
│   └── utils/                     # Utility functions
├── system-design/                 # Architecture documentation
└── .github/workflows/             # CI/CD configuration
```

## 🛠️ Available Commands

### Development

```bash
# Start development servers
pnpm dev:recruiter    # Recruiter Dashboard (port 3000)
pnpm dev:admin        # Admin Console (port 3001)
pnpm dev:analytics    # Analytics View (port 3002)

# Build all applications
pnpm build

# Start production servers
pnpm start:recruiter  # Start recruiter dashboard
pnpm start:admin      # Start admin console
pnpm start:analytics  # Start analytics view
```

### Code Quality

```bash
# Linting
pnpm lint                    # Lint all packages
pnpm lint:fix               # Fix linting issues

# Formatting
pnpm format                 # Format all code
pnpm format:check           # Check formatting

# Type checking
pnpm type-check             # Type check all packages

# Clean build artifacts
pnpm clean                  # Clean all .next and dist folders
```

### Package Management

```bash
# Add dependency to specific app
pnpm --filter @app/recruiter-dashboard add <package>

# Add dependency to specific package
pnpm --filter @ui/components add <package>

# Add dev dependency to root
pnpm add -D <package>

# Update dependencies
pnpm update
```

## 🎨 UI Components

Built with **shadcn/ui** and **Radix UI** primitives:

### Available Components

- **Button** - Multiple variants (default, outline, secondary, ghost, link)
- **Card** - Complete card system (Card, CardHeader, CardTitle, CardContent, CardFooter)
- **Badge** - Status indicators with color variants
- **Custom Components** - CandidateCard, CandidateList

### Adding New Components

```bash
# Add shadcn/ui component to specific app
cd apps/recruiter-dashboard
npx shadcn-ui@latest add <component-name>

# Or add to shared UI package
cd packages/ui
npx shadcn-ui@latest add <component-name>
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` in each app directory:

```bash
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Third-party Services
SENTRY_DSN=your-sentry-dsn
VOICE_AI_API_KEY=your-voice-ai-key
S3_UPLOAD_BUCKET=your-s3-bucket
```

### TypeScript Configuration

- **Base config**: `tsconfig.base.json` - Shared configuration
- **App configs**: Each app extends base with app-specific settings
- **Package configs**: Each package has its own tsconfig.json

### Tailwind CSS

- Configured with shadcn/ui theme
- CSS variables for consistent theming
- Dark mode support
- Responsive design utilities

## 📦 Shared Packages

### @ui/components

Reusable UI components built with shadcn/ui:

```typescript
import { Button, Card, Badge } from "@ui/components"
import { CandidateList } from "@ui/components"
```

### @hooks/shared

Custom React hooks for state management and API calls:

```typescript
import { useCandidates } from "@hooks/shared"
```

### @api/client

Centralized API client with Axios:

```typescript
import { api } from "@api/client"
```

### @types/shared

Shared TypeScript type definitions:

```typescript
import { Candidate, User } from "@types/shared"
```

### @utils/shared

Utility functions:

```typescript
import { formatDate, formatCurrency } from "@utils/shared"
```

## 🚀 Deployment

### Build for Production

```bash
# Build all applications
pnpm build

# Build specific application
pnpm --filter @app/recruiter-dashboard build
```

### Docker Support

```bash
# Build Docker image for specific app
docker build -f apps/recruiter-dashboard/Dockerfile -t recruiter-dashboard .
```

## 🧪 Testing

```bash
# Run tests (when implemented)
pnpm test

# Run tests for specific package
pnpm --filter @ui/components test
```

## 📊 Performance

Optimized for 8GB RAM laptops:

- **Tree shaking** - Only import what you need
- **Code splitting** - Automatic route-based splitting
- **Image optimization** - Next.js Image component
- **Bundle analysis** - Built-in webpack analyzer

## 🔄 CI/CD

GitHub Actions workflow includes:

- **Linting** - ESLint checks
- **Type checking** - TypeScript validation
- **Testing** - Unit and integration tests
- **Building** - Production builds
- **Deployment** - Automatic deployment on merge

## 🛡️ Security

- **Dependency scanning** - Automated vulnerability checks
- **Environment variables** - Secure configuration management
- **CORS configuration** - Proper API access controls
- **Content Security Policy** - XSS protection

## 📚 Documentation

- **System Design**: See `system-design/` folder
- **API Contracts**: `system-design/api-contracts.md`
- **Architecture Diagrams**: `system-design/architecture.mmd`

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Make changes and test: `pnpm dev:recruiter`
3. Run quality checks: `pnpm lint && pnpm type-check`
4. Commit changes: `git commit -m 'Add amazing feature'`
5. Push to branch: `git push origin feature/amazing-feature`
6. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Kill processes on ports
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
lsof -ti:3002 | xargs kill -9
```

**Module resolution errors:**

```bash
# Clear cache and reinstall
pnpm clean
rm -rf node_modules
pnpm install
```

**TypeScript errors:**

```bash
# Regenerate types
pnpm type-check
```

## 📞 Support

For questions and support:

- Create an issue in the repository
- Check the troubleshooting section above
- Review the system design documentation
