export const HeaderOne = ({children}) => {
  return (
    <div className="bg-black py-[5px] mb-[8px]">
      <div className=" justify-center text-white font-bold flex gap-2  ">
        {children}
      </div>
    </div>
  );
}
