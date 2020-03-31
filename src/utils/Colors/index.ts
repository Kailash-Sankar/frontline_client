import { filterColors } from './palette';
  
// define constant colors here
const predefinedColors: {[key: string]: string} = {};

export default function getColor(index: number, name: string) {

// check in predefined colors
const color = predefinedColors[name];
if (color) return color;

const len = filterColors.length - 1 || 0;
return filterColors[index % len];
}
  