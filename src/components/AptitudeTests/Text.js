import React from 'react'
import classes from './Text.module.css'
function Text(props) {
  return (
  <div className={classes.textDescription}>
		{props.text}
	</div>
  )
}

export default Text