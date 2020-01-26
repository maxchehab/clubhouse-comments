import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AppPropsType } from "next/dist/next-server/lib/utils";

export default function({ Component, pageProps }: AppPropsType) {
  return <Component {...pageProps} />;
}
