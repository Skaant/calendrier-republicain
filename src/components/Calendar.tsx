import React from 'react'
import Page from './Page'

export default function Calendar({year}: {year: number}) {
  return (
    <div>
        {([...(Array(12))].map((_, i) => <Page key={i} month={i} slot={i%2 ? 'bottom': 'top'} year={year} />))}
    </div>
  )
}
