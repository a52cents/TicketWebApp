import React, { useState } from "react";
import { useToast } from "@/components/ui/toast";

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { showToast } = useToast();

  const validateForm = () => {
    if (!email.trim()) {
      showToast({
        type: "error",
        message: "Email est requis",
        title: "Erreur",
      });
      return false;
    }

    // Validation email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast({
        type: "error",
        message: "Format d'email invalide",
        title: "Erreur",
      });
      return false;
    }

    if (!password) {
      showToast({
        type: "error",
        message: "Mot de passe est requis",
        title: "Erreur",
      });
      return false;
    }

    if (!isLogin && !name.trim()) {
      showToast({
        type: "error",
        message: "Nom est requis pour l'inscription",
        title: "Erreur",
      });
      return false;
    }

    if (!isLogin && password.length < 6) {
      showToast({
        type: "error",
        message: "Le mot de passe doit contenir au moins 6 caractères",
        title: "Erreur",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (isLogin) {
      console.log("Login attempt with:", { email, password });
      // Login logic would go here
      // Simulons une réponse réussie
      showToast({
        type: "success",
        message: "Connexion réussie!",
        title: "Succès",
      });
    } else {
      console.log("Register attempt with:", { name, email, password });
      // Registration logic would go here
      // Simulons une réponse réussie
      showToast({
        type: "success",
        message: "Inscription réussie!",
        title: "Succès",
      });
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full px-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h1>

        <div className="mb-6">
          <div className="flex border-b">
            <button
              className={`py-2 px-4 w-1/2 text-center ${
                isLogin ? "border-b-2 border-[#1A79B5] font-medium" : ""
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`py-2 px-4 w-1/2 text-center ${
                !isLogin ? "border-b-2 border-[#1A79B5] font-medium" : ""
              }`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLogin}
              />
            </div>
          )}

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-[#1A79B5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
