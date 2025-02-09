import { ConfigProgrammatic } from '@oruga-ui/oruga-next'
import { markRaw } from 'vue'
import AppIcon from './components/AppIcon.vue'
import 'normalize.css'
import '~/theme/index.scss'

ConfigProgrammatic.setOptions({
  statusIcon: false,
  useHtml5Validation: false,
  iconComponent: markRaw(AppIcon),
  iconPack: 'iconify',
})
