import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export const BuyCard = (props) => {
  return (
    <Link to={props.Link} className="flex mb-[16px] black justify-between items-center px-[20px] py-[14px] bg-white border-[2px] border-black/50">
      <div className="flex items-center gap-1 ">
        <div>
          <img className={props.class} src={props.img} alt={props.alt} />
        </div>
        <div>
          <p>{props.contentOne}</p>
          <p className={props.classTwo}><span className="text-green-600 font-medium">{props.span}</span> {props.contentTwo} <span className="text-blue-600 font-medium">{props.spanTwo}</span></p>
        </div>
      </div>
      <div>
        <img src={props.imgTwo} alt={props.alt} />
      </div>
    </Link>
  );
};
