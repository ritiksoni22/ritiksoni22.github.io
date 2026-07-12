const ICON_MAP = {
  html: '/images/html.webp',
  css: '/images/css.webp',
  javascript: '/images/js.webp',
  react: '/images/react.webp',
  webflow: '/images/webflow.webp',
  'node.js': '/images/node.webp',
  'express.js': '/images/express.webp',
  firebase: '/images/firebase.webp',
  postgresdb: '/images/postgres.webp',
}

export function getSkillIcon(skill) {
  return ICON_MAP[skill.toLowerCase()] || null
}
