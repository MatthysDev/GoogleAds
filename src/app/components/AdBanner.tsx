import React, { useState } from 'react';
import Image from 'next/image';

interface AdBannerProps {
  title: string;
  width: number;
  height: number;
  bgColor?: string;
  imgUrl: string;
  style?: string;
  link: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({
  link,
  style,
  title,
  width,
  height,
  bgColor = 'bg-gray-100',
  imgUrl,
}) => {
  return (
    <div
      role="banner"
      aria-label={`${title} Advertisement`}
      className={`${bgColor} ${style} flex justify-center items-center border border-gray-200 shadow-lg cursor-pointer`}
      style={{ width, height }} // Use the isLoaded state to control visibility
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={imgUrl}
          alt={title}
          width={width}
          height={height}
        />
      </a>
    </div>

  );
};
