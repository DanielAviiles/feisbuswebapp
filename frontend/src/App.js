import Modalregister from "./components/Modalregister/Modalregister";

function App() {
  return (
    <div className="container-fluid">
      <div className="mt-4 col-5">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Boton
        </button>
        <Modalregister />
      </div>
    </div>
  );
}

export default App;
