## TypeScript Monorepo Boilerplate (TypeScript & React & ESLint & Jest & Sass & Parcel with Lerna)

This repo consists of 4 main packages.

### Contracts

Shared, static types and interfaces.

### React-UI

Components sets. (button, alert, select etc.)

### Utils

Utils and helpers methods.

### WWW

It combines these packages, types, styles and components to work with all dependencies like a single - mono repo.

## Development

    # Install npm deps.
    npm install

    # Install Lerna globally
    npm install -g lerna

    # To manage deps.
    lerna bootstrap

    # To develop entire packages
    npm run watch

    # To lint (TS - ES Lint)
    npm run lint

## TODO

- Storybook
- Documentation

### Npm monorepo starter blog page

https://blog.npmjs.org/post/186494959890/monorepos-and-npm

### Npm scoped packages

https://docs.npmjs.com/about-scopes
