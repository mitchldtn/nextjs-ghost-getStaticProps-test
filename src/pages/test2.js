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
  console.log('test props')
  let testProps = [{a:'asd'}, {a:'dsa'}]
  return {
      props: {testProps}
  }
}

function Test(props) {
  console.log('TestProps:', props)
  return (
      <div className="flex items-center justify-center w-full mx-auto">
        <span>test2.js</span>
      </div>
  );
}

export default Test;
