import { useEffect } from "react";

const Modal = ({ closeModal, children }) => {
  //   componentDidMount якщо пустий масив useEffect(()=>{},[])
  // componentDidUpdate якщо в масиві е залежність useEffect(()=>{},[closeModal])
  //   componentWillUnmount потрібно використати після вього return useEffect(()=>{.... return()=>{}},[])
  useEffect(() => {
    const handlePressESC = (e) => {
      if (e.code === "Escape") closeModal();
    };
    console.log("componentDidMount");
    window.addEventListener("keydown", handlePressESC);
    return () => {
      console.log("componentWillUnmount");
      window.removeEventListener("keydown", handlePressESC);
    };
  }, [closeModal]);

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backdropFilter: "blur(5px)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-titleg">MODAl</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// class Modal extends Component {
//   state = {};

//   componentDidMount = () => {
//     window.addEventListener("keydown", this.handlePressESC);
//   };

//   componentWillUnmount = () => {
//     window.removeEventListener('keydown', this.handlePressESC)
//   }

//   handlePressESC = (e) => {
//     if (e.code === "Escape") this.props.closeModal();
//   };

//   render() {
//     const { closeModal, children } = this.props;
//     return (
//       <div
//         className="modal fade show"
//         style={{ display: "block", backdropFilter: "blur(5px)" }}
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-titleg">MODAl</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 aria-label="Close"
//                 onClick={closeModal}
//               ></button>
//             </div>
//             <div className="modal-body">{children}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Modal;

// const Modal = ({ children, closeModal}) => {
//   return (
//     <div
//       className="modal fade show"
//       style={{ display: "block", backdropFilter: "blur(5px)" }}
//     >
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-titleg">MODAl</h5>
//             <button
//               type="button"
//               className="btn-close"
//               aria-label="Close"
//               onClick={closeModal}
//             ></button>
//           </div>
//           <div className="modal-body">{children}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
