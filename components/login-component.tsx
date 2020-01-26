import { GitHubButton } from "./github-button";
import { Logo } from "./logo";
import { spacing } from "../constants/theme";

export const LoginComponent = () => (
  <>
    <Logo width={200} height={200} />
    <div className="button">
      <GitHubButton />
    </div>
    <style jsx>{`
      .button {
        margin-top: ${spacing.xxxLarge};
      }
    `}</style>
  </>
);
