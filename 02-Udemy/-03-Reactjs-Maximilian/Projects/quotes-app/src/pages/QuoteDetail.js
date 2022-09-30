import { useEffect } from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const DUMMY_QUOTES = [
  { id: "q1", author: "mohamed", text: "This is my mohamed's quote" },
  { id: "q2", author: "ahmed", text: "This is my ahmed's quote" },
];

const QuoteDetail = () => {
  const { sendRequest, data } = useHttp(getAllQuotes);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const params = useParams();
  const quote = data?.find((quote) => quote.id === params.quoteId);

  if (!quote && data === null) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (!quote) {
    return <p>Quote not found</p>;
  }

  return (
    <section>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <div className="centered">
        <Route path={`/quotes/${params.quoteId}`} exact>
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Add Comment
          </Link>
        </Route>
      </div>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
