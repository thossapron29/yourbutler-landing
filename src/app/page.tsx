export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="flex flex-col items-center p-8 rounded-lg shadow-lg bg-white/80 dark:bg-gray-900/80 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          YourButler Application
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8 text-center">
          Coming Soon
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
          We’re working hard to bring you something amazing. Stay tuned for
          updates!
        </p>
      </div>
      <footer className="mt-12 text-gray-400 text-xs text-center">
        &copy; {new Date().getFullYear()} YourButler. All rights reserved.
      </footer>
    </div>
  );
}
