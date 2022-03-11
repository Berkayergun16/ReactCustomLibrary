import * as React from 'react'
import styles from './styles.module.css'
import 'semantic-ui-css/semantic.min.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

