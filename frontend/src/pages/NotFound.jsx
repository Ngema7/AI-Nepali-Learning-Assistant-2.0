import { useNavigate } from 'react-router-dom'
import Icon from '../../components/common/Icon.jsx'
import Button from '../../components/common/Button.jsx'
import './NotFound.css'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="notfound-page scale-in">
      <div className="notfound-icon"><Icon name="alert-triangle" size={36} /></div>
      <h1>404 — पाना भेटिएन</h1>
      <p>The page you're looking for doesn't exist or may have moved.</p>
      <Button variant="primary" icon={<Icon name="arrow-left" size={16} />} onClick={() => navigate('/')}>
        Back to Dashboard
      </Button>
    </div>
  )
}
