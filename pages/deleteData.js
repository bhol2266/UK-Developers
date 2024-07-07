import { useState } from "react";

const DeleteData = () => {
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setmessageColor] = useState("red");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setMessage("");
    setmessageColor("red");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(selectedOption);
    if (!selectedOption) {
      setMessage("Please select Yes or no");
      return;
    }

    if (emailValidator(email)) {
      if (!message) {
        setmessageColor("green");

        if (selectedOption == "yes") {
          setMessage(
            "We received your message. Your data will be deleted in 10 days automatically."
          );
          setmessageColor("green");

        }else{
            setMessage(
                "We received your message. Your Data will be safe with us."
              );
              setmessageColor("green");

        }

        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } else {
        setMessage("We already received your message.");
        setmessageColor("red");

      }
    } else {
      setMessage("Please enter a valid email address.");
      setmessageColor("red");

    }
  };

  const emailValidator = (email) => {
    // A simple email validation regex (not perfect, but good enough for this example)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold mb-6">Desi Girls Live Video Chat</h1>
      <h1 className="text-2xl font-bold mb-6">Delete Your Data </h1>

      <form className="flex flex-col items-center">
        <label className="text-xl mb-4">Do you want to delete your data?</label>
        <div className="flex items-center mb-8">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="yes"
              checked={selectedOption === "yes"}
              onChange={handleOptionChange}
              className="form-radio h-6 w-6 text-blue-500"
            />
            <span className="ml-2 text-lg">Yes</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="no"
              checked={selectedOption === "no"}
              onChange={handleOptionChange}
              className="form-radio h-6 w-6 text-blue-500"
            />
            <span className="ml-2 text-lg">No</span>
          </label>
        </div>
        <label className="text-xl mb-4">Enter your email:</label>
        <input
          className="border rounded p-3 mb-8 text-xl"
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="you@example.com"
        />
        <button
          className="border rounded p-3 bg-blue-500 text-white text-xl font-semibold"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        {loading && (
          <div className="animate-spin">
            {/* Replace this with your spinner component or use Tailwind CSS spinner classes */}
            <svg
              className="w-6 h-6 border-t-4 border-blue-500 border-solid rounded-full animate-spin"
              viewBox="0 0 24 24"
            ></svg>
          </div>
        )}

        {message && !loading && (
          <p
            style={{ color: messageColor }}
            className={` text-center text-xl `}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default DeleteData;
