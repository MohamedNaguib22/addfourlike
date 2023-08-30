import Timer from "./Timer"

export const Times = () => {
  return (
    <div className="flex flex-col py-[100px] mb-[50px] relative h-auto">
    <h1 className="text-black text-[65px] font-medium text-center">
      Timer Section
    </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 container items-center gap-[30px]">
        <Timer /> 
        <Timer /> 
        <Timer /> 
        <Timer /> 
      </div>
    </div>
  )
}
