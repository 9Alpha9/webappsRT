"use client";
import {
  UsersIcon,
  DocumentTextIcon,
  ChatBubbleLeftIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    name: "Total Warga RT 50",
    value: "1,234",
    icon: UsersIcon,
    change: "+12%",
  },
  {
    name: "Total Pengajuan Surat",
    value: "45",
    icon: DocumentTextIcon,
    change: "+5%",
  },
  { name: "Feedback", value: "89", icon: ChatBubbleLeftIcon, change: "-2%" },
  { name: "Pertumbuhan", value: "+12%", icon: ChartBarIcon, change: "+8%" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.name}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-full">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4">
                <span
                  className={`text-sm font-medium ${
                    stat.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  dari bulan lalu
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Activity Chart */}
        <div className=" bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-green-950 p-3 pl-6">
            <h3 className="text-lg font-medium  text-white">
              Aktivitas Terbaru
            </h3>
          </div>
          <div className="mt-4 h-80 p-6">
            {/* Add your chart component here */}
            <div className="flex items-center justify-center h-full text-gray-500">
              Chart Component
            </div>
          </div>
        </div>

        {/* Recent Requests */}
        <div className=" bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-green-950 p-3 pl-6">
            <h3 className="text-lg font-medium  text-white">
              Pengajuan Terbaru
            </h3>
          </div>
          <div className="mt-4 p-4">
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {[1, 2, 3, 4, 5].map((item) => (
                  <li key={item} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-600">
                            U{item}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Pengajuan Surat {item}
                        </p>
                        <p className="text-sm text-gray-500">
                          Diajukan oleh User {item}
                        </p>
                      </div>
                      <div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Selesai
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className=" bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-green-950 p-3 pl-6">
          <h3 className="text-lg font-medium  text-white">Agenda Terbaru</h3>
        </div>
        <div className="mt-4 p-6">
          <div className="flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
                          A{item}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        Aktivitas {item}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date().toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Baru
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
    </div>
  );
}
