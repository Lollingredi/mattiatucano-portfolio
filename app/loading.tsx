export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-24 animate-pulse">
      {/* Page heading skeleton */}
      <div className="h-10 w-64 bg-neutral-100 rounded mb-12" />

      {/* Content skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-neutral-100 rounded"
            style={{ aspectRatio: "4/3" }}
          />
        ))}
      </div>
    </div>
  );
}
