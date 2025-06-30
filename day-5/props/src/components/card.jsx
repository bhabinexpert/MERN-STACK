export default function Card({mydetail}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src={mydetail.img}
        alt="Card cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{mydetail.name}</div>
        <p className="text-gray-700 text-base">
          This is a simple card built with React and styled using Tailwind CSS.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{mydetail.fees }
        </span>
        <span className="inline-block bg-green-200 text-green-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
          30
        </span>
        <span className="inline-block bg-yellow-200 text-yellow-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
          {mydetail.year}
        </span>
      </div>
    </div>
  );
}