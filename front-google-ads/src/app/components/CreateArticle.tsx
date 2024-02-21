"use client"
import React, { useState } from 'react';
import axios from 'axios'; // Pour effectuer des requêtes HTTP

const CreateArticle: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            // Envoi de l'article au backend
            const response = await axios.post('URL_VERS_VOTRE_ENDPOINT_BACKEND', {
                title,
                description
            });

            console.log(response.data); // Gérer la réponse du serveur
            // Réinitialiser le formulaire après la réussite
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création de l\'article :', error);
        }
    };

    return (
        <div>
            <h2>Créer un nouvel article de blog</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Titre :</label>
                    <input 
                        type="text" 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                        className="border border-gray-400 rounded-md p-1 mb-2"
                    />
                </div>
                <div>
                    <label htmlFor="description">Description :</label>
                    <textarea 
                        id="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                        className="border border-gray-400 rounded-md p-1 mb-2"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Publier
                </button>
            </form>
        </div>
    );
};

export default CreateArticle;
