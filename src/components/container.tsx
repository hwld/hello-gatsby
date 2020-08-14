import React from "react"
import containerStyles from "./container.module.css"

export const Container: React.FC = ({ children }) => {
  return <div className={containerStyles.container}>{children}</div>
}
