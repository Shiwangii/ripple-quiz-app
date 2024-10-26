import { ResultContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const Result = () => {
  useDocumentTitle("Result | Ripple Quiz");
  return <ResultContent />;
}
export { Result };
