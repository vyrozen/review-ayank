// Bagian lama ... Harus dipelajari lagi wkwkwk
import "../App.css";
import { useState, useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";

const SpecializationBarLG = () => {
  const [specializationCategory, setSpecializationCategory] = useState([
    { division: "Makeup", percentage: "92%", classPercent: "w-[92%]" },
    { division: "Appearance", percentage: "100%", classPercent: "w-[100%]" },
    { division: "Speech", percentage: "93%", classPercent: "w-[93%]" },
    { division: "Social", percentage: "89%", classPercent: "w-[89%]" },
    {
      division: "Cuteness",
      percentage: "999%",
      classPercent: "ip678p:w-[999px] lg:w-[100%]",
    },
  ]);

  function HidePercentage() {
    const [showDivisionName, setShowDivisionName] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => setShowDivisionName(true), 1000);
      return () => clearTimeout(timer);
    }, []);
    return showDivisionName;
  }

  function RenderProgress(newValue) {
    const [progress, setProgress] = useState("w-[0%]");
    useEffect(() => {
      const timer = setTimeout(() => setProgress(newValue), 500);
      return () => clearTimeout(timer);
    }, []);
    return progress;
  }

  return (
    <div className="w-full mx-auto ">
      {specializationCategory.map((Category, key) => (
        <div className="py-2 text-base">
          <div className="flex justify-between items-center">
            <span>{Category.division}</span>
            <span
              className={
                HidePercentage()
                  ? "duration-500 ease-out"
                  : "text-transparent" + " text-sm text-slate-500 "
              }
            >
              {Category.percentage}
            </span>
          </div>

          <div className="w-full h-2.5 mt-1 bg-pink-400/30 rounded-full overflow-hidden">
            <div
              className={`h-full duration-[2000ms] bg-gradient-to-r ${RenderProgress(
                Category.classPercent
              )} from-pink-800 to-pink-400 rounded-full`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecializationBarLG;
