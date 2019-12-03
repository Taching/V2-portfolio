import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../../hooks/"
import Burger from "@components/Burger"
import Menu from "@components/Menu"
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
