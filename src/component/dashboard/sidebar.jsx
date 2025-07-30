// components/dashboard/Sidebar.tsx

export default function Sidebar() {
    return (
      <aside className="w-64 bg-black/30 backdrop-blur text-white p-6 hidden lg:block">
        <h1 className="text-2xl font-bold mb-6">JobVision</h1>
        <ul className="space-y-4">
          <li>Dashboard</li>
          <li>Templates</li>
          <li>Analytics</li>
          <li>Job Tracker</li>
          <li>Settings</li>
        </ul>
      </aside>
    );
  }
  