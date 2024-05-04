import classNames from "classnames"

const SelectGrid = ({ grid, setGrid }) => {
  return (
    <div className="w-full flex items-center justify-end gap-2">

      <div className={classNames("flex items-center w-[20px] h-[25px] cursor-pointer hover:bg-slate-300 gap-0.5 border border-slate-400 box-border p-0.5",
        { 'bg-purple-200': grid === 3 })}
        onClick={() => setGrid(3)}>
        <div className="flex-1 h-full bg-slate-500"></div>
        <div className="flex-1 h-full bg-slate-500"></div>
        <div className="flex-1 h-full bg-slate-500"></div>
      </div>

      <div className={classNames("flex items-center w-[30px] h-[25px] cursor-pointer hover:bg-slate-300 gap-0.5 border border-slate-400 box-border p-0.5", { 'bg-purple-200': grid === 4 })}
        onClick={() => setGrid(4)}>
        <div className="flex-1 h-full bg-slate-500"></div>
        <div className="flex-1 h-full bg-slate-500"></div>
        <div className="flex-1 h-full bg-slate-500"></div>
        <div className="flex-1 h-full bg-slate-500"></div>
      </div>

      <div className={classNames("flex items-center w-[45px] h-[25px] cursor-pointer hover:bg-slate-300 gap-0.5 border border-slate-400 box-border p-0.5", { 'bg-purple-200': grid === 5 })}
        onClick={() => setGrid(5)}>
        <div className="flex-1 h-full bg-slate-500"></div>
        <div className="flex-1 h-full bg-slate-500"></div>
        <div className="flex-1 h-full bg-slate-500"></div>
        <div className="flex-1 h-full bg-slate-500"></div>
        <div className="flex-1 h-full bg-slate-500"></div>
      </div>

    </div>
  )
}

export default SelectGrid