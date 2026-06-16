## File-Based Routing

### Overview
Next.js uses a **file-based routing system** where the file structure of the `app/` directory automatically creates routes. Each folder represents a route segment, and special files define page content and layouts.

### Key Files

#### `page.tsx`
- Defines the **UI content** for a specific route
- Required file to make a route segment publicly accessible
- Example: `app/about/page.tsx` creates a route at `/about`

#### `layout.tsx`
- Defines **shared UI** that persists across route segments
- Wraps child pages with common elements (navbar, sidebar, etc.)
- Nested layouts compose with parent layouts
- Example: `app/layout.tsx` is the root layout for the entire app

### Routing Approaches

#### App Router (Recommended)
- Modern Next.js routing system using the `app/` directory
- Supports server components by default
- Better performance and built-in optimization
- Used in this project

#### Pages Router (Legacy)
- Earlier Next.js routing using the `pages/` directory
- Client-side by default
- Still supported for backward compatibility

### Path Resolution

#### Relative Paths
- Import relative to current file: `import Navbar from '../components/Navbar'`
- Prone to errors with deep nesting (too many `../`)

#### Absolute Paths
- Import from project root: `import Navbar from '@/components/Navbar'`
- Cleaner, more maintainable
- Requires `jsconfig.json` or `tsconfig.json` configuration (already set up)