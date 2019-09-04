function selectSaleItems(items) {
  return items.filter((item) => {
    return item.discount > 0
  })
}

module.exports = selectSaleItems
