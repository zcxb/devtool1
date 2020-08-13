import * as React from 'react'
import { GridList, GridListTile } from '@material-ui/core'

const tileData = [
  {
    img: '../static/images/1.jpg',
    name: '1'
  },
  {
    img: '../static/images/2.jpg',
    name: '2'
  },
  {
    img: '../static/images/quit.jpg',
    name: 'quit'
  }
]

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <GridList >
          {tileData.map(tile => (
            <GridListTile key={tile.name}>
              <img src={tile.img} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}