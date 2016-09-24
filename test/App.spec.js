// Makes ESLint ignore mocha-related global variables
/* eslint-env mocha */

const { expect } = require('chai')

// Documents that you're testing the Search component
describe('<Search />', () => {
  it('should pass', () => {
    expect(1 + 1).to.equal(2)
  })
})
