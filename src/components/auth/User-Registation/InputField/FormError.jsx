//

import { AnimatePresence, motion } from "framer-motion";

const FormError = ({ errors }) => {
  return (
    <AnimatePresence>
      {errors && (
        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="text-red-500 text-sm"
        >
          {errors.message}
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default FormError;
