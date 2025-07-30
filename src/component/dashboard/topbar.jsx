export default function Topbar({ dateRange }) {
    return (
      <div className="bg-black/20 backdrop-blur p-4 border-b border-white/10 text-white flex justify-between items-center">
        <h2 className="text-xl font-bold">Welcome back! 👋</h2>
        <div className="text-sm bg-white/10 px-3 py-1 rounded">{dateRange}</div>
      </div>
    );
  }
  