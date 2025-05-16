// import React, { useEffect, useState } from "react";


// function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("https://sridiya.com/api/site/action", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             action: "categoryFilter",
//             lang_id: "1",
//             category: 14,
//             priceFilter: 0,
//             userId: 8147,
//             ProId: [],
//             stock: 1,
//           }),
//         });

//         const data = await response.json();
//         if (data && data.result) {
//           setProducts(data.result);
//         } else {
//           console.error("No valid data received:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="container my-5">
//       <h2 className="text-center text-primary mb-4">Latest Products</h2>
//       <div className="row">
//         {products.length > 0 ? (
//           products.map((product, index) => (
//             <div key={index} className="col-6 col-md-3 mb-4">
//               <div className="card h-100 shadow-sm">
//                 <img
//                   src={product.image || "https://via.placeholder.com/150"}
//                   alt={product.name || `Product ${index + 1}`}
//                   className="card-img-top"
//                 />
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No products available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;
