import {
  RouterProvider,
} from "react-router-dom";
import {router} from './router'

export default function App() {
  return (
    <div className="app-body">
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </div>
  );
}
