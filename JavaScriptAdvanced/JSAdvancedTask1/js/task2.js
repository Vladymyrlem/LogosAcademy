var People = {
    // The array for the render to reference. technically, each person should be a module
    people: ["Andrey", "Vlad", "Sergey", "James", "Mille"],
    // init is how we kick off our module. Call people.init()
    init: function(){
        // cache the DOM first.
        this.cacheDom();
        this.bindEvents();
        this.render();
    },
    // Here is where all the DOM elements are cached for the module to use.
    cacheDom: function() {
        this.$element = $('.task2');
        this.$button = this.$element.find('button');
        this.$input = this.$element.find('input');
        this.$ul = this.$element.find('ul');
        this.template = this.$element.find('#people-template').html();
    },
    // bind all events
    bindEvents: function(){
        // in order to keep the value of this by binding it to the method, otherwise the value of this will change to this.$button
        this.$button.on('click', this.addPerson.bind(this));
        //
        this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
    },
    // take the module and render it to the DOM
    render: function() {
        // create a data object for Mustache.js to use
        var data = {
            people: this.people,
        };
        // render with Mustache.js
        this.$ul.html(Mustache.render(this.template, data));
    },
    addPerson: function(value) {
        // add the person to the people array
        this.people.push(value || this.$input.val());
        // then render again
        this.render();
        // then empty out the input
        this.$input.val('');
    },
    deletePerson: function(event) {
        // find the closest li
        var $remove = $(event.target).closest('li');
        // get the index of that li
        var i = this.$ul.find('li').index($remove);
        // take that index out of the array
        this.people.splice(i, 1);
        // render
        this.render();
    }
};

People.init();
