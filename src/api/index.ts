import { Api } from "./api";

export const api = new Api({
  baseUrl: "https://api.realworld.io/api",
  baseApiParams: {
    format: "json",
  },
});
