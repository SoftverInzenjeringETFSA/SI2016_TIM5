import BaseService from './base-service';
import Speaker from '../models/role';

export default BaseService.extend({
    all: function() {
        var roles = []; // ovdje prazan objekat
        this.ajax({ url: "http://localhost:8080/roles/all", type: "GET" }).then(function(data) {
            data.forEach(function(role) {
                roles.addObject(role);
            });
        });
        return roles;
    },

    getById: function(id) {
        var role = Role.create({});
        this.ajax({ url: "http://localhost:8080/roles/get?id="+id, type: "GET"}).then(function(data) {
        	console.log("data: ");
        console.log(data);
        role.setProperties(data);
        	console.log("created: ");
        	console.log(role);

        });

        return role;
    }

});
