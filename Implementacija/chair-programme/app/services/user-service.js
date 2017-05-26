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

        user.setProperties(data);
        });

        return user;
    },

    getByPassword: function(password) {
        var user = User.create({});
        this.ajax({ url: "http://localhost:8080/users/get?password="+password, type: "GET"}).then(function(data) {

        user.setProperties(data);
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

    getByName: function(name) {
      var users = [];
      this.ajax({ url: "http://localhost:8080/users/results?name="+name, type: "GET" }).then(function(data) {
          data.forEach(function(user) {

            console.log(user);
              users.addObject(user);
          });
      });
      return users;
    },

    register: function(data) {
      return this.ajax({ url: "http://localhost:8080/users/create", type: "POST", data: JSON.stringify(data)})
  },

  update: function(password,id) {
        return this.ajax({ url: "http://localhost:8080/users/update?pass="+password+"&id=" + id, type: "POST"});
    },


});
