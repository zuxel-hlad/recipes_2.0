import { createParser } from "nuqs/server";

export const pageParser = createParser({
  parse: (value) => {
    const page = parseInt(value, 10);
    return Number.isNaN(page) ? null : Math.max(1, page);
  },
  serialize: String,
}).withDefault(1);
