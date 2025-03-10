/* 
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

class Distributor {
  constructor() {
    this.data = [];
  }

  async fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      this.data = data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  lowestValue = () => {
    let day;
    let value = Infinity;

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].valor && this.data[i].valor < value) {
        day = this.data[i].dia;
        value = this.data[i].valor;
      }
    }

    return { day, value };
  };

  highestValue = () => {
    let day;
    let value = -Infinity;

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].valor && this.data[i].valor > value) {
        day = this.data[i].dia;
        value = this.data[i].valor;
      }
    }

    return { day, value };
  };

  averageMonthly = () => {
    let acc = 0;
    let days = 0;

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].valor > 0) {
        days++;
        acc += this.data[i].valor;
      }
    }
    const average = acc / days;

    return average;
  };

  invoicingBiggerMonther = () => {
    const average = this.averageMonthly();
    const higherRevenue = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].valor > 0 && this.data[i].valor > average)
        higherRevenue.push({
          day: this.data[i].dia,
          value: this.data[i].valor,
        });
    }

    return {
      days: higherRevenue,
      QtdDays: higherRevenue.length,
    };
  };

  billingReport = () => {
    const lowestBilling = this.lowestValue();
    const highestTurnover = this.highestValue();
    const DiaryBiggerMonth = this.invoicingBiggerMonther();

    return `
        Lowest billing amount in one day: day: ${lowestBilling.day}, value: ${lowestBilling.value}.
        Highest turnover in one day: day: ${highestTurnover.day}, value: ${highestTurnover.value}.
        Daily turnover higher than monthly: ${DiaryBiggerMonth.QtdDays} days.`;
  };
}

const distributor = new Distributor();

distributor.fetchData("data.json").then(() => {
  console.log(distributor.billingReport());
});
