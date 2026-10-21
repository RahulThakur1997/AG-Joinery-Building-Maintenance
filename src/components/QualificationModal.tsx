import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { QualificationForm } from './QualificationForm';

interface QualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QualificationModal: React.FC<QualificationModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="qualification-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="qualification-modal-content"
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-[#171918] flex items-center justify-center transition-colors cursor-pointer shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <QualificationForm initialService={initialService} />
      </div>
    </div>
  );
};
