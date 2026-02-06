import Image from "next/image";
import { servicesData } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className=" min-h-screen px-6 py-30 ">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <span className="text-sm text-blue-500 font-medium">
                {service.type}
              </span>

              <h2 className="text-xl font-semibold mt-2">
                {service.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
