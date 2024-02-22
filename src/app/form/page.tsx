'use client';
import { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Query } from "../types/query.type";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function Form() {
  const [newAds, setNewAds] = useState<Query>({
    img_url: '',
    ads_name: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAds(prev => ({ ...prev, [name]: value }));
  };

  const addProposal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    const { data, error } = await supabase
      .from('ads')
      .insert([
        { img_url: newAds.img_url, ads_name: newAds.ads_name }
      ]);
    if (error) {
      console.error("Error inserting new ad:", error.message);
    } else {
      console.log("Ad successfully added:", data);
      // Optionally reset form or give feedback to user here
    }
  };
  return (
    <Layout>
      <div className='w-full md:w-2/3 lg:w-1/2 xl:w-2/3 m-auto'>
        <form onSubmit={addProposal} className='flex flex-col gap text-base md:text-xl m-auto bg-white p-8 mb-20 rounded-md shadow-lg'>
          <h1 className='text-2xl lg:text-4xl text-gray-700 font-bold text-center mb-6'>Create a custom ad</h1>
          <div className="mb-4">
            <label htmlFor="img_url" className='text-gray-700 text-sm block'>Ad Image URL</label>
            <input
              autoComplete='off'
              type="text"
              id="img_url"
              name="img_url"
              placeholder="Enter ad image URL"
              value={newAds.img_url}
              onChange={handleChange}
              className="input-field border border-gray-300 rounded-lg w-full p-2 mt-2 text-gray-700 text-sm"
            />
          </div>
          <div>
            <label htmlFor="ads_name" className='text-gray-700 text-sm block'>Ad Name</label>
            <input
              autoComplete='off'
              type="text"
              id="ads_name"
              name="ads_name"
              placeholder="Enter ad name"
              value={newAds.ads_name}
              onChange={handleChange}
              className="input-field border border-gray-300 rounded-lg w-full p-2 mt-2 text-gray-700 text-sm"
            />
          </div>
          <button
            type="submit"
            className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4'>
            Submit Ad
          </button>
          <Link href='/example-ad' legacyBehavior>
            <a className='text-center text-gray-500 text-sm underline hover:text-green-500 mt-4 block'>
              See an example ad
            </a>
          </Link>
        </form>
      </div>
    </Layout>
  );
}

export default Form;
