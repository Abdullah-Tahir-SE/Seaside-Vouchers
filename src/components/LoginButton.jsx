function LoginButton({ text }) {
  return (
    <button
      type="submit"
      className="mt-6 w-full h-11 bg-orange-400 rounded-full text-white font-bold hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(251,162,53,0.5)] active:scale-95 transition-all duration-300 ease-out transition duration-300"
    >
      {text}
    </button>
  );
}

export default LoginButton;