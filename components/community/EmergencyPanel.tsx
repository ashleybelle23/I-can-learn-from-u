import { emergencyResources } from '@/lib/mock/trust';

export function EmergencyPanel() {
  return (
    <div className="rounded-2xl border border-red-800/40 bg-red-950/20 p-5 space-y-4">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-red-300 mb-1">
            If someone is in immediate danger
          </h3>
          <p className="text-xs text-red-400/80 leading-relaxed">
            This community offers peer support, not emergency services. If you or someone else is in immediate danger, please call 911 or use a resource below.
          </p>
        </div>
      </div>

      <div className="space-y-2.5">
        {emergencyResources.slice(0, 3).map((resource) => (
          <div
            key={resource.name}
            className="flex items-center justify-between p-3 rounded-xl bg-[transparent]/60 border border-red-900/30 gap-4"
          >
            <div className="min-w-0">
              <p className="text-xs font-semibold text-red-200">{resource.name}</p>
              <p className="text-xs text-[#ffd8b8] mt-0.5 truncate">{resource.hours}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {resource.phone && (
                <a
                  href={`tel:${resource.phone}`}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-600/30 text-red-300 border border-red-700/40 hover:bg-red-600/50 transition-colors"
                >
                  {resource.phone}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <a
        href="/resources#crisis"
        className="block text-center text-xs text-red-400 hover:text-red-300 transition-colors mt-1"
      >
        View all crisis resources →
      </a>
    </div>
  );
}
