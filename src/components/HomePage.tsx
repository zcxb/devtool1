import * as React from 'react'
import { GridList, GridListTile } from '@material-ui/core'
import { ButtonBase } from '@material-ui/core'

import '../css/HomePage.css'

import image1 from '../static/images/1.jpg'
import image2 from '../static/images/2.jpg'
import imageQuit from '../static/images/quit.jpg'

const images = [
  {
    url: image1,
    title: '1',
    width: '200px',
  },
  {
    url: image2,
    title: '2',
    width: '200px',
  },
  {
    url: imageQuit,
    title: 'Quit',
    width: '200px',
  },
];

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <GridList >
          {images.map(image => (
            <ButtonBase
              key={image.title}
              style={{
                width: image.width,
                backgroundImage: `url(${image.url})`
              }}
            >
            </ButtonBase>
          ))}
        </GridList>
      </div >
    )
  }
}