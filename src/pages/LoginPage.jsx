import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import LoginButton from "../components/LoginButton";
import beachBg from "../assets/beach.png";
import seasideLogo from "../assets/seasidelogo.png";

function LoginPage() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <main
      className="relative min-h-screen w-full overflow-y-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${beachBg})` }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-screen flex-col px-4 py-8">
        <img
          src={seasideLogo}
          alt="Seaside Vouchers"
          className="mx-auto mb-6 w-[100px] object-contain md:absolute md:left-10 md:top-8 md:mx-0 md:mb-0 md:w-[100px]"
        />

        <div className="flex flex-1 items-center justify-center">
          <form
            onSubmit={handleLogin}
            className="w-full max-w-[480px] rounded-xl bg-[#10cbbb]/70 px-5 py-7 text-white shadow-2xl sm:px-6 md:mt-0"
          >
            <h1 className="mb-6 text-center text-3xl font-bold">Login</h1>

            <InputField
              label="Email Address"
              type="email"
              placeholder="Enter your email address"
              icon="✉"
            />

            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              icon="🔑"
            />

            <LoginButton text="Login" />
          </form>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;