import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-lg shadow p-4 bg-white mb-4">
      <h3 className="text-xl font-semibold">{user.name}</h3>
      <p className="text-gray-700">Email: {user.email}</p>
      <p className="text-gray-500 text-sm">
        Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
