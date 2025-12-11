import { useState } from "react";
import type { LiveScoreMenu } from "../../../types";
import { Link } from "react-router-dom";
// Define the type for a single menu item


// Sample data for the menu
const menuItems: LiveScoreMenu[]= [
  { name: 'Details', href: '#' },
  { name: 'Odds', href: '#' },
  { name: 'Lineups', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Stats', href: '#' },
  { name: 'Standings', href: '#'}
];

const HorizontalScrollMenu = () => {
    const[activeItem, setActiveItem] = useState<string>('Details');
  return (
    // Outer container with horizontal scroll enabled
    <nav className="w-full overflow-x-auto border-b-[1px] border-[#292B41] scrollbar-hide">
      {/* 
        Inner container uses flexbox to keep items in one row.
        We can use arbitrary variant '::-webkit-scrollbar' to hide the scrollbar visually on Webkit browsers (Chrome, Safari, Edge).
      */}
      <ul className="flex flex-row gap-[16px] h-[39px] justify-center">
        {menuItems.map((item) => (
          <li key={item.name} className={`${item.name === activeItem?'border-b-[2px] border-[#00FFA5]':''}`}>
            <Link
              to={item.href}
              onClick={()=>setActiveItem(item.name)}
              className="text-[500] text-[14px] leading-[20px]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HorizontalScrollMenu;