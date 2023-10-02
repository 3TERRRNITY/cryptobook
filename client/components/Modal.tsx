import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { SubmitButton } from "../styles/Show";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  text-align: center;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const Button = styled(SubmitButton)``;
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return isOpen
    ? ReactDOM.createPortal(
        <ModalOverlay onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {children}
            <Button onClick={onClose}>Close</Button>
          </ModalContent>
        </ModalOverlay>,
        document.body
      )
    : null;
};

export default Modal;
