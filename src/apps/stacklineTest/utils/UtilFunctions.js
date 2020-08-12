import * as moment from 'moment';

class UtilFunctions {
    static getFormattedData(data) {
        const formattedSalesDataArr = []
        let productDataObj = data[0]

        let salesArr = productDataObj.sales.sort((a, b) => {
            return new Date(a.weekEnding) - new Date(b.weekEnding);
        });

        salesArr.map((itemDataObj, index) => {
            salesArr[index].key = index
            salesArr[index].month = moment(itemDataObj.weekEnding).format("MMM").toUpperCase()
            salesArr[index].retailSalesStr = UtilFunctions.formatMoney(itemDataObj.retailSales)
            salesArr[index].wholesaleSalesStr = UtilFunctions.formatMoney(itemDataObj.wholesaleSales)
            salesArr[index].retailerMarginStr = UtilFunctions.formatMoney(itemDataObj.retailerMargin)
            return formattedSalesDataArr.push(salesArr[index])
        })

        // const formattedChartDataArr = UtilFunctions.unique(formattedSalesDataArr)
        const formattedChartDataArr = UtilFunctions.getLastEntryOfMonth(formattedSalesDataArr)
        
        return {
            ...productDataObj,
            sales: formattedSalesDataArr,
            chartSalesDataArr: formattedChartDataArr
        }
    };
    static formatMoney(number) {
        number = number || 0;
        let j
        let negative = number < 0 ? "-" : ""
        let i = parseInt(number = Math.abs(+number || 0).toFixed(0), 10) + ""
        j = (j = i.length) > 3 ? j % 3 : 0
        return `$${negative}${j ? i.substr(0, j) + ',' : ''}${i.substr(j).replace(/(\d{3})(?=\d)/g, '$1,')}`;
    };
    static unique(dataArr){
        let result = {};
        let finalResult=[];
        for(let i=0;i<dataArr.length;i++){
            result[dataArr[i].month]=dataArr[i];
        }
        for(let item in result){
            finalResult.push(result[item]);
        }
        return finalResult;
    };
    static getLastEntryOfMonth = sales => {
        const returnArr = [];
        let startMonth = "Jan";
        for (let i = 0; i < sales.length - 1; i++) {
          let obj = sales[i + 1];
          if (obj.month !== startMonth) {
            returnArr.push(sales[i]);
            startMonth = obj.month;
          }
        }
        returnArr.push(sales[sales.length - 1]);
        return returnArr.sort((a, b) => {
          return new Date(a.weekEnding) - new Date(b.weekEnding);
        });
      };
    
}

export default UtilFunctions
