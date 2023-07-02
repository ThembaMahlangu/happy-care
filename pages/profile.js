import DashFooter from '@/components/FooterDash';
import React from 'react';
import Navbar from '@/components/NavBar';

const Profile = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    profilePicture: '/images/profile-picture.jpg',
    documents: [
      { id: 1, name: 'ID Document', file: '/documents/id_document.pdf' },
      { id: 2, name: 'Medical Certificate', file: '/documents/medical_certificate.pdf' },
      // Add more documents here
    ],
  };

  const handleProfilePictureUpload = (e) => {
    // Handle profile picture upload logic here
  };

  const handleDocumentUpload = (e) => {
    // Handle document upload logic here
  };

  const handleDocumentUpdate = (documentId) => {
    // Handle document update logic here
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center flex-col md:flex-row">
        <img src={user.profilePicture} alt="Profile" className="w-32 h-32 rounded-full border border-gray-300" />
        <div className="mt-4 md:mt-0 md:ml-4">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <label htmlFor="profilePicture" className="block mt-2 cursor-pointer text-blue-500">
            Upload Profile Picture
            <input
              id="profilePicture"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePictureUpload}
            />
          </label>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold">Uploaded Documents</h2>
        <ul className="mt-4 space-y-4">
          {user.documents.map((document) => (
            <li key={document.id} className="flex items-center justify-between p-4 border border-gray-300 rounded-md">
              <div className="flex items-center">
                <a href={document.file} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  {document.name}
                </a>
              </div>
              <div>
                <label htmlFor={`documentUpdate-${document.id}`} className="cursor-pointer text-blue-500">
                  Update
                  <input
                    id={`documentUpdate-${document.id}`}
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={() => handleDocumentUpdate(document.id)}
                  />
                </label>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <label htmlFor="documentUpload" className="block text-blue-500 cursor-pointer">
            Upload Document
            <input
              id="documentUpload"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleDocumentUpload}
            />
          </label>
        </div>
      </div>
    </div>
    <DashFooter />
    </>
  );
};

export default Profile;