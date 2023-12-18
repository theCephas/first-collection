"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        variants={{
          open: {
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
          closed: {
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
        initial="closed"
        animate="open"
        exit="closed"
        className="fixed top-0 inset-0 z-50 flex items-center justify-center cursor-pointer"
      >
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black opacity-50"
        ></div>
        <section className="w-full h-full sm:w-[25.5rem] lg:w-[34rem] sm:ml-auto z-50 bg-white  overflow-scroll hide-scroll">
          {children}
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
