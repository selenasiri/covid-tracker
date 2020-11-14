import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

function InfoBox({ title, cases, total }) {
  return (
    <div>
      <Card>
        <CardContent>
          {/* Title */}
          <Typography className="infoBox_title" color="textSecondary">
            {title}
          </Typography>

          {/* +120k Number of cases */}
            <h2 className="infoBox_cases">{cases}</h2>
            
          {/* 1.2M total */}
          <Typography className="infoBox_total" color="textSecondary">
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default InfoBox
