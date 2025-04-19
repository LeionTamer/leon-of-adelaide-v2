import { Layer } from 'deck.gl'
import { atom } from 'jotai'

export const layerGroups = ['venues', 'cellar door'] as const

export type LayerGroupType = (typeof layerGroups)[number]

interface ILayer extends Layer {
  layerGroup?: LayerGroupType
}

export type LayerByIDType = {
  id: string
  layer: ILayer
}

export const layersAtom = atom<Record<string, ILayer>>({})
