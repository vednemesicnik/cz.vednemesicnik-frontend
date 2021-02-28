import { getSeason } from "helpers/index"
import { palette } from "assets/palette"

export const getSeasonColor = () => {
  const season = getSeason()

  switch (season) {
    case "spring": {
      return palette.VDM_SG
    }
    case "summer": {
      return palette.VDM_SY
    }
    case "autumn": {
      return palette.VDM_AO
    }
    case "winter": {
      return palette.VDM_WB
    }
  }
}
