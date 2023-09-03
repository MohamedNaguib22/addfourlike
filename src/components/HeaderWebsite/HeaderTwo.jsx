const HeaderTwo = ({ children }) => {
  return (
    <div className="bg-gray-500 py-[10px] mb-[30px]">
      <div className="text-white font-bold flex flex-col items-center text-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default HeaderTwo