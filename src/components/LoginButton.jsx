function LoginButton({ text }) {
  return (
    <button
      type="submit"
      className="mt-6 w-full h-11 bg-orange-400 rounded-full text-white font-bold hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-300 transition duration-300"
    >
      {text}
    </button>
  );
}

export default LoginButton;