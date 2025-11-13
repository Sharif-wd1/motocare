import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhoto, setNewPhoto] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setNewName(currentUser.displayName || "");
        setNewPhoto(currentUser.photoURL || "");
      } else {
        navigate("/signin");
      }
    });

    return () => unsub();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Sign out successful");
      setUser(null);
      navigate("/signin");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleProfileUpdate = async () => {
    if (!auth.currentUser) return toast.error("No user logged in");
    try {
      await updateProfile(auth.currentUser, {
        displayName: newName || auth.currentUser.displayName,
        photoURL: newPhoto || auth.currentUser.photoURL,
      });

      // UI update
      setUser({
        ...auth.currentUser,
        displayName: newName || auth.currentUser.displayName,
        photoURL: newPhoto || auth.currentUser.photoURL,
      });

      toast.success("Profile updated successfully");
      setEditMode(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F1F5E8]">
        <p className="text-[#627382]">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F5E8] px-4">
      {/* Card — same style as SignIn box */}
      <div className="w-full max-w-md backdrop-blur-xl bg-white/70 border border-[#001931]/10 shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#001931]">
          Your Profile
        </h2>

        <div className="text-center space-y-3">
          <img
            src={user.photoURL || "https://via.placeholder.com/100"}
            alt="profile"
            className="h-20 w-20 rounded-full mx-auto border-2  border-[#FF6600]"
          />
          <h3 className="text-xl font-semibold text-[#001931]">
            {user.displayName || "No Name"}
          </h3>
          <p className="text-sm text-[#627382]">{user.email}</p>
        </div>

        <hr className="my-5" />

        {/* Edit section (inline, same card feel) */}
        {editMode ? (
          <div className="space-y-3">
            <label className="block text-sm text-[#001931]">Name</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full text-[#001931] px-4 py-2 rounded-md border border-[#C7D0D9] focus:outline-none focus:ring-2 focus:ring-[#627382]"
            />

            <label className="block text-sm text-[#001931]">Photo URL</label>
            <input
              type="text"
              value={newPhoto}
              onChange={(e) => setNewPhoto(e.target.value)}
              className="w-full text-[#001931] px-4 py-2 rounded-md border border-[#C7D0D9] focus:outline-none focus:ring-2 focus:ring-[#627382]"
            />

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleProfileUpdate}
                className="flex-1 bg-[#001931] text-white py-2 rounded-md hover:bg-[#23354A] transition"
              >
                Save
              </button>
              <button
                onClick={() => {
                  // reset fields to current user values and exit edit mode
                  setNewName(user.displayName || "");
                  setNewPhoto(user.photoURL || "");
                  setEditMode(false);
                }}
                className="flex-1 bg-gray-200 text-[#001931] py-2 rounded-md hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <button
              onClick={() => setEditMode(true)}
              className="w-full bg-[#23354A] text-white py-2 rounded-md hover:bg-[#1d2b36] transition"
            >
              Edit Profile
            </button>

            {/* <button
              onClick={handleSignOut}
              className="w-full mt-2 bg-[#001931] text-white py-2 rounded-md hover:bg-[#23354A] transition"
            >
              Sign Out
            </button> */}

            {/* <button
              onClick={() => navigate("/")}
              className="w-full mt-3 bg-gray-200 text-[#001931] py-2 rounded-md hover:bg-gray-300 transition"
            >
              Back to Home
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;


