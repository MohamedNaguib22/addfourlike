import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import { Tasks } from "../../components/P2PTasks/Tasks";
import { Table } from "../../components/Table/Table";

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
      <Tasks />
      <h1 className="mb-[5px] text-[26px] font-semibold text-center">
        Current Active Tasks
      </h1>
      <p className="text-center text-[14px] font-medium mb-[10px]">
        There are currently 176 active P2P Tasks and 50345 completed
        performances (in total, users have earned AMF Tokens 699,398.35 AMF)
      </p>
      <Table />
      <p className="w-[90%] py-[10px] px-[20px] text-[14px] font-medium mx-auto text-white bg-gray-500 ">
        You are Regular user and You can get at a time. | CPT is the total
        amount of AMF Tokens that you will receive after completing the task. |
        After receiving the task, you have up to 24 hours to complete it. After
        completing the task, you need to provide proof (evidence). Once proof is
        provided, the task owner has up to 24 hours to review (approve/reject)
        it. If the owner does not review it within the specified time period,
        the task status will be set to `approved` and you will receive AMF
        Tokens on your AddMeFast AMF balance. | Currently 1 AMF ≈ $0.0049 USD
        (by CoinMarketCap).
      </p>
    </div>
  );
};
