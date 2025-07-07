interface PrivacyPanelProps {
  show: boolean;
}

const PrivacyPanel = ({ show }: PrivacyPanelProps) => {
  if (!show) return null;

  return (
    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
      <div className="text-xs font-medium text-blue-800 mb-2">Data Visibility Controls</div>
      <div className="space-y-1 text-xs">
        <div className="flex items-center justify-between">
          <span>Property History</span>
          <div className="w-8 h-4 bg-green-500 rounded-full relative">
            <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>Budget Information</span>
          <div className="w-8 h-4 bg-gray-300 rounded-full relative">
            <div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5"></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>Personal Documents</span>
          <div className="w-8 h-4 bg-gray-300 rounded-full relative">
            <div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPanel;