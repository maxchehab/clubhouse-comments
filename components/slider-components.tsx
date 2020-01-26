import { border, radius, shadow, colors, spacing } from "../constants/theme";

interface SliderCardProps {
  children?: any;
  title: string;
}
export const SliderCard = ({ children, title }: SliderCardProps) => (
  <>
    <div className="container">
      <div className="card">
        <p>{title}</p>
        {children}
      </div>
    </div>
    <style jsx>{`
      p {
        font-family: Rubik;
        font-weight: 600;
        font-size: ${spacing.xLarge};
        align-items: center;
        text-align: center;
        color: ${colors.primary};
      }

      .card {
        padding: ${spacing.xLarge};
        width: 35vw;
        height: 70vh;
        max-width: 600px;
        border: ${border.small(colors.primary)};
        box-shadow: ${shadow.medium};
        border-radius: ${radius.small};
        margin: ${spacing.small};
      }

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </>
);

export const Dot = () => (
  <>
    <div className="custom-slick-dot" />
    <style jsx>{`
      div {
        border: ${border.xSmall(colors.primary)};
        border-radius: ${radius.circle};
        width: 14px;
        height: 14px;
        transition: background 100ms;
      }
    `}</style>

    <style jsx global>{`
      .slick-active .custom-slick-dot {
        background: ${colors.primary};
      }
    `}</style>
  </>
);
