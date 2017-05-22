import BaseModel from './base-model';

var _modelProperties = ['id', 'firstName', 'lastName', 'email', 'password', 'roleId', 'isVerified', 'city', 'state', 'function', 'note'];

export default BaseModel.extend({
	modelProperties: _modelProperties,
});
