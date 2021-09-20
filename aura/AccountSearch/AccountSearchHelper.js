({
    // code in the helper is reusable by both
    // the controller.js and helper.js files
    handleSearch: function( component, searchTerm ) {
        
        //gets a reference to a server-side action—an @AuraEnabled method named searchAccounts. 
        //The Apex method must belong to the controller specified on the <aura:component> tag.
        
        var action = component.get( "c.searchAccounts" );
        //takes a JSON object whose keys match the name and type of the Apex method’s parameters.
        action.setParams({
            searchTerm: searchTerm
        });
        //provides the JavaScript callback function to handle the asynchronous response from the server-side action.
        //This callback fires the AccountsLoaded event passing the account search results.
        action.setCallback( this, function( response ) {
            var event = $A.get( "e.c:AccountsLoaded" );
            //response.getReturnValue() is the value returned by the Apex method, 
            //automatically serialized as JSON.
            event.setParams({
                "accounts": response.getReturnValue()
            });
            event.fire();
        });
        //$A.enqueueAction(..) adds the server-side controller action to the queue of actions to be executed.
        $A.enqueueAction( action );
    }
})