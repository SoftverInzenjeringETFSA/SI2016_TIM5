import Ember from 'ember';

export function eq(params/*, hash*/) {
  let prvi = params[0].toString(),
    drugi = params[1],
    vrati = false;

    if (prvi==drugi) { vrati = true; }
    return vrati;
}

export default Ember.Helper.helper(eq);
