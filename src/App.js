import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const isLogedin = false;

  const handleClick = () => {
    console.log("Hello World");
  };

  return (
    <div className="App">
      {!isLogedin === true ? (
        <div>
          <Button status="resolve" handleClick={handleClick}>
            Signup
          </Button>
          <input />
        </div>
      ) : (
        <div>
          <h1>Wellcome</h1>
        </div>
      )}

      {/* <Button status="resolve">Signup</Button>
      <Button status="reject">Signin</Button>
      <Input /> */}
    </div>
  );
}

export default App;

//უნდა გვქონდეს სამი კომპონენტი:
//1)Input
//1)Button
//1)Image
