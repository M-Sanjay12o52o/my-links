import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-b from-purple-800 via-purple-700 to-gray-900 flex flex-col justify-center items-center">
        <h1 className="text-white text-9xl font-extrabold mb-6">
          Sanjay Achar
        </h1>
        <p className="text-white text-lg">
          Welcome to my portfolio website. I am passionate about...
        </p>
        <Footer />
      </div>
    </>
  );
}
