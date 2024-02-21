import Image from "next/image";
import ButtonCreate from '../app/components/ButtonCreate';

export default function Home() {
  return (
    <main className="flex flex-wrap min-h-screen p-8 bg-gray-100">
      
      <div className="flex flex-1 flex-col items-center justify-center w-full lg:w-3/4 p-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Simple Page</h1>
        <p className="mb-6 text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </p>
        <p className="mb-6 text-lg text-gray-700">
          Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
        </p>
        <p className="text-lg text-gray-700">
          Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
        </p>
        <ButtonCreate/>     
      </div>
      <aside className="w-full lg:w-1/4 p-4">
        <div className="bg-white p-6 mb-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Ad Placement</h2>
          <p>This is a simulated Google Ads placement.</p>
        </div>
        <div className="bg-white p-6 mb-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Featured Promotion</h2>
          <p>Another Google Ads simulation with a twist.</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Special Offer</h2>
          <p>Yet another ad simulation with unique offers.</p>
        </div>
        
      </aside>
    </main>
  );
}
