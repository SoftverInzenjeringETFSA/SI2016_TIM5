import BaseModel from './base-model';

var _modelProperties = ['id', 'firstName', 'lastName', 'email', 'password', 'roleId', 'isVerified'];

export default BaseModel.extend({
	modelProperties: _modelProperties,
});
