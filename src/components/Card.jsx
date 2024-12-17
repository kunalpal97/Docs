import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { HiOutlineDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion, useSpring } from "framer-motion"

function Card({ data , reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.1} dragTransition={{bounceStiffness: 100 , bounceDamping : 50}} className=" relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/80 text-white px-5 py-7 overflow-hidden">
      <LuFileSpreadsheet />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full  left-0">
        <div className="flex items-center justify-between px-8 mb-3 py-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <HiOutlineDownload size="0.7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tagDetails.isOpen && (
          <div className={`tag w-full ${data.tagDetails.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-4 flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tagDetails.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
