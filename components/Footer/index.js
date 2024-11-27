import React from "react";
import Image from "next/image";
import logo from "../../public/asset/logo.jpeg";
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";

function Index() {
  return (
    <div>
      <footer className="bg-gray-800 text-white mt-10">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-700 rounded-md p-4 text-center shadow-md">
              <PhoneOutlined className="text-yellow-400 text-3xl mb-2" />
              <h3 className="text-lg font-semibold">Phone</h3>
              <p>+1 234 567 890</p>
            </div>

            <div className="border border-gray-700 rounded-md p-4 text-center shadow-md">
              <MailOutlined className="text-yellow-400 text-3xl mb-2" />
              <h3 className="text-lg font-semibold">Email</h3>
              <p>info@company.com</p>
            </div>

            <div className="border border-gray-700 rounded-md p-4 text-center shadow-md">
              <EnvironmentOutlined className="text-yellow-400 text-3xl mb-2" />
              <h3 className="text-lg font-semibold">Location</h3>
              <p>123 Business Street, Tech City, USA</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
            <div className="mb-4 md:mb-0">
              <Image
                src={logo.src}
                alt="Company Logo"
                width={120}
                height={80}
                className="rounded-md"
              />
            </div>

            <p className="text-gray-400 mt-4 md:mt-0 md:ml-4">
              © 2024 Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
