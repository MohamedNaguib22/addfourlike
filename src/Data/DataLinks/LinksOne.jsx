/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const LinksOne = (props) => {
  return <Link className={props.className} to={props.path}>{props.content}</Link>;
}
