import { colors } from "../constants/theme";
import { LoginComponent } from "../components/login-component";

interface LandingPageProps {
  children?: JSX.Element[] | JSX.Element | string;
}

export function LandingPage({ children }: LandingPageProps) {
  return (
    <>
      <section className="landing-page">
        <section className="login">
          <LoginComponent />
        </section>
        <section className="content">{children}</section>
      </section>

      <style jsx>{`
        .landing-page {
          display: flex;
          flex-direction: row;
          height: 100vh;
          width: 100vw;
        }
        .login {
          background-color: ${colors.primary};
          display: flex;
          flex-direction: column;
          width: 38vw;
          align-items: center;
          justify-content: center;
        }

        .content {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 62vw;
        }
      `}</style>
    </>
  );
}
