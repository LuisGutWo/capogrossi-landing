import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "10rem" }}>
      <Spinner animation="border" variant="info" />
    </div>
  );
  
};

export default Loading;
