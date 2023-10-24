import { lngs } from '@translations'

export const LngSelector = () => {
  return (
    <p>{JSON.stringify(Object.keys(lngs))}</p>
  )
}