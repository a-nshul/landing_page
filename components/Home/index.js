import Image from "next/image";
import React from "react";
import vitamins from "../../public/asset/f2-1.png.png";
import { FaWeight, FaArrowRight,FaAppleAlt, FaCapsules, FaSeedling, FaShippingFast, FaCheckCircle } from "react-icons/fa";
import blogImage1 from "../../public/asset/product-3.png.png";
import blogImage2 from "../../public/asset/product-8-400x400.png.png";
import blogImage3 from "../../public/asset/product-12-400x400.png.png";
function Index() {
  const ingredients = [
    {
      title: "Vitamin C",
      subtitle: "Vitamin C as ascorbic acid",
      description: "High-quality ingredient for boosting immunity and skin health.",
    },
    {
      title: "Vitamin B3",
      subtitle: "Niacin for healthy gut and skin",
      description: "Supports a healthy digestive system and improves skin texture.",
    },
    {
      title: "Magnesium",
      subtitle: "Boost energy and support muscle function",
      description: "An essential nutrient for muscle and energy production.",
    },
    {
      title: "Hyaluronic Acid",
      subtitle: "For smooth, supple, and soft skin!",
      description: "Promotes skin hydration and elasticity.",
    },
    {
      title: "Lactobacillus",
      subtitle: "Invigorate your gut microbiome",
      description: "Enhances digestive health by improving gut microbiota.",
    },
  ];
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <h1 className="text-black text-4xl font-bold text-center mb-8 animate__animated animate__zoomIn">
          Victimes Vitamins
        </h1>
        
        {/* Main Content in One Line */}
        <div className="flex flex-wrap justify-between items-center gap-6 animate__animated animate__fadeIn">
  {/* Left Content */}
  <div className="flex-1 text-left space-y-4">
    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 hover:text-blue-600 transition-all duration-300">
      Online Medical Supplies
    </h2>
    <p className="text-gray-600 text-sm">
      Get Your Vitamins <br /> & Minerals
    </p>
    <button className="px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
      Explore
    </button>
  </div>

  {/* Center Image */}
  <div className="flex justify-center flex-1">
    <Image
      src={vitamins.src}
      alt="Medical Supplies"
      width={300}
      height={200}
      loading="lazy"
      className="rounded-md shadow-lg hover:scale-110 transition-transform duration-500 animate__animated animate__zoomIn animate__delay-1s"
    />
  </div>

  {/* Vitamins Section */}
  <div className="bg-white p-6 rounded-md shadow-lg text-center flex-1 max-w-sm transform hover:scale-105 transition-transform duration-500 ease-in-out">
    <FaCapsules className="text-blue-600 text-3xl mb-4 mx-auto animate__animated animate__pulse" />
    <h3 className="text-lg font-medium text-gray-700">Vitamins</h3>
    <p className="text-gray-600">
      Get Your Vitamins <br /> & Minerals
    </p>
  </div>

  {/* Weight Loss Section */}
  <div className="bg-white p-6 rounded-md shadow-lg text-center flex-1 max-w-sm transform hover:scale-105 transition-transform duration-500 ease-in-out">
    <FaWeight className="text-blue-600 text-3xl mb-4 mx-auto animate__animated animate__pulse" />
    <h3 className="text-lg font-medium text-gray-700">Weight Loss</h3>
    <p className="text-gray-600">
      Explore vitamins and supplements to support your weight loss goals.
    </p>
  </div>

  {/* Functional Foods Section */}
  <div className="bg-white p-6 rounded-md shadow-lg text-center flex-1 max-w-sm transform hover:scale-105 transition-transform duration-500 ease-in-out">
    <FaAppleAlt className="text-blue-600 text-3xl mb-4 mx-auto animate__animated animate__pulse animate__delay-1s" />
    <h3 className="text-lg font-medium text-gray-700">
      Functional Foods
    </h3>
    <p className="text-gray-600">
      Discover foods and nutrients that enhance your overall well-being
      and boost energy levels.
    </p>
  </div>
</div>


        {/* New Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__fadeInUp">
          {/* Clinically Studied */}
          <div className="bg-white p-6 rounded-md shadow-lg text-center transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <FaCheckCircle className="text-green-600 text-3xl mb-4 mx-auto hover:animate-pulse" />
            <h3 className="text-lg font-medium text-gray-700">Clinically Studied</h3>
            <p className="text-gray-600">
              All products that we offer have undergone lab and safety tests.
            </p>
          </div>

          {/* Vegetarian Friendly */}
          <div className="bg-white p-6 rounded-md shadow-lg text-center transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <FaSeedling className="text-green-600 text-3xl mb-4 mx-auto hover:animate-pulse" />
            <h3 className="text-lg font-medium text-gray-700">
              Vegetarian Friendly
            </h3>
            <p className="text-gray-600">
              We have a wide selection of vegetarian products to meet your needs.
            </p>
          </div>

          {/* Made in India */}
          <div className="bg-white p-6 rounded-md shadow-lg text-center transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <FaAppleAlt className="text-orange-600 text-3xl mb-4 mx-auto hover:animate-pulse" />
            <h3 className="text-lg font-medium text-gray-700">Made in India</h3>
            <p className="text-gray-600">
              Shop local and explore health products made right here in India.
            </p>
          </div>

          {/* Free Shipping */}
          <div className="bg-white p-6 rounded-md shadow-lg text-center transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <FaShippingFast className="text-blue-600 text-3xl mb-4 mx-auto hover:animate-pulse" />
            <h3 className="text-lg font-medium text-gray-700">Free Shipping</h3>
            <p className="text-gray-600">
              We deliver to your door with no shipping costs on your orders.
            </p>
          </div>

          {/* No Risk */}
          <div className="bg-white p-6 rounded-md shadow-lg text-center transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <FaCheckCircle className="text-green-600 text-3xl mb-4 mx-auto hover:animate-pulse" />
            <h3 className="text-lg font-medium text-gray-700">No Risk</h3>
            <p className="text-gray-600">
              We ensure that all products are safe and within their use-by date.
            </p>
          </div>

          {/* GMO Free */}
          <div className="bg-white p-6 rounded-md shadow-lg text-center transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <FaSeedling className="text-green-600 text-3xl mb-4 mx-auto hover:animate-pulse" />
            <h3 className="text-lg font-medium text-gray-700">GMO Free</h3>
            <p className="text-gray-600">
              Natural, no modified products and derivatives for those who need it.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-black text-center mb-4">
          Better Ingredients
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Only the best when you choose products offered on our platform. 
          High-quality ingredients for high-quality products.
        </p>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {ingredient.title}
              </h3>
              <h4 className="text-gray-600 mb-4">{ingredient.subtitle}</h4>
              <p className="text-gray-600 mb-6">{ingredient.description}</p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center gap-2 hover:underline"
              >
                See More <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
        {/* Blog Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Our Blog
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Latest News
            <br />
            Explore insights and updates from the health and wellness world.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                  <div>
                      <Image 
                      className="h-auto rounded-lg"
                       src= {blogImage1} 
                       alt=""
                       loading="lazy"
                       width={300}
                       height={200}
                       />
                  </div>
                  <div>
                      <Image className="h-auto rounded-lg" 
                      src={blogImage2} 
                      alt=""
                      width={300}
                      height={200}
                      />
                  </div>
                  <div>
                      <Image className="h-auto rounded-lg" 
                      src={blogImage1} 
                      alt=""
                      width={300}
                      height={200}
                      />
                  </div>
              </div>
              <div className="grid gap-4">
                  <div>
                      <Image className="h-auto rounded-lg" 
                      src={blogImage3}
                       alt=""
                       width={300}
                       height={200}
                       />
                  </div>
                  <div>
                      <Image className="h-auto rounded-lg" 
                      src={blogImage1}
                       alt=""
                       width={300}
                       height={200}
                       />
                  </div>
                  <div>
                      <Image className="h-auto rounded-lg" 
                      src={blogImage2} 
                      alt=""
                      width={300}
                      height={200}
                      />
                  </div>
              </div>
              <div className="grid gap-4">
                  <div>
                      <Image 
                      className="h-auto rounded-lg" 
                      src={blogImage2} 
                      width={300}
                      height={200}
                      alt=""/>
                  </div>
                  <div>
                      <Image 
                      className="h-auto rounded-lg" 
                      src={blogImage1} 
                      alt=""
                      width={300}
                      height={200}
                      />
                  </div>
                  <div>
                      <Image 
                      className="h-auto rounded-lg" 
                      src={blogImage1} 
                      width={300}
                      height={200}
                      alt=""
                      />
                      
                  </div>
              </div>
              <div className="grid gap-4">
                  <div>
                      <Image className="h-auto rounded-lg" 
                      src={blogImage2} 
                      width={300}
                      height={200}
                      alt=""/>
                      
                  </div>
                  <div>
                      <Image className="h-auto rounded-lg" 
                      src={blogImage1} 
                      width={300}
                      height={200}
                      alt=""/>
                  </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Index;
