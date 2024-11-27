import Header from "@/components/Header/index";
import HomePage from "@/components/Home/index";
import Footer from "@/components/Footer/index";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HomePage/>
      </main>
      <Footer />
    </div>
  );
}
