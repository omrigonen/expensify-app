import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';
import { DateRangePicker } from 'react-dates'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />)
});

test('should render expense filter list',() => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expense filter list with alt filters',() => {
    wrapper.setProps({
        filters:altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change',() => {
    const event = {
        target: {value: 'gum'}
    };
    wrapper.find('input').simulate('change', event);
    expect(setTextFilter).toHaveBeenLastCalledWith(event.target.value);
});

test('should sort by date',() => {
    const event = {
        target: {value: 'date'}
    };
    wrapper.find('select').simulate('change', event);
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount',() => {
    const event = {
        target: {value: 'amount'}
    };
    wrapper.find('select').simulate('change', event);
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes',() => {
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8, 'years');

    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes',() => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});