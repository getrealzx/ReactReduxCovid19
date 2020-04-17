import * as Constants from '../constants'
import data from '../data.json'

const options = [{
  name: 'Total Cases',
  description: 'Estimated total population',
  property: 'pop_est',
  stops: [
    [0, '#D3D1D1'],
    [1000000, '#B0A5A5'],
    [5000000, '#AC8F8F'],
    [10000000, '#B47676'],
    [50000000, '#C66E6E'],
    [100000000, '#D66464'],
    [250000000, '#E35252'],
    [500000000, '#D51B1B'],
    [1000000000, '#B40303']
  ]
}, {
  name: 'Total Deaths',
  description: 'Estimate total GDP in millions of dollars',
  property: 'gdp_md_est',
  stops: [
    [0, '#f8d5cc'],
    [1000, '#f4bfb6'],
    [5000, '#f1a8a5'],
    [10000, '#ee8f9a'],
    [50000, '#ec739b'],
    [100000, '#dd5ca8'],
    [250000, '#c44cc0'],
    [5000000, '#9f43d7'],
    [10000000, '#6e40e6']
  ]
},
{
  name: 'Total New Cases',
  description: 'Estimate total GDP in millions of dollars',
  property: 'gdp_md_est',
  stops: [
    [0, '#f8d5cc'],
    [1000, '#f4bfb6'],
    [5000, '#f1a8a5'],
    [10000, '#ee8f9a'],
    [50000, '#ec739b'],
    [100000, '#dd5ca8'],
    [250000, '#c44cc0'],
    [5000000, '#9f43d7'],
    [10000000, '#6e40e6']
  ]
}
,
{
  name: 'Total Recovery',
  description: 'Estimate total GDP in millions of dollars',
  property: 'gdp_md_est',
  stops: [
    [0, '#f8d5cc'],
    [1000, '#f4bfb6'],
    [5000, '#f1a8a5'],
    [10000, '#ee8f9a'],
    [50000, '#ec739b'],
    [100000, '#dd5ca8'],
    [250000, '#c44cc0'],
    [5000000, '#9f43d7'],
    [10000000, '#6e40e6']
  ]
}]

const initialState: State = {
  data,
  options,
  active: options[0]
};

function mapRecucer(state = initialState, action) {
  switch (action.type) {
    case Constants.SET_ACTIVE_OPTION:
      return Object.assign({}, state, {
        active: action.option
      });
    default:
      return state;
  }
}

export { mapRecucer, initialState };
