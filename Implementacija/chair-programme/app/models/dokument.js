import BaseModel from './base-model';

var _modelProperties = ['id', 'userId', 'documentLink', 'isApproved', 'reviewerId', 'review','name'];

export default BaseModel.extend({
	modelProperties: _modelProperties,
});
