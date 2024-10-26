import { ProfileContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const Profile = () => {
  useDocumentTitle("Profile | Ripple Quiz");
  return <ProfileContent />;
}
export { Profile };
