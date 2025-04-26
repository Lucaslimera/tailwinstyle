import { useState } from 'react';

export default function TailwindProfile() {
  const [user, setUser] = useState<any>(null);

  async function fetchUser() {
    const res = await fetch('https://api.github.com/users/github'); 
    const data = await res.json();
    setUser(data);
  }

  return (
    <div className="bg-gray-300 p-8 rounded-2xl text-center">
      <button
        onClick={fetchUser}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Buscar Usuário
      </button>
      {user && (
        <>
          <img
            src={user.avatar_url}
            alt="profile picture"
            className="w-24 h-24 rounded-full mx-auto bg-white"
          />
          <p className="my-4 border-b">{user.name}</p>
          <p className="my-4 border-b">{user.bio}</p>
          <p className="my-4 border-b">{user.public_repos}</p>
          <a
            href={user.html_url}
            target="_blank"
            className="inline-block bg-green-700 text-white px-4 py-2 rounded mt-4"
          >
            Perfil
          </a>
        </>
      )}
    </div>
  );
}
