export function FeaturesSection() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm font-semibold tracking-wide text-red-500">
            SOLUTION
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl">
          Exchanging Skills Should Be as Simple as Sharing Knowledge.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col gap-8 p-10 pb-0">
          {/* Advanced AI Algorithms */}
          <div className="flex gap-10 flex-col md:flex-row">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-pink-500 font-semibold text-lg mb-3">
              Skill Exchange System
              </h3>
              <p className="text-gray-600 mb-4">
              People can trade their skills (e.g., teach coding in exchange for learning photography). No money involved, just skill for skill.
              </p>
              <div className="bg-gray-100 rounded-lg p-4 h-48">
                {/* Placeholder for image/illustration */}
              </div>
            </div>

            {/* Secure Data Handling */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-pink-500 font-semibold text-lg mb-3">
              Search and Match
              </h3>
              <p className="text-gray-600 mb-4">
              A smart feature that helps users find people offering the skills they want to learn or looking for the skills they can teach.
              </p>
              <div className="bg-gray-100 rounded-lg p-4 h-48">
                {/* Placeholder for image/illustration */}
              </div>
            </div>

            {/* Seamless Integration */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-pink-500 font-semibold text-lg mb-3">
              Reviews and Ratings
              </h3>
              <p className="text-gray-600 mb-4">
              Users can leave feedback after an exchange, helping everyone find reliable and skilled partners.

              </p>
              <div className="bg-gray-100 rounded-lg p-4 h-48">
                {/* Placeholder for image/illustration */}
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-pink-500 font-semibold text-lg mb-3">
                Flexible Scheduling
                </h3>
                <p className="text-gray-600 mb-4">
                Users can set their own availability, making it easy to learn and share skills whenever it suits them.
                </p>
                <div className="bg-gray-100 rounded-lg p-4 h-48">
                  {/* Placeholder for image/illustration */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customizable Solutions */}
      </div>
    </div>
  );
}
