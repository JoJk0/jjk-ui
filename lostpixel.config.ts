import { env } from 'node:process'
import type { CustomProjectConfig } from 'lost-pixel'

export const config: CustomProjectConfig = {
  histoireShots: {
    histoireUrl: './.histoire/dist',
  },
  lostPixelProjectId: 'cmn3g8usg59szo05sd9dnn0gz',
  apiKey: env.LOST_PIXEL_API_KEY,
}
