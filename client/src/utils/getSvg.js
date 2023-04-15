/* export type SvgType =
  | "arrowLeft"

export interface SvgItem {
  type: SvgType
  fill?: SvgFill
  width?: string
  height?: string
}
 */

// item: SvgItem
export const getSvg = (item) => {
  switch (item.type) {
    case "arrowLeft":
      return `<svg
          width=${item.width ? item.width : "24px"}
          height=${item.height ? item.height : "24px"}
          viewBox="0 0 83 83"
          fill={item.fill ? item.fill : "currentColor"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52.4507 72.1299C51.7734 72.1299 51.0962 71.8826 50.5616 71.3526L27.3222 48.3176C23.544 44.5727 23.544 38.4253 27.3222 34.6804L50.5616 11.6454C51.5952 10.6208 53.3061 10.6208 54.3398 11.6454C55.3734 12.6699 55.3734 14.3658 54.3398 15.3903L31.1004 38.4253C29.3895 40.1211 29.3895 42.8769 31.1004 44.5727L54.3398 67.6077C55.3734 68.6322 55.3734 70.3281 54.3398 71.3526C53.8051 71.8473 53.1279 72.1299 52.4507 72.1299Z"
            fill="#F55349"
          />
        </svg>`
  }
}
