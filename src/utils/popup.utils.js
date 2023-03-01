// import pubsub from "sweet-pubsub";

// import { TOAST_TYPES } from "../components/toast/toast.component";

// export const showSuccessMessage = (message) =>
//   pubsub.emit("showToast", {
//     type: TOAST_TYPES.SUCCESS,
//     title: "Success!",
//     message,
//   });

// export const showErrorMessage = (error) => {
//   const { meta, data } = error ?? {};

//   pubsub.emit("showToast", {
//     type: TOAST_TYPES.ERROR,
//     title: "Failed!",
//     message: (
//       <>
//         {meta?.message ?? ""}
//         {!["", undefined, null].includes(data) && Array.isArray(data) && (
//           <>
//             {!["", undefined, null].includes(meta?.message) && <br />}
//             {data.map(({ message }, i) => (
//               <span key={i}>
//                 {`-${message}`}
//                 <br />
//               </span>
//             ))}
//           </>
//         )}
//       </>
//     ),
//   });
// };

// export const showCustomErrorMessage = (message) =>
//   pubsub.emit("showToast", {
//     type: TOAST_TYPES.ERROR,
//     title: "Failed!",
//     message,
//   });
