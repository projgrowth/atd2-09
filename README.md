
# All Things Done

**Your Home's Quiet Command Center**

## About

All Things Done (ATD) is a private, collaborative dashboard for homeowners and their trusted service providers. We help you manage your home with clarity, not chaos.

## Features

- Private dashboard for managing your home maintenance
- Collaborate with your own trusted service providers
- No marketplace interference or third-party complications
- Clean, organized interface for all your home management needs
- Mobile-friendly PocketOffice for service providers

## Getting Started

### Prerequisites

- Node.js (recommended: use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd all-things-done
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Technology Stack

- **Frontend**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Backend**: Supabase integration

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/        # React components
├── pages/            # Page components
├── hooks/            # Custom hooks
├── lib/              # Utility functions
├── integrations/     # Third-party integrations
└── main.tsx         # Application entry point
```

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## Contributing

This is a private project for All Things Done. For questions or support, please contact the development team.

## License

© 2024 All Things Done. All rights reserved.
