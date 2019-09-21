function selectSaleItems(items) {
  return items.filter(function discounted(items) {
    return items.discount > 0
  })
}


module.exports = selectSaleItems