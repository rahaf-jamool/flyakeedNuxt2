export default ({ app }, inject) => {
  inject("limitText", (text, limit) => {
    if (text == "" || !text) return "";
    return text?.length > limit ? text?.slice(0, limit) + "..." : text;
  });
};
