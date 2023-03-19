import Alert from "./components/Alert";

function App() {
  return (
    <div style={styles}>
      <Alert variant="info" outlined>Alerta 1</Alert>
      <Alert variant="danger">Alerta 2</Alert>
      <Alert variant="success" outlined>Alerta 3</Alert>
      <div className='info'>Holaaa</div>
    </div>
  )
}

const styles = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }

export default App;