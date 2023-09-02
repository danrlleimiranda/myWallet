import { vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { act } from '@testing-library/react';
import mockData from './helpers/mockData';
import renderWithRouterAndRedux from './helpers/renderWithRouter';
import App from '../App';

describe('testa todas as funcionalidades da aplicação', () => {
  test('Testa a página de login', async () => {
    userEvent.setup();
    renderWithRouterAndRedux(<App />);

    const login = screen.getByRole('textbox', {
      name: /login:/i,
    });
    const senha = screen.getByLabelText(/senha:/i);
    const buttonEl = screen.getByRole('button');

    expect(login).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();

    await userEvent.type(login, 'tryber.com');
    await userEvent.type(senha, '1234');
    expect(buttonEl).toBeDisabled();
    await userEvent.clear(login);
    await userEvent.clear(senha);
    await userEvent.type(login, 'tryber@tryber.com');
    await userEvent.type(senha, '123456');
    expect(buttonEl).toBeEnabled();

    await userEvent.click(buttonEl);
    expect(screen.getByLabelText('Valor:')).toBeInTheDocument();
    expect(screen.getByText('tryber@tryber.com')).toBeInTheDocument();
  });

  test('Testa a página da wallet', async () => {
    (vi.spyOn(global, 'fetch') as any).mockResolvedValue(mockData);
    const state = {
      user: {
        email: 'tryber@teste.com',
      },
      wallet: {
        currencies: [
          'USD',
          'CAD',
          'GBP',
          'ARS',
          'BTC',
          'LTC',
          'EUR',
          'JPY',
          'CHF',
          'AUD',
          'CNY',
          'ILS',
          'ETH',
          'XRP',
          'DOGE',
        ],
        expenses: [
          {
            id: 1,
            value: '10',
            currency: 'USD',
            method: 'Dinheiro',
            tag: 'Alimentação',
            description: 'hotwheels',
            exchangeRates: {
              USD: {
                code: 'USD',
                codein: 'BRL',
                name: 'Dólar Americano/Real Brasileiro',
                high: '4.9552',
                low: '4.9542',
                varBid: '0.0008',
                pctChange: '0.02',
                bid: '4.9547',
                ask: '4.9557',
                timestamp: '1693515601',
                create_date: '2023-08-31 18:00:01',
              },
              CAD: {
                code: 'CAD',
                codein: 'BRL',
                name: 'Dólar Canadense/Real Brasileiro',
                high: '3.6639',
                low: '3.6639',
                varBid: '0',
                pctChange: '0',
                bid: '3.6611',
                ask: '3.6666',
                timestamp: '1693528717',
                create_date: '2023-08-31 21:38:33',
              },
              GBP: {
                code: 'GBP',
                codein: 'BRL',
                name: 'Libra Esterlina/Real Brasileiro',
                high: '6.2814',
                low: '6.2735',
                varBid: '-0.0055',
                pctChange: '-0.09',
                bid: '6.2723',
                ask: '6.2761',
                timestamp: '1693528720',
                create_date: '2023-08-31 21:38:41',
              },
              ARS: {
                code: 'ARS',
                codein: 'BRL',
                name: 'Peso Argentino/Real Brasileiro',
                high: '0.0142',
                low: '0.0141',
                varBid: '0',
                pctChange: '0',
                bid: '0.0142',
                ask: '0.0142',
                timestamp: '1693528711',
                create_date: '2023-08-31 21:38:30',
              },
              BTC: {
                code: 'BTC',
                codein: 'BRL',
                name: 'Bitcoin/Real Brasileiro',
                high: '134846',
                low: '128204',
                varBid: '-4184',
                pctChange: '-3.13',
                bid: '129512',
                ask: '129572',
                timestamp: '1693528718',
                create_date: '2023-08-31 21:38:39',
              },
              LTC: {
                code: 'LTC',
                codein: 'BRL',
                name: 'Litecoin/Real Brasileiro',
                high: '335.8',
                low: '317.07',
                varBid: '-12.89',
                pctChange: '-3.89',
                bid: '319.17',
                ask: '319.82',
                timestamp: '1693528720',
                create_date: '2023-08-31 21:38:59',
              },
              EUR: {
                code: 'EUR',
                codein: 'BRL',
                name: 'Euro/Real Brasileiro',
                high: '5.3677',
                low: '5.3677',
                varBid: '0',
                pctChange: '0',
                bid: '5.3637',
                ask: '5.3717',
                timestamp: '1693528717',
                create_date: '2023-08-31 21:38:32',
              },
              JPY: {
                code: 'JPY',
                codein: 'BRL',
                name: 'Iene Japonês/Real Brasileiro',
                high: '0.03406',
                low: '0.03401',
                varBid: '0',
                pctChange: '0',
                bid: '0.034',
                ask: '0.03402',
                timestamp: '1693528715',
                create_date: '2023-08-31 21:38:29',
              },
              CHF: {
                code: 'CHF',
                codein: 'BRL',
                name: 'Franco Suíço/Real Brasileiro',
                high: '5.6031',
                low: '5.6031',
                varBid: '0',
                pctChange: '0',
                bid: '5.599',
                ask: '5.6073',
                timestamp: '1693528706',
                create_date: '2023-08-31 21:38:26',
              },
              AUD: {
                code: 'AUD',
                codein: 'BRL',
                name: 'Dólar Australiano/Real Brasileiro',
                high: '3.2073',
                low: '3.2073',
                varBid: '0',
                pctChange: '0',
                bid: '3.205',
                ask: '3.2097',
                timestamp: '1693528715',
                create_date: '2023-08-31 21:38:11',
              },
              CNY: {
                code: 'CNY',
                codein: 'BRL',
                name: 'Yuan Chinês/Real Brasileiro',
                high: '0.6826',
                low: '0.6826',
                varBid: '0.0113',
                pctChange: '1.69',
                bid: '0.6826',
                ask: '0.6827',
                timestamp: '1693526462',
                create_date: '2023-08-31 21:01:02',
              },
              ILS: {
                code: 'ILS',
                codein: 'BRL',
                name: 'Novo Shekel Israelense/Real Brasileiro',
                high: '1.3035',
                low: '1.3029',
                varBid: '0.0107',
                pctChange: '0.83',
                bid: '1.3031',
                ask: '1.3033',
                timestamp: '1693528384',
                create_date: '2023-08-31 21:33:04',
              },
              ETH: {
                code: 'ETH',
                codein: 'BRL',
                name: 'Ethereum/Real Brasileiro',
                high: '8450',
                low: '8149.8',
                varBid: '-133.42',
                pctChange: '-1.59',
                bid: '8204.51',
                ask: '8248.95',
                timestamp: '1693528718',
                create_date: '2023-08-31 21:38:31',
              },
              XRP: {
                code: 'XRP',
                codein: 'BRL',
                name: 'XRP/Real Brasileiro',
                high: '2.6',
                low: '2.48',
                varBid: '-0.05',
                pctChange: '-1.82',
                bid: '2.54',
                ask: '2.54',
                timestamp: '1693528724',
                create_date: '2023-08-31 21:38:44',
              },
              DOGE: {
                code: 'DOGE',
                codein: 'BRL',
                name: 'Dogecoin/Real Brasileiro',
                high: '0.32757',
                low: '0.31229',
                varBid: '-0.00341',
                pctChange: '-1.06',
                bid: '0.31705',
                ask: '0.31705',
                timestamp: '1693528437',
                create_date: '2023-08-31 21:33:57',
              },
            },
          },
        ],
        editor: false,
        idToEdit: 0,
        allExpenses: '49.56',
      },
    };

    renderWithRouterAndRedux(<App />, '/carteira', state);
    const url = window.location.pathname;
    expect(url).toBe('/carteira');

    const valor = screen.getByLabelText('Valor:');
    const total = screen.getByText(/0/i);
    const moeda = screen.getByText(/BRL/i);
    const description = screen.getByRole('textbox', { name: /descrição:/i });
    const button = screen.getByRole('button', { name: /adicionar despesa/i });
    const method = screen.getByRole('combobox', { name: /metodo de pagamento:/i });

    expect(valor).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(moeda).toBeInTheDocument();
    expect(method).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /tag/i })).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    await act(async () => {
      await userEvent.type(valor, '10');
      await userEvent.type(description, 'hotwheels');
      await userEvent.click(button);
    });

    screen.getByRole('cell', { name: /hotwheels/i });
    screen.getByRole('cell', {
      name: /dólar americano\/real brasileiro/i,
    });
    screen.getByRole('cell', { name: /dinheiro/i });
    const removeButton = screen.getByRole('button', { name: /excluir/i });
    screen.getByRole('button', { name: /editar/i });
    screen.getByRole('cell', { name: /49\.56/i });
    expect(screen.getByTestId('total-field')).toHaveTextContent('49.56');

    await userEvent.click(removeButton);

    expect(screen.queryByRole('cell', { name: /hotwheels/i })).not.toBeInTheDocument();
    expect(fetch).toHaveBeenCalledTimes(1);
    const currencySelect: HTMLSelectElement = screen.getByTestId('currency-input');
    fireEvent.change(currencySelect, { target: { value: 'EUR' } });
    expect(currencySelect.value).toBe('EUR');

    const methodSelect: HTMLSelectElement = screen.getByRole('combobox', {
      name: /metodo de pagamento:/i,
    });
    fireEvent.change(methodSelect, { target: { value: 'Cartão de crédito' } });

    expect(methodSelect.value).toBe('Cartão de crédito');

    const tagSelect:HTMLSelectElement = screen.getByRole('combobox', {
      name: /tag/i,
    });

    fireEvent.change(tagSelect, { target: { value: 'Transporte' } });

    expect(tagSelect.value).toBe('Transporte');
  });

  test('testa se é possível editar uma despesa', async () => {
    const state = {
      user: {
        email: 'tryber@teste.com',
      },
      wallet: {
        currencies: [
          'USD',
          'CAD',
          'GBP',
          'ARS',
          'BTC',
          'LTC',
          'EUR',
          'JPY',
          'CHF',
          'AUD',
          'CNY',
          'ILS',
          'ETH',
          'XRP',
          'DOGE',
        ],
        expenses: [
          {
            id: 1,
            value: '10',
            currency: 'USD',
            method: 'Dinheiro',
            tag: 'Alimentação',
            description: 'hotwheels',
            exchangeRates: {
              USD: {
                code: 'USD',
                codein: 'BRL',
                name: 'Dólar Americano/Real Brasileiro',
                high: '4.9552',
                low: '4.9542',
                varBid: '0.0008',
                pctChange: '0.02',
                bid: '4.9547',
                ask: '4.9557',
                timestamp: '1693515601',
                create_date: '2023-08-31 18:00:01',
              },
              CAD: {
                code: 'CAD',
                codein: 'BRL',
                name: 'Dólar Canadense/Real Brasileiro',
                high: '3.6639',
                low: '3.6639',
                varBid: '0',
                pctChange: '0',
                bid: '3.6611',
                ask: '3.6666',
                timestamp: '1693528717',
                create_date: '2023-08-31 21:38:37',
              },
              GBP: {
                code: 'GBP',
                codein: 'BRL',
                name: 'Libra Esterlina/Real Brasileiro',
                high: '6.2814',
                low: '6.2735',
                varBid: '-0.0055',
                pctChange: '-0.09',
                bid: '6.2723',
                ask: '6.2761',
                timestamp: '1693528720',
                create_date: '2023-08-31 21:38:40',
              },
              ARS: {
                code: 'ARS',
                codein: 'BRL',
                name: 'Peso Argentino/Real Brasileiro',
                high: '0.0142',
                low: '0.0141',
                varBid: '0',
                pctChange: '0',
                bid: '0.0142',
                ask: '0.0142',
                timestamp: '1693528711',
                create_date: '2023-08-31 21:38:31',
              },
              BTC: {
                code: 'BTC',
                codein: 'BRL',
                name: 'Bitcoin/Real Brasileiro',
                high: '134846',
                low: '128204',
                varBid: '-4184',
                pctChange: '-3.13',
                bid: '129512',
                ask: '129572',
                timestamp: '1693528718',
                create_date: '2023-08-31 21:38:38',
              },
              LTC: {
                code: 'LTC',
                codein: 'BRL',
                name: 'Litecoin/Real Brasileiro',
                high: '335.8',
                low: '317.07',
                varBid: '-12.89',
                pctChange: '-3.89',
                bid: '319.17',
                ask: '319.82',
                timestamp: '1693528720',
                create_date: '2023-08-31 21:38:40',
              },
              EUR: {
                code: 'EUR',
                codein: 'BRL',
                name: 'Euro/Real Brasileiro',
                high: '5.3677',
                low: '5.3677',
                varBid: '0',
                pctChange: '0',
                bid: '5.3637',
                ask: '5.3717',
                timestamp: '1693528717',
                create_date: '2023-08-31 21:38:37',
              },
              JPY: {
                code: 'JPY',
                codein: 'BRL',
                name: 'Iene Japonês/Real Brasileiro',
                high: '0.03406',
                low: '0.03401',
                varBid: '0',
                pctChange: '0',
                bid: '0.034',
                ask: '0.03402',
                timestamp: '1693528715',
                create_date: '2023-08-31 21:38:35',
              },
              CHF: {
                code: 'CHF',
                codein: 'BRL',
                name: 'Franco Suíço/Real Brasileiro',
                high: '5.6031',
                low: '5.6031',
                varBid: '0',
                pctChange: '0',
                bid: '5.599',
                ask: '5.6073',
                timestamp: '1693528706',
                create_date: '2023-08-31 21:38:26',
              },
              AUD: {
                code: 'AUD',
                codein: 'BRL',
                name: 'Dólar Australiano/Real Brasileiro',
                high: '3.2073',
                low: '3.2073',
                varBid: '0',
                pctChange: '0',
                bid: '3.205',
                ask: '3.2097',
                timestamp: '1693528715',
                create_date: '2023-08-31 21:38:35',
              },
              CNY: {
                code: 'CNY',
                codein: 'BRL',
                name: 'Yuan Chinês/Real Brasileiro',
                high: '0.6826',
                low: '0.6826',
                varBid: '0.0113',
                pctChange: '1.69',
                bid: '0.6826',
                ask: '0.6827',
                timestamp: '1693526462',
                create_date: '2023-08-31 21:01:02',
              },
              ILS: {
                code: 'ILS',
                codein: 'BRL',
                name: 'Novo Shekel Israelense/Real Brasileiro',
                high: '1.3035',
                low: '1.3029',
                varBid: '0.0107',
                pctChange: '0.83',
                bid: '1.3031',
                ask: '1.3033',
                timestamp: '1693528384',
                create_date: '2023-08-31 21:33:04',
              },
              ETH: {
                code: 'ETH',
                codein: 'BRL',
                name: 'Ethereum/Real Brasileiro',
                high: '8450',
                low: '8149.8',
                varBid: '-133.42',
                pctChange: '-1.59',
                bid: '8204.51',
                ask: '8248.95',
                timestamp: '1693528718',
                create_date: '2023-08-31 21:38:38',
              },
              XRP: {
                code: 'XRP',
                codein: 'BRL',
                name: 'XRP/Real Brasileiro',
                high: '2.6',
                low: '2.48',
                varBid: '-0.05',
                pctChange: '-1.82',
                bid: '2.54',
                ask: '2.54',
                timestamp: '1693528724',
                create_date: '2023-08-31 21:38:44',
              },
              DOGE: {
                code: 'DOGE',
                codein: 'BRL',
                name: 'Dogecoin/Real Brasileiro',
                high: '0.32757',
                low: '0.31229',
                varBid: '-0.00341',
                pctChange: '-1.06',
                bid: '0.31705',
                ask: '0.31705',
                timestamp: '1693528437',
                create_date: '2023-08-31 21:33:57',
              },
            },
          },
        ],
        editor: false,
        idToEdit: 0,
        allExpenses: '49.56',
      },
    };
    (vi.spyOn(global, 'fetch') as any).mockResolvedValue(mockData);
    renderWithRouterAndRedux(<App />, '/carteira', state);

    await screen.findByRole('cell', {
      name: /hotwheels/i,
    });

    const editButton = screen.getByRole('button', {
      name: /editar/i,
    });

    await userEvent.click(editButton);

    const editComplete = await screen.findByRole('button', {
      name: /editar despesa/i,
    });

    const inputValue = screen.getByRole('spinbutton', {
      name: /valor:/i,
    });

    const inputDescription = screen.getByRole('textbox', {
      name: /descrição:/i,
    });
    await act(async () => {
      await userEvent.type(inputValue, '15');
      await userEvent.type(inputDescription, 'comprar alimento');
      await userEvent.click(editComplete);
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
