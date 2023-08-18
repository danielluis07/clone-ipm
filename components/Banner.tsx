"use client";

interface BannerProps {
  classname: string;
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ classname = "", children }) => {
  return <div className={`${classname}`}>{children}</div>;
};

export default Banner;
