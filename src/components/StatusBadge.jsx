function StatusBadge({ status }) {
  const isActive = status === "Active";

  return (
    <span
      className={`rounded-full border px-5 py-1 text-sm ${
        isActive
          ? "border-green-400 bg-green-100 text-green-600"
          : "border-red-400 bg-red-100 text-red-600"
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;