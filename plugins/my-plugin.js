export default (context, inject) => {
  inject("name", (name) => `olá ${name}`);
};
