# Issue App

A Vue.js application built with the Quasar Framework that demonstrates modern Vue.js development practices. The project includes:

- Vue 3 with TypeScript support
- Quasar Framework for UI components and application structure
- Pinia for state management
- Vue Query for data fetching/caching
- Vue Router for navigation
- ESLint and Prettier for code quality

## Install the dependencies

```bash
pnpm install
# or
npm install
```

### Configure .ENV variables

Copy `.env.template` and rename it as `.env.local`

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
or
pnpm run dev
```

### Lint the files

```bash
pnpm run lint
# or
npm run lint
```

### Format the files

```bash
pnpm run format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
