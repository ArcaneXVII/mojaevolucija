export interface Player {
  name: string
  picture?: string
  role: PlayerRole
  stats: PlayerStats
}

export interface PlayerStats {
  firepower: number
  entrying: number
  trading: number
  opening: number
  clutching: number
  sniping: number
  utility: number
}

export enum PlayerRole {
  LEADER = 'Leader',
  SNIPER = 'Sniper',
  LURKER = 'Lurker',
  SUPPORT = 'Support',
  ANCHOR = 'Anchor'
}
