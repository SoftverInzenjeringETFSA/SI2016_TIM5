import BaseModel from './base-model';

var _modelProperties = ['id', 'userId', 'documentLink', 'isVerified', 'reviewerId', 'review'];

export default BaseModel.extend({
	modelProperties: _modelProperties,
});
