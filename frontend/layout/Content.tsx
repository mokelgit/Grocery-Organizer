import GroceryList from "./ContComponents/GroceryList";
import Ingredients from "./ContComponents/Ingredients";
import Recipes from "./ContComponents/Recipes";
import Pantry from "./ContComponents/Recipes";
import "../src/App.css";

function Content({
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

  function handleSelectedSection(id: string) {
    setSelectedSection(
      openSections[openSections.length - 1] !== id
        ? openSections[openSections.length - 1]
        : openSections[openSections.length - 2]
          ? openSections[openSections.length - 2]
          : null,
    );
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-[4%] border-black border-b-2">
        {openSections.length > 0 && (
          <div className="w-full h-full flex items-center ">
            {openSections.map((id) => (
              <div
                key={id}
                className="w-[25%] flex items-center justify-center h-full  border-black  border-r-2"
              >
                <div
                  className={`w-[90%] p-[5px] ${selectedSection === id ? "bg-gray-400" : "bg-gray-200"}`}
                  onClick={() => {
                    setSelectedSection(id);
                  }}
                >
                  {id}
                </div>
                <div
                  className="w-[10%] p-[5px] bg-red-800 hover:cursor-pointer"
                  onClick={() => {
                    setOpenSections(openSections.filter((item) => item !== id));
                    handleSelectedSection(id);
                  }}
                >
                  X
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        {(() => {
          switch (selectedSection) {
            case "GroceryList":
              return <GroceryList />;
            case "Pantry":
              return <Pantry />;
            case "Ingredients":
              return <Ingredients />;
            case "Recipes":
              return <Recipes />;
            default:
              return <></>;
          }
        })()}
      </div>
    </div>
  );
}

export default Content;
