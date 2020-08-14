import React from "react"

export const Header: React.FC<{ headerText: string }> = ({ headerText }) => {
  return <h1>{headerText}</h1>
}
