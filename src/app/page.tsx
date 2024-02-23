'use client';
import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/Layout';
import { AdBanner } from '@/app/components/AdBanner'; // Adjust the import path as needed
import { supabase } from '@/app/components/supabase'; // Adjust the import path as needed

export default function AdsPage() {
  const [homepageBanner, setHomepageBanner] = useState({ imgUrl: '', link: '' });
  const [homeCarre, setHomeCarre] = useState({ imgUrl: '', link: '' });
  const [articlePageBanner, setArticlePageBanner] = useState({ imgUrl: '', link: '' });
  const [newsletterBanner, setNewsletterBanner] = useState({ imgUrl: '', link: '' });

  useEffect(() => {
    const fetchAdImageUrlAndLink = async (size: string) => {
      const { data, error } = await supabase
        .from('ads')
        .select('img_url, ads_link')
        .eq('size', size)
        // If possible, order by random directly in your query to the database
        .order('id', { ascending: Math.random() > 0.5 }) // Example of adding randomness
        .limit(1)
        .single();

      if (error) {
        console.error('Error fetching ad:', error);
        return { imgUrl: 'default-placeholder-url', link: '#' };
      }

      const timestamp = new Date().getTime(); // Cache busting
      const imgUrl = `${data?.img_url}?t=${timestamp}`;

      return {
        imgUrl: imgUrl || 'default-placeholder-url',
        link: data?.ads_link || '#'
      };
    };

    fetchAdImageUrlAndLink('2272x454').then(info => setHomepageBanner(info));
    fetchAdImageUrlAndLink('374x374').then(info => setHomeCarre(info));
    fetchAdImageUrlAndLink('1136x227').then(info => setNewsletterBanner(info));
    fetchAdImageUrlAndLink('303x527').then(info => setArticlePageBanner(info));
  }, []);


  return (
    <Layout>
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">The Blog Times</h1>
      </header>
      <article className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Our Blog</h2>
        <p className="mb-4">Here’s a fascinating article about the wonders of the natural world...</p>
        <AdBanner title="Full-Width Homepage Banner" width={2272} height={454} imgUrl={homepageBanner.imgUrl} link={homepageBanner.link} style='max-w-full max-h-60 my-4' />
        <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
      </article>
      <div className="flex flex-col justify-between gap-32">
        <div className='flex w-full gap-12'>
          <AdBanner title="Homepage Square Banner" width={374} height={374} imgUrl={homeCarre.imgUrl} link={homeCarre.link} />
          <div>
            <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
            <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
            <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
            <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
            <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
            <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
          </div>
        </div>
        <div className='flex w-full justify-between'>
          <div>
            <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
            <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
            <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
            <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
            <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
            <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
          </div>
          <AdBanner title="Article Page Banner" width={303} height={527} imgUrl={articlePageBanner.imgUrl} link={articlePageBanner.link} />
        </div>
      </div>
      <article className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Another Insightful Piece</h2>
        <p className="mb-4">This article delves into the advancements in technology...</p>
        <AdBanner title="Newsletter Banner" width={1136} height={227} imgUrl={newsletterBanner.imgUrl} link={newsletterBanner.link} style='m-auto' />
      </article>
    </Layout>
  );
}
