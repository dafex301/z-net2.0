export default function Loading() {
  return (
    <div className="col-span-12 bg-white rounded-2xl shadow-md p-8 animate-pulse">
      <div className=" space-y-4">
        <div className="bg-gray-200 w-1/4 h-8 rounded-lg"></div>
        <div className="flex items-center justify-center w-full h-72 bg-gray-200 rounded">
          <svg
            className="w-10 h-10 text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>

        {/* Text Placeholder */}
        <div role="status" className="space-y-2.5 animate-pulse ">
          <div className="flex items-center w-full space-x-2">
            <div className="h-2.5 bg-gray-200 rounded-full w-32" />
            <div className="h-2.5 bg-gray-300 rounded-full w-24" />
            <div className="h-2.5 bg-gray-300 rounded-full w-full" />
          </div>
          <div className="flex items-center w-full space-x-2 ">
            <div className="h-2.5 bg-gray-200 rounded-full w-full" />
            <div className="h-2.5 bg-gray-300 rounded-full w-full" />
            <div className="h-2.5 bg-gray-300 rounded-full w-24" />
          </div>
          <div className="flex items-center w-full space-x-2 max-w-4xl">
            <div className="h-2.5 bg-gray-300 rounded-full w-full" />
            <div className="h-2.5 bg-gray-200 rounded-full w-80" />
            <div className="h-2.5 bg-gray-300 rounded-full w-full" />
          </div>
          <div className="flex items-center w-full space-x-2">
            <div className="h-2.5 bg-gray-200 rounded-full w-full" />
            <div className="h-2.5 bg-gray-300 rounded-full w-full" />
            <div className="h-2.5 bg-gray-300 rounded-full w-24" />
          </div>
          <div className="flex items-center w-full space-x-2 ">
            <div className="h-2.5 bg-gray-300 rounded-full w-32" />
            <div className="h-2.5 bg-gray-300 rounded-full w-24" />
            <div className="h-2.5 bg-gray-200 rounded-full w-full" />
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[360px]">
            <div className="h-2.5 bg-gray-300 rounded-full w-full" />
            <div className="h-2.5 bg-gray-200 rounded-full w-80" />
            <div className="h-2.5 bg-gray-300 rounded-full w-full" />
          </div>
          <span className="sr-only">Loading...</span>
        </div>

        <div className="flex gap-3">
          <button
            disabled
            className="text-lg bg-gray-300 text-gray-300 py-3 rounded-full w-full"
          >
            Belajar
          </button>
          <button
            disabled
            className="text-lg bg-gray-200 text-gray-200 py-3 rounded-full w-full"
          >
            Latihan
          </button>
        </div>
      </div>
    </div>
  );
}
