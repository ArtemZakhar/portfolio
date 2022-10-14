import img from './error.gif';

const ErrorMessage = () => {
  return (
    <img alt="error" style={{
      display:'block',
      width: '250px',
      height: '250px',
      objectFit: 'contain',
      margin: '0 auto',
      backgroundColor: "#C2B6DF"
    }} src={img} />
  )
}

export default ErrorMessage;