const Cosmic = require('cosmicjs')()

const bucket = Cosmic.bucket({
  slug: process.env.COSMIC_BUCKET || 'crafty-midwife-production',
  read_key: process.env.COSMIC_READ_KEY || '2g2KJ7yqHuRe7MjoGhl8MFJ8N7Pph34d9vDgBH57rbtUNRVa1A'
})

export default bucket
