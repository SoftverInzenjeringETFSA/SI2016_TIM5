import BaseService from './base-service';
import User from '../models/user';

export default BaseService.extend({
    all: function() {
        var users = [];
        this.ajax({ url: "http://localhost:8080/users/all", type: "GET" }).then(function(data) {
            data.forEach(function(user) {
                users.addObject(user);
            });
        });
        return users;
    },

    getById: function(id) {
        var user = User.create({});
        this.ajax({ url: "http://localhost:8080/users/get?id="+id, type: "GET"}).then(function(data) {
        	console.log("data: ");
        console.log(data);
        user.setProperties(data);
        	console.log("created: ");
        	console.log(user);
        });

        return user;
    },

    getReviewers: function() {
        var reviewers = [];
        this.ajax({ url: "http://localhost:8080/users/reviewers", type: "GET" }).then(function(data) {
            data.forEach(function(user) {
                reviewers.addObject(user);
            });
        });
        return reviewers;
    },

    register: function(data) {
      return this.ajax({ url: "http://localhost:8080/users/create", type: "POST", data: JSON.stringify(data)})
  }


});
