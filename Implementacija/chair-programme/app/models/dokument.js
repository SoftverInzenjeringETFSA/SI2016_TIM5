import BaseModel from './base-model';

var _modelProperties = ['id', 'userId', 'documentLink', 'isVerified'];

export default BaseModel.extend({
	modelProperties: _modelProperties,
});
