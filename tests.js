const expect = require('chai').expect
const { describe, it } = require('mocha')
const selectSaleItems = require('./checkout')

describe('selectSaleItems', () => {
  it('returns only the items which have a discount', () => {
    const items = [{
      id: 1, name: 'iPhone Charger', price: 19.95, discount: .12,
      quantity: 2
    }, {
      id: 1, name: 'Pixel Charger', price: 18.95, discount: 0,
      quantity: 1
    }, {
      id: 1, name: 'Samsung Charger', price: 16.95, quantity: 1
    }]

    const expected = [{
      id: 1, name: 'iPhone Charger', price: 19.95, discount: .12,
      quantity: 2
    }]

    expect(selectSaleItems(items)).to.deep.equal(expected)
  })
})
