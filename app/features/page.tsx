const features = [
  {
    title: "Create Tasks",
    desc: "Add new tasks easily to manage your daily work.",
  },
  {
    title: "Edit Tasks",
    desc: "Update task title or description anytime.",
  },
  {
    title: "Delete Tasks",
    desc: "Remove tasks that are no longer needed.",
  },
  {
    title: "Mark as Complete",
    desc: "Track your progress by completing tasks.",
  },
  {
    title: "Secure Login",
    desc: "Your tasks are private and protected.",
  },
  {
    title: "Cloud Storage",
    desc: "Your tasks are safely stored in database.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen px-6 py-30">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Features</h1>
        <p className="text-gray-500 mt-2">
          Everything you need to manage your tasks efficiently
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
