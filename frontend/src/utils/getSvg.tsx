import { SvgItem } from "./typesAndInterfaces"

// TODO: To do width and height required
export const getSvg = (item: SvgItem) => {
  switch (item.type) {
    case "arrowLeft":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 83 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52.4507 72.1299C51.7734 72.1299 51.0962 71.8826 50.5616 71.3526L27.3222 48.3176C23.544 44.5727 23.544 38.4253 27.3222 34.6804L50.5616 11.6454C51.5952 10.6208 53.3061 10.6208 54.3398 11.6454C55.3734 12.6699 55.3734 14.3658 54.3398 15.3903L31.1004 38.4253C29.3895 40.1211 29.3895 42.8769 31.1004 44.5727L54.3398 67.6077C55.3734 68.6322 55.3734 70.3281 54.3398 71.3526C53.8051 71.8473 53.1279 72.1299 52.4507 72.1299Z"
            fill="#F55349"
          />
        </svg>
      )
    case "docker":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" height="512" width="512">
          <rect width="512" height="512" rx="15%" fill="#066da5" />
          <path
            fill="#fff"
            d="M296 245h42v-38h-42zm-50 0h42v-38h-42zm-49 0h42v-38h-42zm-49 0h41v-38h-41zm-50 0h42v-38H98zm50-46h41v-38h-41zm49 0h42v-38h-42zm49 0h42v-38h-42zm0-46h42v-38h-42zm226 75s-18-17-55-11c-4-29-35-46-35-46s-29 35-8 74c-6 3-16 7-31 7H68c-5 19-5 145 133 145 99 0 173-46 208-130 52 4 63-39 63-39z"
          />
        </svg>
      )
  }
}
