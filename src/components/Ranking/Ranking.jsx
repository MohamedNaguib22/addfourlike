/* eslint-disable react/prop-types */
export const Ranking = (props) => {
  return (
    <div className="flex justify-between items-center py-[10px]">
      <div className="flex items-center gap-[8px]">
        <p className="text-[12px] text-gray-500 font-medium">{props.Index}</p>
        <div className="flex items-center gap-[4px]">
          <div>
            <img
              className="w-[30px] h-[30px] PhotoRanking rounded-full"
              src={props.Img}
              alt="img"
            />
          </div>
          <p className="text-[14px]">{props.Name}</p>
        </div>
      </div>
      <div>
        <p className="text-[14px]">{props.Number}</p>
      </div>
    </div>
  );
};
