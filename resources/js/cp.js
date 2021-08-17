/**
 * When extending the control panel, be sure to uncomment the necessary code for your build process:
 * https://statamic.dev/extending/control-panel
 */

Statamic.booting(() => {
  Statamic.$conditions.add('parentIsFachrichtungen', ({ values }) => {
    return (values.parent || [])[0] === 'e45d6722-981e-4f80-bc4c-3c767caf4b6d'
  })

  Statamic.$conditions.add('parentIsArbeiten', ({ values }) => {
    return (values.parent || [])[0] === 'd118c7b2-141d-4bac-972d-c1502381a340'
  })
})
