/* eslint-disable react/prop-types */
export const Icons = (props) => {
  return (
    <a
      className="text-black hover:text-gray-900 cursor-pointer transition-all duration-[0.3s]"
      href={props.path}
    >
      {props.icons}
    </a>
  );
};
