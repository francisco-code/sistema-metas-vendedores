import icon from '../../assets/img/vector-notification.svg'
import './styles.css'

function NotificationButton() {
    return (
        <div className="sismeta-red-btn">
            <img src={icon} alt="Ícone de notificação" />
        </div>
    )
}

export default NotificationButton