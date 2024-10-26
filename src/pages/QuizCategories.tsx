import { QuizCategoriesContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const QuizCategories = () => {
  useDocumentTitle("Quiz Category | Ripple Quiz");
  return <QuizCategoriesContent />;
}
export { QuizCategories };
