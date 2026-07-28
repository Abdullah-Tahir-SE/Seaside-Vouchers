import UserRow from "./UserRow";

function UserTable({ users }) {
  return (
    <div className="mt-6 overflow-hidden rounded-3xl bg-white">
      <div className="hidden grid-cols-4 bg-gray-100 px-8 py-5 text-lg font-semibold md:grid">
        <h2>Business Name</h2>
        <h2 className="text-center">Contact Name</h2>
        <h2 className="text-center">Phone Number</h2>
        <h2 className="text-center">Status</h2>
      </div>

      {users.map((user, index) => (
        <UserRow key={index} user={user} />
      ))}
    </div>
  );
}

export default UserTable;