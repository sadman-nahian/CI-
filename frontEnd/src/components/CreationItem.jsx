import React, { useState } from "react";
import Markdown from "react-markdown"

const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="p-4 m-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer"
      onClick={() => setExpanded(!expanded)} // toggle on click
    >
     
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2>{item.prompt}</h2>
          <p className="text-gray-500">
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="bg-[#EFF6FF] border border-black-200 px-4 py-1 rounded-full">
          {item.type}
        </button>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="mt-3">
          {item.type === "image" ? (
            <div>
              <img
                src={item.content}
                className="w-full max-w-md rounded-lg object-contain"
              />
            </div>
          ) : (
            <div className="mt-3 h-full  overflow-y-scroll text-base leading-relaxed text-sm">
                <div >
                    <Markdown>{item.content}</Markdown>
                </div>
                
              
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItem;
