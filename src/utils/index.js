import { useNavigate, useParams } from "react-router-dom";

export function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} navigate={useNavigate()} />;
}
