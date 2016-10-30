const assert = require('chai').assert

const colorQuick = require('./')

describe('colorQuick', () => {
  it('produces a random color hex', () => {
    assert.equal(colorQuick(), (/[0-9A-F]/g))
  })
})
