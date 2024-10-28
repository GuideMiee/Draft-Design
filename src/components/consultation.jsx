// import React from "react";

// const Consultation = () => {
//   return (
//     <div
//       className="max-h-1/2 bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
//       }}
//     >
//        <div className="absolute inset-0 bg-black opacity-60"></div>
//       <div className="text-neutral-content items-center justify-between">
//         <div className=" w-full flex justify-center items-center text-left py-10 px-40">
//           <div>
//             <h1 className="mb-5 text-4xl font-bold">Free consultation with exceptional quality</h1>
//             <p className="mb-5">Just one call away: +84 1102 2703</p>
//           </div>
//           <div className="ml-auto">
//             <button className="px-4 py-2 border border-white  text-white rounded hover:bg-white hover:text-black transition">
//               Get your consultation
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Consultation;


import React from "react";

const Consultation = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      {/* Layer for background opacity */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content section */}
      <div className="relative text-neutral-content flex justify-between items-center px-60 h-full">
        <div>
          <h1 className="mb-5 text-4xl font-bold">
            Free consultation with exceptional quality
          </h1>
          <p className="mb-5 text-lg">Just one call away: +84 1102 2703</p>
        </div>
        <div className="ml-auto">
          <button className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition">
            Get your consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
