({
	doInit : function(component, event, helper) {
        
        var d = new Date();
        d.setDate(d.getDate() + 5);
        var today = $A.localizationService.formatDate(d, "YYYY-MM-DD");
    	component.set('v.attrName', today); 
        
	}
})