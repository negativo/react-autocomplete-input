import { useState } from "react";

const searchMatch = function (str: string, pattern: string) {
  return new RegExp(
    "^" +
      str.replace(/./g, function (x: string) {
        // eslint-disable-next-line
        return /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/.test(x)
          ? "\\" + x + "?"
          : x + "?";
      }) +
      "$"
  ).test(pattern);
};

function useFuzzyMatching(terms: Array<string>) {
  const [searchTerm, setSearchTerm] = useState("");

  const results =
    searchTerm !== ""
      ? terms.filter((term: string) =>
          searchMatch(term.toLowerCase(), searchTerm.toLowerCase())
        )
      : [];
  const reset = () => setSearchTerm("");

  return { results, search: setSearchTerm, searchTerm, reset };
}

export default useFuzzyMatching;
