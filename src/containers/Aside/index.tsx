'use client';
import cn from 'classnames';

import CCard from '@/components/CCard';
import SquareHalf from '@/assets/SquareHalf';
import CNavLink from '@/components/CNavLink';
import { navLinks } from '@/constants/navbarLinks';

type AsideProps = {
  className: string;
  isMinimized: boolean;
  onMinimized: () => void;
};

const Aside = ({ isMinimized, onMinimized, className }: AsideProps) => {
  return (
    <CCard
      className={cn(
        className,
        `desktop:relative mobile:fixed mobile:bottom-0 
        mobile:h-16 mobile:right-0 mobile:left-0 overflow-hidden 
        mobile:rounded-none mobile:border-b-0 z-[999] px-[15px] py-[19px] mobile:p-0                     
        ${
          isMinimized
            ? 'basis-[80px] transition-all duration-500'
            : 'basis-[24%] lg:basis-[20%] transition-all duration-500'
        }`,
      )}
      borderColor="rgba(5, 1, 66, 0.10)"
      bgColor="white"
    >
      <aside
        className="mobile:!bg-white overflow-hidden mobile:h-16 flex flex-col
      mobile:flex-row  mobile:w-full mobile:items-center"
      >
        <div className="cursor-pointer select-none mobile:hidden ml-[10px]" onClick={onMinimized}>
          <SquareHalf />
        </div>
        <hr className="mt-[18px] mb-3 mobile:hidden border-[#0501421A] " />
        <div className="desktop:space-y-1 mobile:flex mobile:flex-row mobile:justify-around mobile:w-full">
          {navLinks.map((item) => (
            <div key={item.title}>
              <CNavLink {...item} isMinimized={isMinimized} />
            </div>
          ))}
        </div>
      </aside>
    </CCard>
  );
};

export default Aside;
