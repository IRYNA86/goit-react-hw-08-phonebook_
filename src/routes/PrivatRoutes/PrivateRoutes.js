import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'components/store/auth'; 

function PrivateRoute({ children }) {
  const token = useSelector(authSelectors.getUserToken)
  return <>
  {token ? children : <Navigate to="/" />}</>;
}
export default PrivateRoute