# Angular Standalone Tweet Application

This is a standalone Angular application that implements a Twitter-like functionality with features for creating, reading, updating, and deleting tweets. The application uses session storage for data persistence and is built with Angular 19.

## Features

- Create new tweets with a 280-character limit
- View list of all tweets with timestamps
- Edit existing tweets
- Delete tweets
- Responsive design with Bootstrap styling
- Session storage for data persistence

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version)
- npm (Node Package Manager)
- Git

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd project
```

### Install Dependencies

```bash
npm install
```

### Development Server

Run the development server:

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
project/
  ├── src/
  │   ├── app/
  │   │   ├── tweet/
  │   │   │   ├── tweet.component.ts
  │   │   │   ├── tweet.component.html
  │   │   │   └── tweet.component.css
  │   ├── index.html
  │   ├── main.ts
  │   └── styles.css
  ├── package.json
  └── angular.json
```

## Git Commands Reference

### Initial Setup
```bash
# Clone the repository
git clone <repository-url>

# Create a new branch
git checkout -b feature/your-feature-name
```

### Daily Development
```bash
# Get latest changes
git pull origin main

# Check status of your changes
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push changes
git push origin feature/your-feature-name
```

### Creating Pull Requests
1. Push your changes to your feature branch
2. Go to the repository on GitHub
3. Click on "Pull Requests"
4. Click "New Pull Request"
5. Select your feature branch
6. Add description and create the pull request

## Additional Resources

For more information on using Angular CLI, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
