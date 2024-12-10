import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react';
import styles from './CustomModal.module.css';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  overlayContent: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title,
  imageSrc,
  overlayContent
}) => {
  return (
    <Modal 
      isOpen={isOpen}
      onOpenChange={onClose}
      size="md"
      backdrop="blur"
      placement="center"
      classNames={{
        base: "bg-[#353535]",
        wrapper: styles['modal-wrapper'],
        body: styles['modal-body'],
        header: styles['modal-header'],
        closeButton: styles['close-button'],
        backdrop: "backdrop-blur-lg",
      }}
      className={styles['modal-content']}
    >
      <ModalContent>
        {/* {(onClose) => ( */}
          <>
            <ModalHeader className="flex flex-col gap-1">
              {title}
            </ModalHeader>
            <ModalBody>
              <img 
                src={imageSrc} 
                alt={title} 
                className={styles['modal-image']}
              />
              <p className={styles['modal-text']}>
                {overlayContent}
              </p>
            </ModalBody>
          </>
        {/* )} */}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;