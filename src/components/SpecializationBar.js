import "../App.css";
import { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";

const SpecializationBar = () => {
  const [specializationCategory, setSpecializationCategory] = useState([
    { division: "Makeup", percentage: "92%", classPercent: "w-[92%]" },
    { division: "Appearance", percentage: "100%", classPercent: "w-[100%]" },
    { division: "Speech", percentage: "93%", classPercent: "w-[93%]" },
    { division: "Social", percentage: "89%", classPercent: "w-[89%]" },
    { division: "Cuteness", percentage: "999%", classPercent: "w-[99999px]" },
  ]);

  const [showDivisionName, setShowDivisionName] = useState(false);
  const [progress, setProgress] = useState({});
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer1 = setTimeout(() => setShowDivisionName(true), 750);
      const timer2 = setTimeout(() => {
        const newProgress = {};
        specializationCategory.forEach((category) => {
          newProgress[category.division] = category.classPercent;
        });
        setProgress(newProgress);
      }, 250);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [inView, specializationCategory]);

  return (
    <InView onChange={(inView) => setInView(inView)}>
      {({ ref }) => (
        <div ref={ref}>
          <div className="w-full mx-auto">
            {specializationCategory.map((Category, key) => (
              <div className="py-2 text-base" key={key}>
                <div className="flex justify-between items-center">
                  <span>{Category.division}</span>
                  <span
                    className={
                      showDivisionName
                        ? "duration-500 ease-out"
                        : "text-transparent" + " text-sm text-slate-500 "
                    }
                  >
                    {Category.percentage}
                  </span>
                </div>

                <div className="w-full h-2.5 mt-1 bg-pink-400/30 rounded-full ">
                  <div
                    className={`h-full duration-[2000ms] bg-gradient-to-r ${
                      progress[Category.division] || "w-[0%]"
                    } from-pink-800 to-pink-400 rounded-full`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </InView>
  );
};

export default SpecializationBar;
