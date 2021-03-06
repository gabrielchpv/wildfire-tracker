import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ lat, lng, onCLick }) => {
    return (
        <div className="location-marker" onClick={onclick}>
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker;
