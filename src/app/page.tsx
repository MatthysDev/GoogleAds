import Layout from '@/app/components/Layout';
import React from 'react';

interface AdBannerProps {
  title: string;
  width: string;
  height: string;
  bgColor?: string;
}



const AdBanner: React.FC<AdBannerProps> = ({ title, width, height, bgColor = 'bg-gray-100' }) => {
  return (
    <div
      role="banner"
      aria-label={`${title} Advertisement`}
      style={{ width, height }}
      className={`${bgColor} flex justify-center items-center m-4 border border-gray-200 shadow-lg`}
    >
      <span className="text-sm font-semibold">{title}</span>
    </div>
  );
};

export default function AdsPage() {
  return (
    <Layout>
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">The Blog Times</h1>
      </header>
      <article className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Our Blog</h2>
        <p className="mb-4">Here’s a fascinating article about the wonders of the natural world...</p>
        {/* <AdBanner title="Full-Width Homepage Banner" width="2272px" height="454px" /> */}
        <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
      </article>
      <div className="flex flex-wrap justify-between">
        <AdBanner title="Homepage Banner" width="374px" height="374px" bgColor="bg-blue-300" />
        <AdBanner title="Article Page Banner" width="303px" height="527px" bgColor="bg-green-300" />
      </div>
      <article className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Another Insightful Piece</h2>
        <p className="mb-4">This article delves into the advancements in technology...</p>
        <AdBanner title="Newsletter Banner" width="1136px" height="227px" bgColor="bg-yellow-300" />
      </article>
    </Layout >
  );
};
