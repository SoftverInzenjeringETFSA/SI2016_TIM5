import BaseModel from './base-model';

var _modelProperties = ['id', 'userId', 'documentLink', 'isApproved'];

export default BaseModel.extend({
	modelProperties: _modelProperties,
});
