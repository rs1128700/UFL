({
	createCandidateRecord : function(cmp, evt, helper) {
		
	},
    
    onClickCheckbox : function(cmp,evt,helper){
        console.log('Called me');
        
        helper.onClickCheckboxhelper(cmp,evt);
    },
    
    addDetails : function(cmp,evt,helper){
        console.log('Please Add');
    	var currentEduDetailList = cmp.get("v.eduDetailList");
        console.log('currentEduDetailList @@@'+currentEduDetailList);
        
        var currentSize = parseInt((currentEduDetailList.length));
        console.log('currentSize @@@@'+ currentSize);
        
        var newSize = currentSize + 1;
        console.log('newSize @@@'+newSize);
        
        currentEduDetailList.push(newSize);
        console.log('currentEduDetailList @@@'+ currentEduDetailList);
        
        cmp.set("v.eduDetailList",currentEduDetailList);
	}
    
})