export const SectionHeader = () => {
  return (
    <div className="text-center mb-20 animate-fade-in-up">
      <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold border border-red-200 mb-6">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        Common homeowner frustrations
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-enhanced">
        Why Home Projects Feel Like
        <span className="text-red-600 block">Constant Chaos</span>
      </h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto font-medium text-muted-enhanced leading-relaxed">
        Every homeowner faces the same exhausting problems. Here's how ATD eliminates each frustration.
      </p>
    </div>
  );
};