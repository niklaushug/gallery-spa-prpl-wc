import {css} from "lit-element";

export function readableParagraph() {
  return css`
    p {
      max-width: 70ch;
      line-height: 1.4;
    }
  `
}