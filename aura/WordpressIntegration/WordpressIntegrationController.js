({
    
    doInit : function(cmp) {
        
    },

	Authorize: function(component, event, helper){
        window.location.replace('https://public-api.wordpress.com/oauth2/authorize?'+'client_id=$clientid&amp;amp;redirect_uri=$redirecturi&amp;amp;response_type=code&amp;amp;scope=global');
 
 },
    
    GetAccess: function(component, event, helper){
      var action=component.get("c.getaccess");
      action.setParams({'code':component.get("v.code")});
      action.setCallback(this,function(response){
          var state=response.getState();
          if(state==='SUCCESS')
          {
              var result=response.getReturnValue();
              component.set("v.accesstoken",result);
          }
 
      });
      $A.enqueueAction(action);
 
  },
    
    send : function(component, event, helper) {
 
     var action=component.get("c.getBlogs");
     var access=component.get("v.accesstoken");
     var url="https://public-api.wordpress.com/rest/v1.1/me/posts";
     action.setParams({'url':url,'access':access});
     action.setCallback(this,function(response){
         var state=response.getState();
         if(state==='SUCCESS')
         {
             var result=response.getReturnValue();
             component.set("v.content",result);
 
         }
 
     });
     $A.enqueueAction(action);
 
 }
})