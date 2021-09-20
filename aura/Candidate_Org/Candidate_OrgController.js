({
	deleteDetails : function(cmp, event, helper) {
        console.log('Please Delete');
		var newEduDetailList = cmp.get("v.educationdetailListInner");
        console.log('newEduDetailList @@@'+newEduDetailList);
        var currentIndex = cmp.get("v.indexNo");
        console.log('currentIndex @@@'+currentIndex);
        if(currentIndex > -1){
            console.log('Inside If');
            newEduDetailList.splice(currentIndex,1);
            cmp.set("v.educationdetailListInner",newEduDetailList);
        }
	}
})