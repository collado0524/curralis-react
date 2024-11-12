import { useState } from 'react';
import { User, Lock, Mail, Check } from 'lucide-react';

interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const [signUpData, setSignUpData] = useState<SignUpData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpData({ ...signUpData, [name]: value });
    if (name === 'confirmPassword') {
      setPasswordsMatch(signUpData.password === value);
    }
  };

  const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (passwordsMatch && termsAccepted) {
      console.log(signUpData);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-12 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-900">Sign Up</h2>
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="flex flex-col mb-4">
          <label className="text-gray-700" htmlFor="name">
            Name
          </label>
          <div className="relative">
            <User className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
            <input
              id="name"
              name="name"
              type="text"
              value={signUpData.name}
              onChange={handleInputChange}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <Mail className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
            <input
              id="email"
              name="email"
              type="email"
              value={signUpData.email}
              onChange={handleInputChange}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="john.doe@example.com"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <Lock className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
            <input
              id="password"
              name="password"
              type="password"
              value={signUpData.password}
              onChange={handleInputChange}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={signUpData.confirmPassword}
              onChange={handleInputChange}
              className={`pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-blue-500 ${
                passwordsMatch ? 'border-gray-200' : 'border-red-500'
              }`}
              placeholder="Confirm Password"
            />
            {passwordsMatch && (
              <Check className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-3 text-green-500" />
            )}
          </div>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            checked={termsAccepted}
            onChange={handleTermsChange}
            className="mr-2"
          />
          <label className="text-gray-700" htmlFor="terms">
            I accept the terms and conditions
          </label>
        </div>
        <button
          type="submit"
          className={`w-full py-2 rounded-lg text-white ${
            passwordsMatch && termsAccepted ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
          }`}
          disabled={!passwordsMatch || !termsAccepted}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;