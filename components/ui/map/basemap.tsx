'use client'

import DeckGL, { DeckGLProps } from '@deck.gl/react'
import Map from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  currentViewStateAtom,
  defaultViewState,
  mapViewStateAtom,
} from '@/store/map-store'
import { layersAtom } from '@/store/layer-store'
import { MapViewState } from 'deck.gl'
import { useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'

interface IBaseMapProps extends DeckGLProps {
  height?: string
  width?: string
  customStyle?: Partial<CSSStyleDeclaration>
  initialViewState?: MapViewState
}

export default function BaseMap({
  height = '100vh',
  width = '100vw',
  customStyle = {},
  initialViewState = defaultViewState,
  ...props
}: IBaseMapProps) {
  const [mapViewState, setMapViewState] = useAtom(mapViewStateAtom)
  const setCurrentViewState = useSetAtom(currentViewStateAtom)

  const debounced = useDebouncedCallback((viewState: MapViewState) => {
    setCurrentViewState(viewState)
  }, 350)

  const layersMap = useAtomValue(layersAtom)
  const layers = Object.values(layersMap)

  useEffect(() => {
    setMapViewState({ ...defaultViewState, ...initialViewState })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DeckGL
      initialViewState={mapViewState}
      onViewStateChange={(e) => debounced(e.viewState)}
      style={{ ...customStyle, height, width, position: 'relative' }}
      controller
      layers={layers}
      {...props}
    >
      <Map
        id="base-map"
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      />
    </DeckGL>
  )
}
