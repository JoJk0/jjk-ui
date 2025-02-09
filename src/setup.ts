import { ConfigProgrammatic } from '@oruga-ui/oruga-next'
import 'normalize.css'
import '~/theme/index.scss'
import AppIcon from './components/AppIcon.vue'
import { markRaw } from 'vue'

ConfigProgrammatic.setOptions({
  statusIcon: false,
  useHtml5Validation: false,
  iconComponent: markRaw(AppIcon) ,
  iconPack: 'iconify',
})
