// Import de Link depuis Next.js
import Link from 'next/link';

// Dans votre composant où se trouve le bouton "Ecrire un article"
const ButtonCreate: React.FC = () => {
  return (
    <div>
      {/* Utilisation de Link pour créer un lien vers la page d'écriture d'article */}
      <Link href="/createArticlePage">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ecrire un article
        </button>
      </Link>
    </div>
  );
};

export default ButtonCreate;