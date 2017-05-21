import BaseService from './base-service';
import Document from '../models/document';

export default BaseService.extend({
    all: function() {
        var documents = []; // ovdje prazan objekat
        this.ajax({ url: "http://localhost:8080/documents/all", type: "GET" }).then(function(data) {
            data.forEach(function(document) {
                documents.addObject(document);
            });
        });
        return speakers;
    },

    getById: function(id) {
        var document = Document.create({});
        this.ajax({ url: "http://localhost:8080/documents/get?id="+id, type: "GET"}).then(function(data) {
        	console.log("data: ");
        console.log(data);
        document.setProperties(data);
        	console.log("created: ");
        	console.log(document);

        });

        return document;
    }

});
