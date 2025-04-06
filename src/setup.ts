import 'normalize.css';
import '~/theme/index.scss';
(async () => {
  try {
    if (!('paintWorklet' in CSS)) {
      await import('css-paint-polyfill')
    }

    const { default: SquircleUrl } = await import('css-houdini-squircle?url');

    (CSS as any).paintWorklet.addModule(SquircleUrl);

  } catch {
  }
})()
