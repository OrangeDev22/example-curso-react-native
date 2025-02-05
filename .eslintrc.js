// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  ignorePatterns: ["/dist/*"],
  Plugin: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
