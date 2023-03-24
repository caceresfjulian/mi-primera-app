// import Alert from "./components/Alert";
// import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  return (
    <div style={styles}>
      {/* <Counter step={5} initialValue={12} />
      <Counter step={1} />
      <Counter step={25} initialValue={3} /> */}
      {/* //   <Alert variant="info" outlined>Alerta 1</Alert>
    //   <Alert variant="danger">Alerta 2</Alert>
    //   <Alert variant="success" outlined>Alerta 3</Alert>
    //   <div className='info'>Holaaa</div> */}
      <Form />
    </div>
  );
}

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

export default App;
