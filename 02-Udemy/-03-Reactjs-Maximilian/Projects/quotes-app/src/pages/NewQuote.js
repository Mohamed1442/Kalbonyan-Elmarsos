import QuoteForm from "../components/quotes/QuoteForm";

import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);
  console.log("newquote");
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status]);

  const addHandler = (addedQuote) => {
    sendRequest(addedQuote);
    console.log(1);
  };

  return <QuoteForm isLoading={status === "pending"} onAddQuote={addHandler} />;
};

export default NewQuote;
