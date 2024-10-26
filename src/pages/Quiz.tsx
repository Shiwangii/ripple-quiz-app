import { QuizContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const Quiz = () => {
  useDocumentTitle("Quiz | Ripple Quiz");
  return <QuizContent />;
}
export { Quiz };
