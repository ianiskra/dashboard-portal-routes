import { Link } from 'react-router-dom';

export default function Dashboard() {
  
  return (
    <div>
      <h2>Dashboard Page</h2>
      <Link to="/inventory">Inventory</Link>
    </div>
  )
}
