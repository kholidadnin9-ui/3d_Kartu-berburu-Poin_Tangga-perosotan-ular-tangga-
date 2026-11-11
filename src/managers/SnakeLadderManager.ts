import { SnakeOrLadder } from '../types/game';

export const SNAKES_AND_LADDERS: SnakeOrLadder[] = [
  // 6 Space Ladders (Energy Ladder, Jembatan Laser, Space Elevator, Warp Energy Bridge)
  {
    id: 'ladder-1',
    type: 'LADDER',
    name: 'Energy Ladder Alpha',
    startTile: 4,
    endTile: 25,
    colorHex: '#00F2FE',
    accentHex: '#38BDF8',
  },
  {
    id: 'ladder-2',
    type: 'LADDER',
    name: 'Jembatan Laser Cygnus',
    startTile: 13,
    endTile: 46,
    colorHex: '#10B981',
    accentHex: '#34D399',
  },
  {
    id: 'ladder-3',
    type: 'LADDER',
    name: 'Space Elevator Orion',
    startTile: 33,
    endTile: 49,
    colorHex: '#00F2FE',
    accentHex: '#A7F3D0',
  },
  {
    id: 'ladder-4',
    type: 'LADDER',
    name: 'Warp Energy Bridge',
    startTile: 42,
    endTile: 63,
    colorHex: '#34D399',
    accentHex: '#00F2FE',
  },
  {
    id: 'ladder-5',
    type: 'LADDER',
    name: 'Hyperion Laser Lift',
    startTile: 50,
    endTile: 69,
    colorHex: '#00F2FE',
    accentHex: '#60A5FA',
  },
  {
    id: 'ladder-6',
    type: 'LADDER',
    name: 'Nova Star Elevator',
    startTile: 74,
    endTile: 92,
    colorHex: '#10B981',
    accentHex: '#FACC15',
  },

  // 6 Perosotan Galaksi — lintasan turun berwarna dengan pagar pengaman
  {
    id: 'slide-1',
    type: 'SNAKE',
    name: 'Perosotan Pelangi Nova',
    startTile: 27,
    endTile: 7,
    colorHex: '#FF2A85',
    accentHex: '#F97316',
  },
  {
    id: 'slide-2',
    type: 'SNAKE',
    name: 'Perosotan Kosmik Ungu',
    startTile: 40,
    endTile: 19,
    colorHex: '#A855F7',
    accentHex: '#EC4899',
  },
  {
    id: 'slide-3',
    type: 'SNAKE',
    name: 'Perosotan Roket Oranye',
    startTile: 54,
    endTile: 31,
    colorHex: '#F97316',
    accentHex: '#FB7185',
  },
  {
    id: 'slide-4',
    type: 'SNAKE',
    name: 'Perosotan Nebula Pink',
    startTile: 66,
    endTile: 45,
    colorHex: '#EC4899',
    accentHex: '#A855F7',
  },
  {
    id: 'slide-5',
    type: 'SNAKE',
    name: 'Perosotan Meteor Merah',
    startTile: 87,
    endTile: 56,
    colorHex: '#F43F5E',
    accentHex: '#F59E0B',
  },
  {
    id: 'slide-6',
    type: 'SNAKE',
    name: 'Perosotan Bintang Supernova',
    startTile: 97,
    endTile: 78,
    colorHex: '#FF2A85',
    accentHex: '#C084FC',
  },
];

export class SnakeLadderManager {
  public static getByStartTile(tileNumber: number): SnakeOrLadder | undefined {
    return SNAKES_AND_LADDERS.find((item) => item.startTile === tileNumber);
  }

  public static getAll(): SnakeOrLadder[] {
    return SNAKES_AND_LADDERS;
  }
}
