import BaseService from './base-service';
import User from '../models/user';

export default BaseService.extend({
    all: function() {
        var users = []; // ovdje prazan objekat
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
    }

});
