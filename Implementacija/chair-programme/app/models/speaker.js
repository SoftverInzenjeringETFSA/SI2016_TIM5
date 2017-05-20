import BaseModel from './base-model';

var _modelProperties = ['id', 'firstName', 'lastName', 'cv', 'imageLink', 'info', 'link'];

export default BaseModel.extend({
	modelProperties: _modelProperties,
});
