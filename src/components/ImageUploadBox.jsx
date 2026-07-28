function ImageUploadBox({ label }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-28 w-36 items-center justify-center rounded-xl bg-white">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-400 text-2xl text-white">
          +
        </button>
      </div>

      <p className="mt-2 text-xs text-gray-400">{label}</p>
    </div>
  );
}

export default ImageUploadBox;