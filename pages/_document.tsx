import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document";

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <link
          href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
          rel="stylesheet"
        />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </Html>
    );
  }
}
