import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
    return <main>
        <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <Script
            src="https://sdk.minepi.com/pi-sdk.js"
            strategy="beforeInteractive"
            onLoad={() => console.log("Pi SDK loaded")}
        />
        <h1>First Post</h1>
        <Link href="/">Return home</Link>
        <Image
            src="/images/toothless-dance.gif"
            height={300}
            width={300}
            alt="Toothless dancing"
            priority
            />
        </Layout>
        </main>
}
