import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  overlayContent: string;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, title, imageSrc, overlayContent }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      size="md" // Fixed size for modal (sm size)
      backdrop="blur" // Ensure backdrop has blur
      placement="center" // Ensure the modal is centered
      closeButton={true} // Use default close button
      classNames={{
        base: "bg-[#353535] text-white", // Modal background color and text color
        header: "text-white text-center w-full", // Ensure header is centered with white text
        footer: "text-white text-center", // Footer text is white and centered
        closeButton: "absolute top-2 right-2 text-white hover:bg-white/20 rounded-full p-2", // Explicit close button positioning
        backdrop: "backdrop-blur-lg", // Apply blur to backdrop explicitly
      }}
    >
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          {/* Adjusting image to fit within modal */}
          <img 
            src={imageSrc} 
            alt={title} 
            style={{ 
              width: '100%', 
              maxHeight: '60vh', // Ensure the image height is responsive and does not overflow
              objectFit: 'contain', // Make sure the image fits within the modal bounds
              borderRadius: '8px',
              marginBottom: '16px'
            }} 
          />
          <p>{overlayContent}</p>
        </ModalBody>
        <ModalFooter>
          {/* Optionally, add a close button in the footer */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
