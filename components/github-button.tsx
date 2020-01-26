import { colors, radius, spacing, border } from "../constants/theme";
import { GitHubLogo } from "./github-logo";

export const GitHubButton = () => (
  <>
    <button>
      <div className={"logo"}>
        <GitHubLogo />
      </div>
      <div className={"content"}>Login with GitHub</div>
    </button>
    <style jsx>{`
      .content {
        align-items: center;
        color: ${colors.white};
        font-family: Rubik;
        font-size: ${spacing.large};
        font-style: normal;
        font-weight: 500;
        margin-left: ${spacing.medium};
        text-align: center;
      }

      button {
        align-items: center;
        background: ${colors.primary};
        border-radius: ${radius.large};
        border: ${border.medium(colors.white)};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: ${spacing.medium} ${spacing.large};
      }
    `}</style>
  </>
);
