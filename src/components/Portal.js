import { createPortal } from "react-dom";

const Portal = ({ openModal, children }) => {
  if (!openModal) return null;

  return createPortal(
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      {children}
    </div>,
    document.body
  );
};
export default Portal;
