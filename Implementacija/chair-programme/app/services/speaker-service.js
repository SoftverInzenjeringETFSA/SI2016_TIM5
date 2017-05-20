import Ember from 'ember';

import BaseService from './base-service';

export default BaseService.extend({
    all: function() {
        var speakers = []; // ovdje prazan objekat
        this.ajax({ url: "http://localhost:8080/speakers/all", type: "GET" }).then(function(data) {
            data.forEach(function(speaker) {
                speakers.addObject(speaker);
            });
        });
        return speakers;
    },

    getById: function(id) {
        var speaker = Ember.Object.create({});
        this.ajax({ url: "http://localhost:8080/speakers/one/${id}", type: "GET"}).then(function(id) {
        	console.log("data: ");
        console.log(id);

        	console.log("created: ");
        	console.log(speaker);
            speaker.setProperties(id);
        });

        return speaker;
    }

});
