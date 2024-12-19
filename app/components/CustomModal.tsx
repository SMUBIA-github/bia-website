import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react';
import styles from './CustomModal.module.css';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  overlayContent: React.ReactNode;
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
      scrollBehavior="inside"
      classNames={{
        base: "bg-[#353535]",
        wrapper: styles['modal-wrapper'],
        body: `${styles['modal-body']} ${styles['scrollable']}`,
        header: styles['modal-header'],
        closeButton: styles['close-button'],
        backdrop: "backdrop-blur-lg",
      }}
      className={styles['modal-content']}
    >
      <ModalContent>
        <ModalHeader className={styles['modal-header']}>
          {title}
        </ModalHeader>
        <ModalBody>
          <img 
            src={imageSrc} 
            alt={title} 
            className={styles['modal-image']}
          />
          <div className={styles['modal-text']}>
            {overlayContent}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
