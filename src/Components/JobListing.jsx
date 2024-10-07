import { data } from "../data";
import header from "../assets/bg-header-desktop.svg";
import headerMobile from "../assets/bg-header-mobile.svg";
import { useState } from "react";
import clear from "../images/icon-remove.svg"

const JobListing = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (tagToRemove) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
  };

  const clearTags = () => {
    setSelectedTags([]);
  };

  const filteredJobs =
    selectedTags.length > 0
      ? data.filter((job) => {
          const tags = [job.role, job.level, ...job.languages, ...job.tools];
          return selectedTags.some((tag) => tags.includes(tag));
        })
      : data;

  return (
    <div>
      <img src={header} className="w-full h-fit bg-header hidden md:block" alt="" />
      <img src={headerMobile} className="w-full hidden max-sm:block bg-header h-[7rem]" alt="" />

      <div className="relative">
        {selectedTags.length > 0 && (
          <div className="bg-white w-[70%] p-5 max-sm:px-1.5 rounded-md shadow-lg flex flex-wrap lg:gap-4 items-center mx-auto -mt-4">
            {selectedTags.map((tag, index) => (
              <div
                key={index}
                className="bg-background text-filter ml-3 my-1.5 rounded-md flex items-center font-bold text-lg"
              >
                <span className="px-2">{tag}</span>
                <button onClick={() => removeTag(tag)} className=" bg-header hover:bg-featured px-1.5 py-1.5 ml-1 rounded-r-md">
                  <img src={clear} alt=""/>
                </button>
              </div>
            ))}
            <button onClick={clearTags} className="text-black text-lg ml-auto hover:text-filter hover:underline">
              Clear
            </button>
          </div>
        )}
      </div>

      {filteredJobs.map((datas, job) => (
        <div
          key={job}
          className={`bg-white lg:w-[70%] max-sm:w-5/6 flex items-center justify-center mx-auto my-10 p-6 shadow-xl rounded-md max-sm:flex-col max-sm:items-start max-sm:relative
            ${job < 2 ? "border-l-4 border-filter" : ""}`}
         >
          <img
            src={datas.logo}
            alt={datas.company}
            className="flex items-center max-sm:w-12 max-sm:h-12 max-sm:-mt-10"
          />
          <div className="flex-col flex-grow flex max-sm:flex-grow-0 lg:ml-4">
            <div className="">
              <span className="lg:text-lg mt-2 font-semibold text-filter font-customFont">
                {datas.company}
              </span>
              {datas.new && (
                <span className="text-white bg-filter px-2 py-1.5 rounded-xl ml-2 text-sm font-semibold font-customFont">
                  NEW!
                </span>
              )}
              {datas.featured && (
                <span className="text-white bg-featured px-2 py-1.5 rounded-xl ml-2 text-sm font-semibold font-customFont">
                  FEATURED
                </span>
              )}
            </div>
            <div className="font-customFont font-bold lg:text-xl inline-block mt-1 hover:text-filter cursor-pointer">
              {datas.position}
            </div>
            <div className="flex text-[#7b8e8e] font-customFont text-lg mt-1">
              <span className="text-">{datas.postedAt}</span>
              <span>&nbsp;•&nbsp;</span>
              <span className="text-">{datas.contract}</span>
              <span>&nbsp;•&nbsp;</span>
              <span className="text-">{datas.location}</span>
            </div>
          </div>
          <div className="w-full mt-2 block md:hidden border-b border-gray-300"></div>

          <div className="flex flex-wrap gap-3 max-sm:mt-3">
            {[datas.role, datas.level, ...datas.languages, ...datas.tools].map(
              (tag, tagIndex) => (
                <span
                  key={tagIndex}
                  onClick={() => handleTagClick(tag)}
                  className="bg-background hover:bg-filter hover:text-white text-filter text-lg font-semibold rounded-md cursor-pointer px-3 py-1"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobListing;
