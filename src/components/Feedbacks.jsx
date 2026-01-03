import React from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[220px] flex items-center justify-center`}>
        <div className="text-center">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
          <p className="mt-4 text-secondary">No testimonials available at the moment.</p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
