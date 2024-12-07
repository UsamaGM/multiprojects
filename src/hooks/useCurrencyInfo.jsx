import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function useCurrencyInfo(currency) {
  // const API_KEY = "3384c641442139332c17fe6cf3b5407c";

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response[currency]));
  }, [currency]);

  return data;
}

useCurrencyInfo.propTypes = {
  currency: PropTypes.string.isRequired,
};

export default useCurrencyInfo;
