import NotificationButton from "./components/NotificationButton/Index";
import Header from "./components/Header/Index";
import SalesCard from "./components/SalesCard/Index";


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
            <NotificationButton />
          </div>
        </section>
        </main>
      </>
      );
}

      export default App
