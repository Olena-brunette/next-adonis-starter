import '../styles/app.scss';
import { AuthProvider } from '../context/auth';
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>

    )
}


export default MyApp