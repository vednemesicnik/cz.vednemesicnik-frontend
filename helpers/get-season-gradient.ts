import { getSeason } from "helpers/index"
import { palette } from "assets/palette"

export const getSeasonGradient = () => {
  const season = getSeason()

  switch (season) {
    case "spring": {
      return palette.VDM_SG_GRADIENT
    }
    case "summer": {
      return palette.VDM_SY_GRADIENT
    }
    case "autumn": {
      return palette.VDM_AO_GRADIENT
    }
    case "winter": {
      return palette.VDM_WB_GRADIENT
    }
  }
}
