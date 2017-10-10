import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';


test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generate set end date action object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should generate text filter object', () => {
    const action = setTextFilter('test');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'test'
    })
});

test('should generate text filter object with clear text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
});

test('should generate filter object to set sort by date',() => {
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE',
        sortBy:'date'
    });
});

test('should generate filter object to set sort by amount',() => {
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
        sortBy:'amount'
    });
});