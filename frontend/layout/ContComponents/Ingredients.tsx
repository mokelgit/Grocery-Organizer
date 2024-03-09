export default function Ingredients() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-start mt-[2.5%] ml-[5%]">
        <div className="text-[24px] bold italic">Ingredients</div>
        <div>
          <div className="text-[18px] max-w-[60%] text-left">
            Create your own ingredients to organize the quantity and prices for
            the building blocks of your favorite recipes.
          </div>

        </div>
        <div className="w-full pr-[5%]">
          <div className="flex justify-end">
            <div className="flex items-center justify-between rounded-full h-[50px] w-[400px] px-4 border-black border-[2px]">
              <input
                  type="text"
                  className="flex rounded-full border-none focus:outline-none"
                  placeholder="Search ingredients ..."
              />
              <div>Icon</div>
            </div>
          </div>    
        </div>
        <div className="flex w-full mt-[1.5%] mx-[5%] px-[5px]">
          <div className="flex w-[25%] justify-end">Name \/</div>
          <div className="flex w-[25%] justify-end">Size \/</div>
          <div className="flex w-[25%] justify-end">Price \/</div>
        </div>
        <div className="flex items-center mt-[30px] px-[5px] mx-[5%] w-[90%] rounded-3xl border-black border-[2px] h-[90px]">
            <div className="w-[24.5%]">
              <div className="flex items-center justify-center rounded-3xl w-[80px] h-[80px] bg-red-400 border-black border-[2px] ">IMG</div>
            </div>
            <div className="w-[27%] ">
              <div className="flex items-center w-full justify-start">Namess</div>
            </div>
            <div className="w-[29%] ">
              <div className="flex items-center w-full justify-sta rt">Size</div>
            </div>
            <div className="w-[19.5%] ">
              <div className="flex items-center w-full justify-sta rt">Price</div>
            </div>
        </div>
      </div>
    </div>
  );
}
