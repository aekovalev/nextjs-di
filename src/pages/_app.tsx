import { enableStaticRendering } from "mobx-react-lite";
import type { AppProps } from 'next/app'

enableStaticRendering(typeof window === "undefined")

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
