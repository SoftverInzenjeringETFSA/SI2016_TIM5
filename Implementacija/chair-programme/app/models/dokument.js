import BaseModel from './base-model';

var _modelProperties = ['id', 'userId', 'documentLink', 'isVerified', 'reviewerId', 'review','name'];

export default BaseModel.extend({
	modelProperties: _modelProperties,
});
