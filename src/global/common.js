import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flexCenterColumn = css`
  ${flexCenter}
  flex-direction: column;
  `

export const flexCenterRow = css`
  ${flexCenter}
  flex-direction: row;
`

export const box = css`
  ${flexCenter}
  width: 100px;
  height: 100px;
  background-color: orange;
  margin-bottom : 10px;
`
