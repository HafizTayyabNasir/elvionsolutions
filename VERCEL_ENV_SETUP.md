# Vercel Environment Variables Setup

## Required Environment Variables

Add these environment variables in your Vercel project settings:

1. **DATABASE_URL** - Your Neon PostgreSQL connection string
   - Format: `postgresql://user:password@host:port/database?sslmode=require`

2. **JWT_SECRET** - Secret key for JWT token signing
   - Generate a strong random string (e.g., using `openssl rand -base64 32`)

3. **ADMIN_EMAIL** - Admin login email
   - Example: `admin@elvionsolutions.com`

4. **ADMIN_PASSWORD** - Admin login password
   - Use a strong password (will be hashed and stored in database)

## How to Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable:
   - **Key**: Variable name (e.g., `ADMIN_EMAIL`)
   - **Value**: Variable value (e.g., `admin@elvionsolutions.com`)
   - **Environment**: Select all (Production, Preview, Development)
4. Click "Save"
5. Redeploy your application for changes to take effect

## Database Migration

### Step 1: Create Migration Locally (One-time)

First, run the migration locally to create the migration files:

```bash
npx prisma migrate dev --name add_internship_application
```

This will:
- Create migration files in `prisma/migrations/`
- Apply the migration to your local database
- Generate Prisma Client

### Step 2: Update Vercel Build Command

In your Vercel project settings, update the **Build Command** to:

```
npx prisma migrate deploy && next build
```

**Important Notes:**
- Use `prisma migrate deploy` (not `migrate dev`) for production builds
- `migrate deploy` is non-interactive and safe for CI/CD
- `migrate dev` requires interactive prompts and won't work on Vercel
- The migration files created locally will be applied during deployment

## Features Implemented

✅ User profile picture in navbar (shows email initial)
✅ Admin login via environment variables
✅ Appointment page shows only admin-created slots
✅ Admin dashboard shows:
   - Contact form messages
   - Home page comments
   - All registered users
   - Internship applications
   - Appointment slots management

## Admin Dashboard Access

1. Login with credentials set in `ADMIN_EMAIL` and `ADMIN_PASSWORD`
2. Admin user will be automatically created/updated in database
3. Access admin dashboard at `/admin/dashboard`

