const cartCounter = (store) => (next) => (action) => {
  console.log("current state", store.getState());
  console.log("Action", action);

  return next(action);
};

export default cartCounter;
