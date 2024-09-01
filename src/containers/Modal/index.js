import PropTypes from "prop-types";
import { useState } from "react";
import Icon from "../../components/Icon";
import "./style.scss";

const Modal = ({ opened, Content, children }) => {
  const [isOpened, setIsOpened] = useState(opened);
  return (
    <>
      {children({ isOpened, setIsOpened })}
      {isOpened && (
        <div className="modal">
          <div className="content">
            {Content}
            <button
              type="button"
              data-testid="close-modal"
              onClick={() => setIsOpened(false)}
            >
              <Icon name="close" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Modal.defaultProps = {
  opened: false,
}

Modal.propTypes = {
  opened: PropTypes.bool,
  Content: PropTypes.node.isRequired,
  children: PropTypes.func.isRequired,
}

export default Modal;

// import PropTypes from "prop-types";
// import { useState, useEffect } from "react";
// import Icon from "../../components/Icon";
// import "./style.scss";

// const Modal = ({ opened, Content, children, onCategorySelect, onClose }) => {
//   const [isOpened, setIsOpened] = useState(opened);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Synchroniser l'état interne de la modal avec la prop 'opened'
//   useEffect(() => {
//     setIsOpened(opened);
//   }, [opened]);

//   const handleConfirm = () => {
//     if (selectedCategory) {
//       onCategorySelect(selectedCategory);
//       setIsOpened(false);
//     }
//   };

//   return (
//     <>
//       {children({ isOpened, setIsOpened, setSelectedCategory })}
//       {isOpened && (
//         <div className="modal">
//           <div className="content">
//             {Content}
//             <button
//               type="button"
//               data-testid="close-modal"
//               onClick={() => {
//                 setIsOpened(false);
//                 onClose();
//               }}
//             >
//               <Icon name="close" />
//             </button>
//             <button
//               type="button"
//               data-testid="confirm-modal"
//               onClick={handleConfirm}
//               disabled={!selectedCategory}
//             >
//               Confirmer
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// Modal.defaultProps = {
//   opened: false,
//   onCategorySelect: () => {},
//   onClose: () => {},
// };

// Modal.propTypes = {
//   opened: PropTypes.bool,
//   Content: PropTypes.node.isRequired,
//   children: PropTypes.func.isRequired,
//   onCategorySelect: PropTypes.func,
//   onClose: PropTypes.func,
// };

// export default Modal;
