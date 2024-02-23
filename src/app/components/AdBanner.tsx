interface AdBannerProps {
  title: string;
  width: string;
  height: string;
  bgColor?: string;
  imgUrl: string; // New prop for the image URL
}

export const AdBanner: React.FC<AdBannerProps> = ({ title, width, height, bgColor = 'bg-gray-100', imgUrl }) => {
  return (
    <div
      role="banner"
      aria-label={`${title} Advertisement`}
      style={{ width, height }}
      className={`${bgColor} flex justify-center items-center m-4 border border-gray-200 shadow-lg`}
    >
      <img src={imgUrl} alt={title} className="object-cover" style={{ width, height }} />
    </div>
  );
};
