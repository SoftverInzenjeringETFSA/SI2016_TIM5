import BaseService from './base-service';
import Speaker from '../models/speaker';

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
        var speaker = Speaker.create({});
        this.ajax({ url: "http://localhost:8080/speakers/get?id="+id, type: "GET"}).then(function(data) {
        	console.log("data: ");
        console.log(data);
        speaker.setProperties(data);
        	console.log("created: ");
        	console.log(speaker);

        });

        return speaker;
    }

});
