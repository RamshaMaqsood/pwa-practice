
// function swDev() {
//     let swURL = `${process.env.PUBLIC_URL}/sw.js`
//     navigator.serviceWorker.register(swURL).then((response)=>{
//         console.warn("response", response)
//     })
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default swDev


export default function swDev() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.warn('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }
}

