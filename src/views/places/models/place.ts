import Geometry from './geometry';

export default interface Place {
	id: string;
	name: string;
	geometry: Geometry;
	address: string;
}
