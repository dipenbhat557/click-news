import { useLocation, useNavigate } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import BreakingNews from "../components/BreakingNews";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";
import { news } from "../constants";
import { rtop } from "../assets";
import { styles } from "../styles";
import { IoShareSocialOutline } from "react-icons/io5";
const AfterNews = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const recentNews = news?.filter((n) => n?.stat === "recent");
  return (
    <>
      <div className="w-full h-[550px] relative">
        <div className="w-full h-full bg-black opacity-20 absolute" />
        <img
          src={location?.state?.news?.img}
          alt="news image"
          className="w-full h-full object-cover"
        />
        <RxCrossCircled
          onClick={() => navigate(-1)}
          className="text-5xl bg-[#04594D] rounded-full text-white absolute top-9 right-9 "
        />
      </div>
      <div className={` ${styles.padding} w-full h-auto flex flex-col gap-4 `}>
        <div className="w-full h-auto flex justify-around">
          <div className="w-[60%] h-auto flex flex-col gap-8">
            <p className="text-[26px] tracking-wider font-serif font-semibold">
              {location?.state?.news?.title}
            </p>
            <div className="flex gap-8 tracking-wide text-[14px] justify-between">
              <div className="w-auto flex gap-9">
                <p>By {location?.state?.news?.author}</p>
                <p>{location?.state?.news?.date}</p>
              </div>
              <IoShareSocialOutline
                onClick={() =>
                  (window.location.href = location?.state?.news?.img)
                }
                className="cursor-pointer text-3xl bg-slate-200 rounded-full p-1"
              />
            </div>
            <div
              className={`w-full font-medium h-auto border rounded-xl border-slate-400 leading-loose  ${styles.padding}`}
            >
              {location?.state?.news?.content}
            </div>
          </div>
          <div className="w-[35%] border border-black p-2 h-[650px] overflow-y-scroll flex flex-col gap-1">
            <div className="w-full h-[70px] flex gap-2">
              <img
                src={rtop}
                alt="recent top"
                className="w-[10%] h-[50%] object-contain"
              />
              <div className="text-white font-serif flex items-center justify-center text-[22px] h-[50%] w-[80%] rounded-lg bg-[#04594D]">
                Recent Updates
              </div>
            </div>
            <div className="flex w-full flex-col h-auto gap-2 ">
              {recentNews?.map((r, i) => {
                return (
                  <div
                    key={i}
                    onClick={() =>
                      navigate("/news/after", { state: { news: r } })
                    }
                    className="cursor-pointer w-[95%] h-[110px]  flex gap-2 shadow-sm  shadow-zinc-500"
                  >
                    <div className="w-[30%] h-[85%] relative">
                      <img
                        src={r?.img}
                        alt="img"
                        className="w-full h-full object-cover"
                      />
                      <div className="text-white text-[10px] right-0 top-0 rounded-bl-lg absolute px-1 py-1 bg-[#04594D]">
                        #{r?.category}
                      </div>
                    </div>
                    <div className="w-[65%] flex flex-col gap-1 justify-center">
                      <p className="line-clamp-1 text-[14px] font-serif">
                        {r?.title}
                      </p>
                      <p className="text-[#04594D] leading-4 text-[12px] line-clamp-3 font-serif">
                        {r?.content}
                      </p>
                      <div className=" text-[10px] gap-3 flex  ">
                        <p> By {r?.author}</p>
                        <p>{r?.date}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-[#8E4042] text-white font-semibold w-[25%] mx-auto py-2"
        >
          Back to Home Page
        </button>
      </div>
      <BreakingNews bgColor="#04594D" />
      <Subscription />
      <Footer />
    </>
  );
};
export default AfterNews;