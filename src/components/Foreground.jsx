import React, { useRef } from "react";
import { useState } from "react";
import Card from "./Card";


function Foreground() {

  const ref = useRef(null);
  const data = [
    {
      desc: "Test this is the description of text",
      filesize: ".9 mb",
      close: true,
      tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
        desc: "Test this is the description of text",
        filesize: ".9 mb",
        close: true,
        tagDetails: { isOpen: true, tagTitle: "Uplaod", tagColor: "green" },
      },
      {
        desc: "Test this is the description of text",
        filesize: ".9 mb",
        close: true,
        tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
      },
      {
        desc: "Test this is the description of text",
        filesize: ".9 mb",
        close: true,
        tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
      },
      {
        desc: "Test this is the description of text",
        filesize: ".9 mb",
        close: true,
        tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
      },
      {
        desc: "Test this is the description of text",
        filesize: ".9 mb",
        close: true,
        tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
      },
      {
        desc: "Test this is the description of text",
        filesize: ".9 mb",
        close: true,
        tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
      },
  ];

  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-7 flex-wrap p-5">
      
      {data.map((item , index)=>(
        <Card data={item} reference = {ref}/>
        
      ))
    }
    </div>
  );
}

export default Foreground;
