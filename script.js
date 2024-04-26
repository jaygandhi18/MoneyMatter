function calculateTotal() {
  var stocks = parseFloat(document.getElementById("stocks").value) || 0;
  var mutualFund = parseFloat(document.getElementById("mutualFund").value) || 0;
  var fd = parseFloat(document.getElementById("fd").value) || 0;
  var gold = parseFloat(document.getElementById("gold").value) || 0;
  var realEstate = parseFloat(document.getElementById("realEstate").value) || 0;

  var stocksRate = parseFloat(document.getElementById("stocksRate").value) || 0;
  var mutualFundRate =
    parseFloat(document.getElementById("mutualFundRate").value) || 0;
  var fdRate = parseFloat(document.getElementById("fdRate").value) || 0;
  var goldRate = parseFloat(document.getElementById("goldRate").value) || 0;
  var realEstateRate =
    parseFloat(document.getElementById("realEstateRate").value) || 0;

  var totalInvestment = stocks + mutualFund + fd + gold + realEstate;

  var interestReturn = calculateInterestReturn(
    stocks,
    mutualFund,
    fd,
    gold,
    realEstate,
    stocksRate,
    mutualFundRate,
    fdRate,
    goldRate,
    realEstateRate
  );

  var totalReturn = interestReturn.reduce((acc, val) => acc + val, 0);

  document.getElementById("totalInvestment").textContent =
    "Total Investment: $" + totalInvestment.toFixed(2);
  document.getElementById("totalReturn").textContent =
    "Total Return: $" + totalReturn.toFixed(2);

  var interestReturnList = document.getElementById("interestReturn");
  interestReturnList.innerHTML = "";
  interestReturn.forEach(function (interest, index) {
    var listItem = document.createElement("li");
    listItem.textContent =
      "Interest Return for " + getTypeName(index) + ": $" + interest.toFixed(2);
    interestReturnList.appendChild(listItem);
  });
}

function calculateInterestReturn(
  stocks,
  mutualFund,
  fd,
  gold,
  realEstate,
  stocksRate,
  mutualFundRate,
  fdRate,
  goldRate,
  realEstateRate
) {
  var interestReturn = [
    (stocks * stocksRate) / 100,
    (mutualFund * mutualFundRate) / 100,
    (fd * fdRate) / 100,
    (gold * goldRate) / 100,
    (realEstate * realEstateRate) / 100,
  ];

  return interestReturn;
}

function getTypeName(index) {
  switch (index) {
    case 0:
      return "Stocks";
    case 1:
      return "Mutual Fund";
    case 2:
      return "Fixed Deposit";
    case 3:
      return "Gold";
    case 4:
      return "Real Estate";
    default:
      return "Unknown";
  }
}
