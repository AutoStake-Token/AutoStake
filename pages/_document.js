import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>

                    <link
                        rel="preload"
                        href="/assets/fonts/SourceCode/SourceCodePro-Regular.ttf"
                        as="font"
                        type="font/truetype"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/SourceCode/SourceCodePro-SemiBold.ttf"
                        as="font"
                        type="font/truetype"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/SourceCode/SourceCodePro-Bold.ttf"
                        as="font"
                        type="font/truetype"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/allerta.ttf"
                        as="font"
                        type="font/truetype"
                        crossOrigin=""
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
