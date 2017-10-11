import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('should total expenses',() => {
    expect(selectExpensesTotal(expenses)).toBe(5790);
});


test('should total empty array',() => {
    expect(selectExpensesTotal([])).toBe(0);
});


test('should total 1 item',() => {
    expect(selectExpensesTotal([expenses[0]])).toBe(expenses[0].amount);
});
