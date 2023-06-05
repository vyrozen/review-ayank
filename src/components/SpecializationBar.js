import "../App.css";
import { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
// broken on LG Screen

const SpecializationBar = () => {
  const [specializationCategory, setSpecializationCategory] = useState([
    { division: "Makeup", percentage: "92%", classPercent: "w-[92%]" },
    { division: "Appearance", percentage: "100%", classPercent: "w-[100%]" },
    { division: "Speech", percentage: "93%", classPercent: "w-[93%]" },
    { division: "Social", percentage: "96%", classPercent: "w-[96%]" },
    {
      division: "Cuteness",
      percentage: "999%",
      classPercent:
        "ip678p:w-[999px] sm:w-[9999px] lg:w-[100%] lg:duration-100 lg:to-pink-800",
    },
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
                        : "text-transparent text-sm text-slate-500"
                    }
                  >
                    {Category.percentage}
                  </span>
                </div>

                <div className="w-full h-2.5 mt-1 bg-pink-400/30 rounded-full overflow-clip">
                  <div
                    className={`h-full duration-[2000ms] ${
                      progress[Category.division] || "w-[0%]"
                    } bg-gradient-to-r from-pink-800 to-pink-400 rounded-full`}
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
