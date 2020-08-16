import Location from './location';
import MarkerLabel from './marker-label';

export default interface Marker {
	id: string;
	position: Location;
	markerLabel: MarkerLabel;
}
