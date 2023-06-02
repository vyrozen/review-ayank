import "../App.css";

const SpecializationBar = () => {
  const specializationCategory = [
    { division: "Makeup", percentage: "90%", classPercent: "w-[90%]" },
    { division: "Appearance", percentage: "100%", classPercent: "w-[100%]" },
  ];
  return (
    <div>
      {specializationCategory.map((Category, key) => (
        <div className="py-2 text-base">
          <div className="flex justify-between items-center">
            <span>{Category.division}</span>
            <span className="text-sm text-slate-500">
              {Category.percentage}
            </span>
          </div>

          <div className="w-full h-2.5 mt-1 bg-pink-400/30 rounded-full overflow-hidden">
            <div
              className={`h-full duration-1000 bg-gradient-to-r ${Category.classPercent} from-pink-800 to-pink-400 rounded-full`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecializationBar;
