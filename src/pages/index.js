import Head from 'next/head'
import { getPosts } from "../lib/posts";

// export async function getStaticProps(context) {
// let res;
//   await fetch("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     }).then(
//       async(result) => {
//         res = await result.json()
//         console.log(result)
//
//       },
//       (error) => {
//         console.log(error);
//         setPressed("no");
//         alert("Error sending message.");
//       }
//     );
//     if (res != undefined) {
//       return {
//         props: {res}
//       }
//     } else {
//       return {
//         props: {yep: 'yep'}
//       }
//     }
// }


export async function getStaticProps(context) {
  const posts = await getPosts(3, 1);
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts },
  };
}

export default function Home(props) {
  console.log('HomeProps:',props)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


    </div>
  )
}
