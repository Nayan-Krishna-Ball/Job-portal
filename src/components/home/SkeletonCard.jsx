//

export default function SkeletonCard() {
  return (
    <article className="card p-6 " id="loading-skeleton">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="shrink-0">
          <div className="h-16 w-16 skeleton"></div>
        </div>
        <div className="flex-1 space-y-3">
          <div className="space-y-2">
            <div className="h-6 skeleton w-2/3"></div>
            <div className="h-4 skeleton w-1/2"></div>
          </div>
          <div className="h-4 skeleton w-full"></div>
          <div className="flex gap-2">
            <div className="h-6 skeleton w-20"></div>
            <div className="h-6 skeleton w-20"></div>
            <div className="h-6 skeleton w-20"></div>
          </div>
          <div className="flex justify-between items-center pt-2">
            <div className="h-4 skeleton w-32"></div>
            <div className="flex gap-2">
              <div className="h-10 skeleton w-28"></div>
              <div className="h-10 skeleton w-28"></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
