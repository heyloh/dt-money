import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tr>
            <td width="50%">
              Desenvolvimento de site
            </td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>
              Venda
            </td>
            <td>
              13/04/2022
            </td>
          </tr>
          <tr>
            <td width="50%">
              Hamburguer
            </td>
            <td>
              <PriceHighlight variant="outcome">- R$ 59,00</PriceHighlight>
            </td>
            <td>
              Alimentação
            </td>
            <td>
              10/04/2022
            </td>
          </tr>
          <tr>
            <td width="50%">
              Aluguel do apartamento
            </td>
            <td>
              <PriceHighlight variant="outcome">- R$ 1.200,00</PriceHighlight>
            </td>
            <td>
              Casa
            </td>
            <td>
              27/03/2022
            </td>
          </tr>
          <tr>
            <td width="50%">
              Computador
            </td>
            <td>
              <PriceHighlight variant="income">R$ 5.400,00</PriceHighlight>
            </td>
            <td>
              Venda
            </td>
            <td>
              15/03/2022
            </td>
          </tr>
          <tr>
            <td width="50%">
              Desenvolvimento de site
            </td>
            <td>
              <PriceHighlight variant="income">R$ 8.000,00</PriceHighlight>
            </td>
            <td>
              Venda
            </td>
            <td>
              13/03/2022
            </td>
          </tr>
          <tr>
            <td width="50%">
              Janta
            </td>
            <td>
              <PriceHighlight variant="outcome">- R$ 39,00</PriceHighlight>
            </td>
            <td>
              Alimentação
            </td>
            <td>
              10/03/2022
            </td>
          </tr>
          <tr>
            <td width="50%">
              Salário
            </td>
            <td>
              <PriceHighlight variant="income">R$ 5.400,00</PriceHighlight>
            </td>
            <td>
              Salário
            </td>
            <td>
              15/02/2022
            </td>
          </tr>
          <tr>
            <td width="50%">
              Almoço
            </td>
            <td>
              <PriceHighlight variant="outcome">- R$ 30,00</PriceHighlight>
            </td>
            <td>
              Alimentação
            </td>
            <td>
              05/02/2022
            </td>
          </tr>
          <tr>
            <td width="50%">
              Fone de ouvido
            </td>
            <td>
              <PriceHighlight variant="outcome">- R$ 150,00</PriceHighlight>
            </td>
            <td>
              Itens
            </td>
            <td>
              02/02/2022
            </td>
          </tr>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
