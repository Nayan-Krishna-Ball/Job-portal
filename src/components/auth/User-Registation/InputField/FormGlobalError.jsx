//

import { AnimatePresence, motion } from "framer-motion";

const FormGlobalError = ({ error, className = "" }) => {
  return (
    <AnimatePresence mode="wait">
      {error?.message && (
        <motion.div
          key={error.message}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className={`rounded-md bg-red-50 border border-red-200 text-red-600 text-sm px-3 py-2 ${className}`}
        >
          {error.message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormGlobalError;
