# Bizman-App
business and expense management application with to-do list and habbits tracker

## Security

This application takes security seriously and has addressed the following:

- **Removal of Hardcoded Credentials (CWE-798):** Hardcoded credentials have been removed from the client-side source code.
- **Environment-Based Configuration:** The application now uses environment variables to manage test credentials during development.
- **Encapsulated Auth Logic:** Authentication logic is encapsulated in a dedicated utility, providing a single point for future integration with a real backend.

**IMPORTANT SECURITY NOTE:**
In the current client-side implementation, environment variables prefixed with `VITE_` are bundled into the JavaScript delivery. While this removes them from the source code repository, they remain discoverable in the browser. For a production-ready system, a backend API must be used to perform credential validation, and this application's `validateCredentials` utility should be updated to call that API.

## Setup Instructions

### Environment Variables

1. Copy the template environment file:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and set your desired `VITE_USER_EMAIL` and `VITE_USER_PASSWORD` for local testing.

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
