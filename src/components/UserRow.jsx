import StatusBadge from "./StatusBadge";

function UserRow({ user }) {
  return (
    <div className="group cursor-pointer border-b border-gray-200 p-4 transition-all duration-300 hover:bg-gray-50 hover:shadow-md md:grid md:grid-cols-4 md:items-center md:px-8 md:py-5">
      <div className="flex items-center gap-3">
        <img
          src={user.logo}
          alt={user.businessName}
          className="h-12 w-12 rounded-full border object-cover"
        />

        <div>
          <h3 className="text-base font-bold text-black">
            {user.businessName}
          </h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      <p className="mt-3 text-sm text-black md:mt-0 md:text-center">
        <span className="font-semibold md:hidden">Contact: </span>
        {user.contactName}
      </p>

      <p className="mt-2 text-sm text-black md:mt-0 md:text-center">
        <span className="font-semibold md:hidden">Phone: </span>
        {user.phone}
      </p>

      <div className="mt-3 md:mt-0 md:flex md:justify-center">
        <StatusBadge status={user.status} />
      </div>
    </div>
  );
}

export default UserRow;