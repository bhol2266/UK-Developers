import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const courses = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'Master HTML, CSS, JavaScript, and React to build stunning websites from scratch.',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D',
    price: '2.99',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description:
      'Create high-performance apps for iOS and Android using Flutter or React Native.',
    image:
      'https://media.istockphoto.com/id/1195696110/photo/hands-using-mobile-payments-digital-marketing-banking-network-online-shopping-and-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=jRLDwI6fHep_ixS6SevZUSrk5tXkjxDGW5PnrZpved0=',
    price: '4.99',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description:
      'Learn the principles of great design. Create beautiful, user-friendly interfaces.',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VUklMkZVWCUyMERlc2lnbnxlbnwwfHwwfHx8Mg%3D%3D',
    price: '8.99',
  },
  {
    id: 'backend-dev',
    title: 'Backend Developments',
    description:
      'Build scalable backend systems using Node.js, Express, and databases like MongoDB.',
    image:
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '19.99',
  },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { courseId ,type} = router.query;

  const course = courses.find((c) => c.id === courseId);

  useEffect(() => {
    if (!courseId || !course) {
      router.push('/');
    }
  }, [courseId, course, router]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Enrolled in ${course?.title} successfully!`);
  };

  if (!course) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
        <p className="mb-4 text-gray-700">{course.description}</p>
        <p className="mb-2 text-gray-600">
          <strong>This course is specially crafted by top-tier developers and engineers.</strong>
        </p>
        <p className="mb-6 text-gray-600 font-semibold">Price: ₹{course.price}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Proceed to Payment
          </button>
        </form>

        <div className="mt-8 border-t pt-4 text-sm text-gray-600">
          A downloadable PDF version of this course will be sent to your registered email address after enrollment.
        </div>

        {/* Progress Bar */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Enrollment Progress</h3>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-blue-600 h-4 rounded-full w-2/3 transition-all duration-500 ease-in-out"></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">Step 2 of 3: Fill out your details</p>
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">What Our Students Say</h3>
          <div className="space-y-4">
            <blockquote className="border-l-4 pl-4 border-blue-600 italic text-gray-700">
              “This course changed my career! The content was super practical and easy to follow.”
              <div className="text-sm text-gray-500 mt-1">— Priya Sharma, Frontend Developer</div>
            </blockquote>
            <blockquote className="border-l-4 pl-4 border-blue-600 italic text-gray-700">
              “Highly recommended for beginners and even experienced developers. Great community too!”
              <div className="text-sm text-gray-500 mt-1">— Arjun Mehta, Mobile App Engineer</div>
            </blockquote>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-700">Will I get a certificate after completing the course?</h4>
              <p className="text-gray-600">
                Yes! A certificate of completion will be issued and emailed to you once you finish all course modules.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">How long will I have access to the course?</h4>
              <p className="text-gray-600">
                You’ll have lifetime access, including future updates at no extra cost.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Can I access the course offline?</h4>
              <p className="text-gray-600">
                Yes, a downloadable PDF version of the course will be sent to your email after enrollment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
