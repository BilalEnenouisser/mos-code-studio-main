import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
