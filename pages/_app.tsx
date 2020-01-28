import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Utils from "next/dist/next-server/lib/utils";

function App({ Component, pageProps }: Utils.AppPropsType) {
  return <Component {...pageProps} />;
}

export default App;
