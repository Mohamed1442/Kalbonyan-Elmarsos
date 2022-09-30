import { Fragment, useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const DUMMY_QUOTES = [
  { id: "q1", author: "mohamed", text: "This is my mohamed's quote" },
  { id: "q2", author: "ahmed", text: "This is my ahmed's quote" },
];

const AllQuotes = () => {
  const { sendRequest, status, data } = useHttp(getAllQuotes, true);
  console.log(data);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        {" "}
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && (!data || data.length === 0)) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <QuoteList quotes={data} />
    </Fragment>
  );
};

export default AllQuotes;
