import Location from './location';
import MarkerLabel from './marker-label';

export default interface Marker {
	position: Location;
	markerLabel: MarkerLabel;
}
