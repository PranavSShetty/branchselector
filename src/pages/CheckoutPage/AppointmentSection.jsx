import SurePass from "../assets/SurePassLogo.jpeg";
import Img from "../assets/bookAppointment.svg";
import { useState } from "react";
import { toast } from "react-toastify";

// Simple form for booking appointments via WhatsApp
function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    selectedDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello! I would like to book an appointment.
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone Number: ${formData.phoneNumber}
Preferred Date: ${formData.selectedDate}
> Source: BranchSelector Website
    ` ;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "918951511111"; // replace with your number

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`
      : `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp to send your booking request!");
  };

  return (
    <main className="py-0 my-8 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:p-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none lg:mr-20">
          <div className="flex flex-col p-4 md:p-1">
            <div className="max-w-lg space-y-3">
              <p className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Ready to take the next step towards your future success?
              </p>
              <p>
                Our expert counselors from SurePass are here to guide you
                towards the educational courses that best align with your career
                aspirations.
              </p>
            </div>

            <img
              src={Img}
              alt="illustration"
              className="hidden md:flex w-48 ml-56"
            />

            <div className="hidden md:block">
              <p className="font-semibold text-sm">Counselling Partner,</p>
              <div className="flex">
                <img src={SurePass} alt="sure pass logo" className="w-40" />
                <p className="w-48 text-[0.6rem] py-2">
                  9, II, Manasa Tower, PVS Junction, Kodailbail, Mangaluru,
                  Karnataka 575003
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white flex-1 sm:max-w-lg lg:max-w-md shadow-lg border rounded-md px-6 lg:pt-2">
            <form onSubmit={handleSubmit} className="space-y-3 py-6 md:py-2">
              <p className="font-bold text-lg">Book Appointment</p>

              <div>
                <label className="font-medium text-sm text-gray-500">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-1 px-3 py-1 text-gray-500 outline-none border bg-white shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-sm text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-1 px-3 py-1 text-gray-500 outline-none border bg-white shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-sm text-gray-500">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-1 px-3 py-1 text-gray-500 outline-none border bg-white shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-sm text-gray-500">
                  Select Date
                </label>
                <input
                  type="datetime-local"
                  name="selectedDate"
                  value={formData.selectedDate}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-1 px-3 py-1.5 text-gray-500 outline-none border bg-white shadow-sm rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 rounded-lg"
              >
                Book Appointment
              </button>

              <p className="mt-3 text-xs font-medium text-center">
                We will reach out to you to confirm the appointment date
              </p>
            </form>
          </div>

          <div className="md:hidden mt-5">
            <p className="font-bold text-sm">Counselling Partner,</p>
            <div className="flex">
              <img src={SurePass} alt="sure pass logo" className="w-40" />
              <p className="w-48 text-[0.6rem] py-2">
                9, II, Manasa Tower, PVS Junction, Kodailbail, Mangaluru,
                Karnataka 575003
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BookingPage;
