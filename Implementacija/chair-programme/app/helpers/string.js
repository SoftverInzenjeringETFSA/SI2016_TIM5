import Ember from 'ember';

export function string(params)  {
  return params.toString();
}

export default Ember.Helper.helper(string);
