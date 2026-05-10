import { useEffect, useState } from "react";
import { Search, Bell, User, Star, ChevronDown } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/randomproducts?page=${page}&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid`,
      );
      const data = await response.json();
      setProducts(data.data);
    }
    getData();
  }, [page]);
    if (!products) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-[#f6f8fa] text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="flex items-center bg-white px-10 h-[70px] shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-2.5 mr-10">
          <div className="bg-[#ffc107] text-[#0047ba] font-black text-2xl w-8 h-8 flex items-center justify-center rounded pr-0.5 italic">f</div>
          <span className="text-sm leading-tight text-gray-600 tracking-wide">FLIPKART<br/><b className="text-gray-900 font-bold">SELECT</b></span>
        </div>
        <ul className="flex list-none gap-7 m-0 p-0 flex-1">
          <li className="flex items-center gap-1 text-[15px] font-medium text-gray-600 cursor-pointer transition-colors hover:text-[#0056d2]">Categories <ChevronDown size={16} /></li>
          <li className="flex items-center gap-1 text-[15px] font-medium text-gray-600 cursor-pointer transition-colors hover:text-[#0056d2]">Deals</li>
          <li className="flex items-center gap-1 text-[15px] font-medium text-gray-600 cursor-pointer transition-colors hover:text-[#0056d2]">Mobile</li>
          <li className="flex items-center gap-1 text-[15px] font-medium text-gray-600 cursor-pointer transition-colors hover:text-[#0056d2]">Electronics</li>
          <li className="flex items-center gap-1 text-[15px] font-medium text-gray-600 cursor-pointer transition-colors hover:text-[#0056d2]">Fashion</li>
          <li className="flex items-center gap-1 text-[15px] font-medium text-gray-600 cursor-pointer transition-colors hover:text-[#0056d2]">Home</li>
        </ul>
        <div className="flex items-center gap-5">
          <Bell size={20} className="text-gray-600 cursor-pointer transition-colors hover:text-[#0056d2]" />
          <User size={20} className="text-gray-600 cursor-pointer transition-colors hover:text-[#0056d2]" />
        </div>
      </nav>

      {/* Main Container */}
      <div className="flex max-w-[1400px] mx-auto py-[30px] px-10 gap-[30px]">
        {/* Sidebar Filter */}
        <aside className="w-[260px] min-w-[260px] bg-white rounded-xl p-5 shadow-sm h-fit">
          <div className="mb-5 last:mb-0">
            <h4 className="flex justify-between items-center text-[15px] font-semibold m-0 mb-4 text-gray-900">Category</h4>
            <div className="flex justify-between items-center text-sm text-gray-600 cursor-pointer font-medium">Electronics <ChevronDown size={16} /></div>
          </div>
          <hr className="border-t border-gray-100 my-5" />
          <div className="mb-5 last:mb-0">
            <h4 className="flex justify-between items-center text-[15px] font-semibold m-0 mb-4 text-gray-900">Brand <ChevronDown size={16} /></h4>
            <label className="flex items-center gap-2.5 text-sm text-gray-600 mb-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#0056d2] cursor-pointer border border-gray-300 rounded" /> Apple</label>
            <label className="flex items-center gap-2.5 text-sm text-gray-600 mb-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#0056d2] cursor-pointer border border-gray-300 rounded" /> Samsung</label>
            <label className="flex items-center gap-2.5 text-sm text-gray-600 mb-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#0056d2] cursor-pointer border border-gray-300 rounded" /> Sony</label>
            <label className="flex items-center gap-2.5 text-sm text-gray-600 mb-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#0056d2] cursor-pointer border border-gray-300 rounded" /> Other</label>
            <label className="flex items-center gap-2.5 text-sm text-gray-600 mb-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#0056d2] cursor-pointer border border-gray-300 rounded" /> Others</label>
            <span className="flex items-center gap-1 text-[13px] text-gray-600 cursor-pointer mt-2.5"><ChevronDown size={14} /> More</span>
          </div>
          <hr className="border-t border-gray-100 my-5" />
          <div className="mb-5 last:mb-0">
            <h4 className="flex justify-between items-center text-[15px] font-semibold m-0 mb-4 text-gray-900">Price</h4>
            <input type="range" min="500" max="1500" className="w-full mb-2.5 accent-[#0056d2]" />
            <div className="flex justify-between text-[13px] text-gray-600 font-medium">
              <span>$500</span>
              <span>$1500+</span>
            </div>
          </div>
          <hr className="border-t border-gray-100 my-5" />
          <div className="mb-5 last:mb-0">
            <h4 className="flex justify-between items-center text-[15px] font-semibold m-0 mb-4 text-gray-900">Ratings <ChevronDown size={16} /></h4>
            <label className="flex items-center gap-2.5 text-sm text-gray-600 mb-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-[#0056d2] cursor-pointer border border-gray-300 rounded" /> <Star size={14} fill="#ffc107" color="#ffc107" /> 4+ Stars
            </label>
          </div>
          <hr className="border-t border-gray-100 my-5" />
          <div className="mb-5 last:mb-0">
            <h4 className="flex justify-between items-center text-[15px] font-semibold m-0 mb-4 text-gray-900">Availability <ChevronDown size={16} /></h4>
            <label className="flex items-center gap-2.5 text-sm text-gray-600 mb-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#0056d2] cursor-pointer border border-gray-300 rounded" /> No</label>
          </div>
        </aside>

        {/* Product Area */}
        <div className="flex-1">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500">
              Home &gt; Electronics &gt; <b className="text-gray-900 font-bold">Smartphones</b>
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-lg py-2 px-4 w-[320px]">
              <Search size={16} className="text-gray-400 mr-2" />
              <input type="text" placeholder="Search" className="border-none outline-none text-sm w-full text-gray-900 bg-transparent" />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
            {products?.data?.map((product) => (
              <div key={product.id} className="bg-white rounded-xl p-5 shadow-sm flex flex-col transition-all duration-200 border border-gray-100 hover:-translate-y-1 hover:shadow-md">
                <div className="h-[200px] flex items-center justify-center mb-4 bg-gray-50 rounded-lg p-2.5">
                  <img src={product.thumbnail} alt={product.title} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-[15px] font-medium text-gray-900 m-0 mb-2 leading-snug line-clamp-2">{product.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-0.5">
                      <Star size={14} fill="#ffc107" color="#ffc107" />
                      <Star size={14} fill="#ffc107" color="#ffc107" />
                      <Star size={14} fill="#ffc107" color="#ffc107" />
                      <Star size={14} fill="#ffc107" color="#ffc107" />
                      <Star size={14} fill="#ffc107" color="#ffc107" />
                    </div>
                    <span className="text-[13px] text-gray-600 font-medium">4.7</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-4 mt-auto">${product.price}</div>
                  <button className="w-full py-3 bg-transparent border border-[#0056d2] text-[#0056d2] text-sm font-semibold rounded-lg cursor-pointer transition-colors hover:bg-[#0056d2] hover:text-white">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-10 mb-4">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              Previous
            </button>
            <span className="text-sm font-medium text-gray-700">Page {page}</span>
            <button
              disabled={!products?.nextPage}
              onClick={() => setPage((p) => p + 1)}
              className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
