import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import Logo from '../../../public/Assets/img/logo.png'
export const Wallet = () => {
  return (
    <div>
      <HeaderOne>
        <div className="flex items-center gap-2">
          <p>📢</p>
          <h1>
            Join the affiliate program and earn a lifetime 5% of the points
            collected in the `FREE Points` section.
          </h1>
        </div>
      </HeaderOne>
      <div className="w-[250px] mx-auto my-[26px]">
        <img src={Logo} alt="" />
        <h1>
          AMF Token Balance at Add4Like
        </h1>
      </div>
    </div>
  );
};
