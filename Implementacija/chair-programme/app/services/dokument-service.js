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
    },

    allUserDocs: function(id) {
        var dokuments = []; // ovdje prazan objekat
        this.ajax({ url: "http://localhost:8080/documents/allUserDocs?id="+id, type: "GET" }).then(function(data) {
            data.forEach(function(dokument) {
                dokuments.addObject(dokument);
            });
        });
        return dokuments;
    },

    allUserRDocs: function(id) {
        var dokuments = []; // ovdje prazan objekat
        this.ajax({ url: "http://localhost:8080/documents/allUserRDocs?id="+id, type: "GET" }).then(function(data) {
            data.forEach(function(dokument) {
                dokuments.addObject(dokument);
            });
        });
        return dokuments;
    },

    DocsForReview: function() {
        var dokuments = []; // ovdje prazan objekat
        this.ajax({ url: "http://localhost:8080/documents/DocsForReview", type: "GET" }).then(function(data) {
            data.forEach(function(dokument) {
                dokuments.addObject(dokument);
            });
        });
        return dokuments;
    },

    getReviewerDocs: function(id) {
        var dokuments = []; // ovdje prazan objekat
        this.ajax({ url: "http://localhost:8080/documents/getReviewerDocs?id="+id, type: "GET" }).then(function(data) {
            data.forEach(function(dokument) {
                dokuments.addObject(dokument);
            });
        });
        return dokuments;
    },
    updateReviewer: function(reviewerid,id) {
          return this.ajax({ url: "http://localhost:8080/documents/update?reviewer="+reviewerid+"&id=" + id,type: "POST"});
      },
      register: function(data) {
        console.log(data);
        return this.ajax({ url: "http://localhost:8080/documents/create", type: "POST", data: JSON.stringify(data)})
    },

});
