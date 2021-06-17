const apiMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log('customMiddleware', action);
  console.log('store', store);
  console.log('next', next);

  next({ name: 'mike', type: 'new' });
};

export default apiMiddleware;
