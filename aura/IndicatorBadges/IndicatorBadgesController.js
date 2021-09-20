({
  doInit : function(component, event, helper) {
      
    //The component’s controller can access the ID of the current record from the recordId attribute, 
    //using component.get("v.sObjectName"). 
    //The recordId attribute is automatically added to the component by the 
    //force:hasSObjectName interface.
    //
    var recId = component.get("v.recordId");
    var sObj = component.get("v.sObjectName");
    if(sObj){
      helper.getLabelForRecord(component, sObj);
      helper.getBadgesForRecord(component, recId, sObj);
    }
  },
  //future code here
})