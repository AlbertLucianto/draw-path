import { List, Record } from 'immutable';
import { DrawableWithChildren } from './drawable/drawable.model';

export interface IPosition {
	x: number;
	y: number;
	z?: number;
}

export interface IRotation {
	x: number;
	y: number;
	z: number;
}

export class Position extends Record({ x: 0, y: 0 }) {
	x: number;
	y: number;
}
export class Position3D extends Record({ x: 0, y: 0, z: 0 }) {
	x: number;
	y: number;
	z: number;
}
export class Quaternion extends Record({ x: 0, y: 0, z: 0 }) {
	x: number;
	y: number;
	z: number;
}

export class CanvasState extends Record({ root: List<DrawableWithChildren>([]) }) {
	root: List<DrawableWithChildren>;
}
