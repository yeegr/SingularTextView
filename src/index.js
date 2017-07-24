'use strict'

import React, {
  PropTypes
} from 'react'

import {
  StyleSheet,
  Text
} from 'react-native'

import * as styles from 'styles'

const TextView = (props) => {
  const {text} = props,
    className = props.class || 'body',
    style = StyleSheet.create(Object.assign({}, styles[className], props.style))

  delete props.className
  delete props.style
  delete props.text

  return (
    <Text {...props} style>
      {props.text}
    </Text>
  )
}

TextView.propTypes = {
  text: PropTypes.string.isRequired,
  accessible: PropTypes.bool,
  allowFontScaling: PropTypes.bool,
  ellipsizeMode: PropTypes.string,
  numberOfLines: PropTypes.number,
  onLayout: PropTypes.function,
  onLongPress: PropTypes.function,
  onPress: PropTypes.function,
  pressRetentionOffset: PropTypes.object,
  selectable: PropTypes.bool,
  style: PropTypes.style
}

export default TextView