import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../../hooks/"
import Menu from "@components/Menu"
import Burger from "../Burger"
import { MobileNavStyled } from "./style"
function MobileNav() {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  return (
    <MobileNavStyled ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </MobileNavStyled>
  )
}
export default MobileNav
