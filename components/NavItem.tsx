import React from "react";
import Image, { StaticImageData } from 'next/image';

interface NavItemProps {
  label: string;
  iconSrc: StaticImageData;
  isSelected: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, iconSrc, isSelected, onClick }) => (
  <li
    className={`flex h-12 items-center px-8 py-2 rounded cursor-pointer ${
      isSelected ? 'bg-[#C1C1D08C]' : 'hover:bg-[#C1C1D08C]'
    }`}
    onClick={onClick}
  >
    <div className="mr-2">
      <img src={iconSrc.src} alt={label} width={20} height={20} className={`w-5 h-5`} />
    </div>
    <span className={`${isSelected ? 'text-[#34347B]' : 'text-[#505064]'} font-semibold text-lg`}>
      {label}
    </span>
  </li>
);

export default NavItem;
