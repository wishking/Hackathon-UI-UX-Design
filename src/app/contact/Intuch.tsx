import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Intuch: React.FC = () => {
    return (
        <section className="bg-white py-16 px-6 lg:px-20">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Contact Information */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Get In Touch With Us</h2>
                    <p className="text-gray-600 ">
                        For More Information About Our Product & Services, Please Feel Free To Drop Us
                        An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    </p>
                    {/* Address */}
                    <div className="items-start space-x-4">
                        <div className="text-yellow-500 text-xl">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="flex gap-4">
                            <IoLocationSharp className="h-6" />
                            <h3 className="font-medium text-gray-800 space-x-2"> Address</h3>
                        </div>
                        <div>
                            <p className="text-gray-600 ml-7">
                                236 5th SE Avenue, New York NY10000, United States
                            </p>
                        </div>

                    </div>
                    {/* Phone */}
                    <div className=" items-start space-x-4">
                        <div className="text-yellow-500 text-xl">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="flex gap-4">
                            <FaPhone />
                            <h3 className="font-medium text-gray-800">Phone</h3>
                        </div>
                        <div>
                            <p className="text-gray-600 ml-7">Mobile: +(84) 546-6789</p>
                            <p className="text-gray-600 ml-7">Hotline: +(84) 456-6789</p>
                        </div>

                    </div>
                    {/* Working Time */}
                    <div className=" items-start space-x-4">
                        <div className="text-yellow-500 text-xl">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="flex gap-4">
                            <IoIosTime />
                            <h3 className="font-medium text-gray-800">Working Time</h3>
                        </div>
                        <div>
                        </div>
                        <div>

                            <p className="text-gray-600 ml-7">Monday–Friday: 9:00–22:00</p>
                            <p className="text-gray-600 ml-7">Saturday–Sunday: 9:00–21:00</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 p-8 rounded-md shadow-md">
                    <form className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-gray-700 mb-2">
                                Your name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border border-gray-300 rounded-md p-3 text-sm"
                                placeholder="Abc"
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-md p-3 text-sm"
                                placeholder="Abc@def.com"
                            />
                        </div>
                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-gray-700 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full border border-gray-300 rounded-md p-3 text-sm"
                                placeholder="This is an optional"
                            />
                        </div>
                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                className="w-full border border-gray-300 rounded-md p-3 text-sm"
                                placeholder="Hi! I'd like to ask about"
                                rows={4}
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-3 rounded-md text-sm font-medium hover:bg-yellow-600 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Intuch;
