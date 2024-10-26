import { HomeContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const Home = () => {
  useDocumentTitle("Home | Ripple Quiz");
  return <HomeContent />;
}
export { Home };
