const CharName = () => {
  return (
    <>
      {"Pacar.".split("").map((char, index) => (
        <span className="cursor-default hover:uppercase">{char}</span>
      ))}
    </>
  );
};

export default CharName;
