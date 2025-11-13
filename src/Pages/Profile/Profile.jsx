import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

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
      toast.success("Signed out successfully");
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

      // update UI instantly
      setUser({
        ...auth.currentUser,
        displayName: newName || auth.currentUser.displayName,
        photoURL: newPhoto || auth.currentUser.photoURL,
      });

      toast.success("Profile updated successfully ✨");
      setEditMode(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F1F5E8]">
        <p className="text-[#627382] text-lg animate-pulse">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FBF5] via-[#F1F5E8] to-[#E8EEE1] px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-[#001931]/10 shadow-2xl rounded-2xl p-8 text-center"
      >
       
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold mb-6 text-[#001931]"
        >
          Your Profile
        </motion.h2>

       
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="text-center space-y-3"
        >
          <img
            src={user.photoURL || "https://via.placeholder.com/120"}
            alt="profile"
            className="h-24 w-24 rounded-full mx-auto border-4 border-[#FF6600] shadow-md object-cover"
          />
          <h3 className="text-xl font-semibold text-[#001931]">
            {user.displayName || "No Name"}
          </h3>
          <p className="text-sm text-[#627382]">{user.email}</p>
        </motion.div>

        <hr className="my-6 border-[#C7D0D9]" />

      
        {editMode ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="text-left">
              <label className="block text-sm font-medium text-[#001931] mb-1">
                Name
              </label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full text-[#001931] px-4 py-2 rounded-md border border-[#C7D0D9] focus:outline-none focus:ring-2 focus:ring-[#FF6600]"
              />
            </div>

            <div className="text-left">
              <label className="block text-sm font-medium text-[#001931] mb-1">
                Photo URL
              </label>
              <input
                type="text"
                value={newPhoto}
                onChange={(e) => setNewPhoto(e.target.value)}
                className="w-full text-[#001931] px-4 py-2 rounded-md border border-[#C7D0D9] focus:outline-none focus:ring-2 focus:ring-[#FF6600]"
              />
            </div>

            <div className="flex gap-3 mt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleProfileUpdate}
                className="flex-1 bg-[#001931] text-white py-2 rounded-md font-semibold hover:bg-[#223043] transition"
              >
                Save Changes
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  setNewName(user.displayName || "");
                  setNewPhoto(user.photoURL || "");
                  setEditMode(false);
                }}
                className="flex-1 bg-gray-200 text-[#001931] py-2 rounded-md font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setEditMode(true)}
              className="w-full bg-[#FF6600] text-white py-2 rounded-md font-semibold shadow-md hover:bg-[#e75b00] transition"
            >
              Edit Profile
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSignOut}
              className="w-full bg-[#001931] text-white py-2 rounded-md font-semibold shadow-md hover:bg-[#223043] transition"
            >
              Sign Out
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Profile;
