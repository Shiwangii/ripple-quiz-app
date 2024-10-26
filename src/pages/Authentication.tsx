import { AuthContent } from "components";
import { useDocumentTitle } from "custom-hooks";
const Authentication = () => {
  useDocumentTitle("Auth | Ripple Quiz");
  return <AuthContent />;
}

export { Authentication };
