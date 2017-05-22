import BaseService from './base-service';
import Dokument from '../models/dokument';

export default BaseService.extend({
    all: function() {
        var dokuments = []; // ovdje prazan objekat
        this.ajax({ url: "http://localhost:8080/documents/all", type: "GET" }).then(function(data) {
            data.forEach(function(dokument) {
                dokuments.addObject(dokument);
            });
        });
        return dokuments;
    },

    getById: function(id) {
        var dokument = Dokument.create({});
        this.ajax({ url: "http://localhost:8080/documents/get?id="+id, type: "GET"}).then(function(data) {
        	console.log("data: ");
        console.log(data);
        dokument.setProperties(data);
        	console.log("created: ");
        	console.log(dokument);
        });

        return dokument;
    }

});
