export const routes = [
  (app) => {
    app.get('/hono', (c) => {
      return c.text('Hello Hono!');
    });
  }
];