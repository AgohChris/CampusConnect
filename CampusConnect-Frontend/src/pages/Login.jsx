import React from "react";

const Login = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Connexion</h2>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full border px-3 py-2 rounded"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
