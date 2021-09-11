import * as React from 'react'
import { container } from './index.module.scss'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <main>
        <h1>Parabéns Eduardo Empreendedor Porteiro do Mestre Main Champ Sem Camisa!!!**</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout