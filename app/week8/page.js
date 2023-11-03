"use client";
import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import Home from "./shopping-list/page";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = () => {
    gitHubSignIn();
  };

  const handleSignOut = () => {
    firebaseSignOut();
  };

  return (
    <div className="bg-beige min-h-screen">
      {user ? (
        <div className="m-4 bg-beige min-h-screen">
          <h1 className="text-4xl font-bold m-6 text-center font-serif">
            Shopping List App
          </h1>
          <p>Signed in as {user.displayName} ({user.email}).</p>
          <button className="hover:underline" onClick={handleSignOut}>Sign out</button>
          <br/>
          <Link className="hover:underline" href="/week8/shopping-list">Continue to your Shopping List</Link>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white-50 max-w-xl bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold m-6 text-center font-serif">
              Shopping List App
            </h1>
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-200 text-xl m-2 p-2 rounded-lg hover:bg-gray-200 transition duration-300"
                onClick={handleSignIn}
              >
                Sign in with GitHub
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
