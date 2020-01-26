import { colors } from "../constants/theme";

interface LogoProps {
  fill?: string;
  height?: number;
  stroke?: string;
  width?: number;
}

export const Logo = ({
  fill = colors.primary,
  height = 132,
  stroke = colors.white,
  width = 150
}: LogoProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 150 132`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M132 2H18C9.16344 2 2 9.16345 2 18V127L14.4699 114.255C17.4799 111.179 21.6024 109.445 25.9064 109.445H132C140.837 109.445 148 102.281 148 93.4446V18C148 9.16344 140.837 2 132 2Z"
      fill={fill}
      stroke={stroke}
      strokeWidth="4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M40.7546 80.464C37.5744 80.4709 34.9931 83.0639 35 86.2433C35.0063 89.4235 37.5992 92.0055 40.7794 91.9986C43.9596 91.9917 46.5408 89.3994 46.5339 86.2192C46.527 83.039 43.9347 80.4571 40.7546 80.464Z"
      fill={stroke}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M69.9677 59.4233L41.6429 68.5298L41.5967 46.7143L69.9215 37.6244L69.9677 59.4233ZM75.3193 41.645L75.2952 30.1994L36.1989 42.769L36.2693 75.9437L75.3193 63.3293V41.645Z"
      fill={stroke}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M104.292 59.7986L75.3779 69.09L75.3317 47.3036L101.967 38.7208L95.8865 51.625L104.292 59.7986ZM111.582 30L70.0042 43.3145V76.4999L114.338 62.2288L102.293 50.5162L111.582 30V30Z"
      fill={stroke}
    />
  </svg>
);
