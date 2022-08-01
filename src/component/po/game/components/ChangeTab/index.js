import styles from "./ChangeTab.module.css"
import clsx from 'clsx'
import { useState } from 'react'
import Game from '../Game/Game'
import Coupon from '../Coupon'
import ChangeRecord from '../ChangeRecord/ChangeRecord'

function ChangeTab(props) {
  //解構
  const {eggpoints} = props
  
  const [selected, setSelected] = useState(0)
  const pages = [<Coupon eggpoints={eggpoints} />, <ChangeRecord />, <Game />]
  const [info, setInfo] = useState(<Coupon eggpoints={eggpoints} />)
  const handleClicked = (id) => {
    setSelected(selected !== id ? id : undefined)
    setInfo(pages[id])
  }
  return (
    <>
      <div className={styles.tabWrap}>
        <div
          className={clsx(styles.tab, {
            [styles.active]: selected === 0,
          })}
          onClick={() => {
            handleClicked(0)
          }}
        >
          <p>折價券</p>
        </div>
        <div
          className={clsx(styles.tab_product_recipe, styles.tab, {
            [styles.active]: selected === 1,
          })}
          onClick={() => {
            handleClicked(1)
          }}
        >
          <p>兌換紀錄</p>
        </div>
        <div
          className={clsx(styles.tab_product_share, styles.tab, {
            [styles.active]: selected === 2,
          })}
          onClick={() => {
            handleClicked(2)
          }}
        >
          <p>搶點遊戲</p>
        </div>
      </div>
      <div>{info}</div>
    </>
  )
}
export default ChangeTab