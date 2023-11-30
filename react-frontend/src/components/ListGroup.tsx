import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div className="text-center text-xl pt-2">
        <h1>{heading}</h1>
      </div>
      <div className="mx-auto items center flex p-5 justify-center">
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {items.length === 0 && <p className="text-center">No item found</p>}
          {items.map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
              className={
                selectedIndex === index
                  ? "w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 bg-slate-100 text-black"
                  : "w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
