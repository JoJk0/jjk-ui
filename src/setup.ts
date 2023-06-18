import { ConfigProgrammatic } from '@oruga-ui/oruga-next'
import AppIcon from '~/components/AppIcon.vue'

ConfigProgrammatic.setOptions({
  statusIcon: false,
  useHtml5Validation: false,
  iconComponent: AppIcon,
  iconPack: 'material-symbols-outlined',
  iconPackClass: 'material-symbols-outlined',
  iconPackPrefix: '',
})
