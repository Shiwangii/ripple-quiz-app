import { RulesContent } from "components";
import { useDocumentTitle } from "custom-hooks";
const Rules = () => {
  useDocumentTitle("Rules | Ripple Quiz");
  return <RulesContent />;
}
export { Rules };
