import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

const Dashboard = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to Happy Care!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for visiting our dashboard. We are working hard to provide you with the best prepaid medical aid experience. However, this page is still under development. Please check back later for updates.
          </p>
          <p className="text-gray-600 mb-4">
            In the meantime, here's a joke for you:
            <br />
            Why don't scientists trust atoms? Because they make up everything!
          </p>
          <p className="text-gray-600">
            We apologize for any inconvenience caused and appreciate your patience.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
