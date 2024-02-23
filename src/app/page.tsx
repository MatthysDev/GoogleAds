'use client';
import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/Layout'; // Adjust the import path as needed
import { AdBanner } from '@/app/components/AdBanner'; // Adjust the import path as needed
import { supabase } from '@/app/components/supabase'; // Adjust the import path as needed

export default function AdsPage() {
  const [homepageBannerUrl, setHomepageBannerUrl] = useState('');
  const [homeCarreUrl, setHomeCarreUrl] = useState('');
  const [articlePageBannerUrl, setArticlePageBannerUrl] = useState('');
  const [newsletterBannerUrl, setNewsletterBannerUrl] = useState('');

  useEffect(() => {
    const fetchAdImageUrl = async (size: string) => {
      const { data, error } = await supabase
        .from('ads')
        .select('img_url')
        .eq('size', size)
        .order('id', { ascending: false }) // This assumes newer entries might be a good candidate for "random" selection
        .limit(1)
        .single();

      if (error) {
        console.error('Error fetching ad image:', error);
        return '';
      }

      return data?.img_url;
    };

    // Fetch and set ad image URLs
    fetchAdImageUrl('2272x454').then(url => setHomepageBannerUrl(url || 'default-placeholder-url'));
    fetchAdImageUrl('374x374').then(url => setHomeCarreUrl(url || 'default-placeholder-url'));
    fetchAdImageUrl('1136x227').then(url => setNewsletterBannerUrl(url || 'default-placeholder-url'));
    fetchAdImageUrl('303x527').then(url => setArticlePageBannerUrl(url || 'default-placeholder-url'));
  }, []);

  return (
    <Layout>
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">The Blog Times</h1>
      </header>
      <article className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Our Blog</h2>
        <p className="mb-4">Here’s a fascinating article about the wonders of the natural world...</p>
        {/* Use fetched URLs here */}
        <AdBanner title="Full-Width Homepage Banner" imgUrl={homepageBannerUrl} />
        <p className="mb-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...</p>
      </article>
      <div className="flex flex-wrap justify-between">
        <AdBanner title="Homepage Banner" width="374px" height="374px" bgColor="bg-blue-300" imgUrl={homeCarreUrl} />
        <AdBanner title="Article Page Banner" width="303px" height="527px" bgColor="bg-green-300" imgUrl={articlePageBannerUrl} />
      </div>
      <article className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Another Insightful Piece</h2>
        <p className="mb-4">This article delves into the advancements in technology...</p>
        <AdBanner title="Newsletter Banner" width="1136px" height="227px" bgColor="bg-yellow-300" imgUrl={newsletterBannerUrl} style='mx-auto' />
      </article>
    </Layout>
  );
}
