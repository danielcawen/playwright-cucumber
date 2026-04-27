# playwright-cucumber

playwright + cucumber + js for: real world app (https://github.com/cypress-io/cypress-realworld-app)

## how to install all it needs?

```bash
npm i
```

## how to run it?

### default chromium

```bash
npx cucumber-js
```

### run in firefox

```bash
BROWSER=firefox npx cucumber-js
```

### run in safari

```bash
BROWSER=webkit npx cucumber-js
```

### run in staging and on firefox

```bash
NODE_ENV=staging BROWSER=firefox npx cucumber-js
or
npm run test:staging:firefox
```

### run it in staging + firefox + headed

```bash
NODE_ENV=staging BROWSER=firefox HEADED=true npx cucumber-js
```

### run it in different page sizes

```bash
WIDTH=1920 HEIGHT=1080 npx cucumber-js
```

## how to run prettier?

```bash
npm run format
```
