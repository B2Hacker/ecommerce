import Document, {Html, Head, Main, NextScript} from 'next/document'
import  Script  from 'next/script'
class MyDocument extends Document{
    render(){
        return(
            <Html lang="en">
                <Head>
                    <meta name="description" content="Brandon Cortes' website made with NextJS"/>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
                    <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></Script>
                    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js"></Script>
                    <Script src="https://kit.fontawesome.com/a076d05399.js"></Script>
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