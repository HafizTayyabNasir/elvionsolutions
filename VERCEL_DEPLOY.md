# Deployment Guide for Vercel

This project is a Next.js Full Stack application using App Router, Prisma, and Tailwind CSS.

## Prerequisites

1.  **GitHub Account**: Push this code to a GitHub repository.
2.  **Vercel Account**: Link your GitHub account to Vercel.
3.  **PostgreSQL Database**: Vercel does not support SQLite (the default used for development). You need a PostgreSQL database (e.g., Vercel Postgres, Supabase, Neon, or Railway).

## Steps to Deploy

1.  **Prepare the Database**:
    *   Create a new Project on Vercel.
    *   Add a Storage (Postgres) to your project or use an external provider.
    *   Get the connection string (e.g., `postgres://user:password@host:port/database`).

2.  **Update Prisma Schema**:
    *   Open `prisma/schema.prisma`.
    *   Change the provider from `"sqlite"` to `"postgresql"`.
    *   Code:
        ```prisma
        datasource db {
          provider = "postgresql"
          url      = env("DATABASE_URL")
        }
        ```

3.  **Environment Variables**:
    *   In Vercel Project Settings > Environment Variables, add:
        *   `DATABASE_URL`: Your PostgreSQL connection string.
        *   `JWT_SECRET`: A long random string for security.

4.  **Build & Deploy**:
    *   Push your code to GitHub.
    *   Vercel will automatically detect the Next.js project.
    *   It will run `npm install` and `npm run build`.
    *   **Migration**: You might need to run migrations against the production DB.
        *   You can add a "Build Command" override in Vercel: `npx prisma migrate deploy && next build`
        *   OR run it manually from your local machine if you have access to the production DB string: `DATABASE_URL="your_prod_db_url" npx prisma migrate deploy`

## Admin User

After deployment, you need to create an admin user.
Since you cannot run the seed script easily in Vercel's build process without DB access, you can:
1.  Register a new user via the `/signup` page on your deployed site.
2.  Connect to your production database (using a tool like TablePlus or pgAdmin).
3.  Find the user in the `User` table and set `isAdmin` to `true`.
4.  Log out and log back in to access the Admin Dashboard.

## Local Development

*   Run `npm run dev` to start the server.
*   The local database is `dev.db` (SQLite).
*   Admin credentials (seeded locally):
    *   Email: `admin@elvion.com`
    *   Password: `adminpassword`
