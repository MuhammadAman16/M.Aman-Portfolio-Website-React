import React from 'react'

export default function SimpleMap() {
  return (
    // Important! Always set the container height explicitly
    <div>
      <div class="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="maps"
            style={{ height: '90vh', width: '100%' }}
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Block D, North Nazimabad&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
