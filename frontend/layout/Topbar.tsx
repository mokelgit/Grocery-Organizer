function Topbar({
  openSections,
  setOpenSections,
  selectedSection,
  setSelectedSection,
}: {
  openSections: string[];
  setOpenSections: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSection: string | null;
  setSelectedSection: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const categories = ["Grocery Lists", "Recipes", "Ingredients", "Pantry"];

  console.log(selectedSection);
  return (
    <div className="flex w-full h-full">
      <div className="flex pl-[5%] gap-x-[2%] items-center h-full">
        {categories.map((name) => (
          <div
            key={name} // Don't forget to add a unique key when rendering lists
            className="flex border-black border-[1px] px-[8px] py-[5px] hover:cursor-pointer"
            onClick={() => {
              if (openSections.find((item) => item === name)) {
                setSelectedSection(name);
              } else {
                setOpenSections([...openSections, name]);
                if(!selectedSection || selectedSection === ""){
                    setSelectedSection(name);
                }
              }
            }}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="flex w-[65%] justify-end items-center pr-[2.5%]">
        <div className=" border-black border-[1px] px-[8px] py-[5px]">
          Account Settings
        </div>
      </div>
    </div>
  );
}

export default Topbar;
