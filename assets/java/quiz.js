var correctchoices=['a','b','c','d'];

$(document).ready(function(){
    setInterval(function(){ alert('Time is up! 20 seconds have passed! Click OK to see your results'); getUserAnswers(); }, 20000);
});

$(document).on('click', '#start', function(e) {
	getUserAnswers();
});

function getUserAnswers (){

    var selected = $("input[type='radio'][name='q1']:checked");
    if (selected.length > 0) {
        var selectedradio1 = selected.val();
    }
	 
    selected = $("input[type='radio'][name='q2']:checked");
    if (selected.length > 0) {
        var selectedradio2 = selected.val();
    }

    selected = $("input[type='radio'][name='q3']:checked");
    if (selected.length > 0) {
        var selectedradio3 = selected.val();
    }

    selected = $("input[type='radio'][name='q4']:checked");
    if (selected.length > 0) {
        var selectedradio4 = selected.val();

    }

    var userSelected = [selectedradio1, selectedradio2, selectedradio3, selectedradio4];
    var correct = 0;
    var incorrect = 0;
    var storeResponses = "";
 
    for (var i=0; i<userSelected.length; i++){
    	
        if(correctchoices[i] == userSelected[i])
    	{	
    	storeResponses += 'You got number '+(i+1)+' correct!\n';
    	correct++;
    	}
    	
        else
    	{
    	storeResponses +='You got number '+(i+1)+' incorrect. The answer is '+correctchoices[i]+'\n';
    	incorrect++;
    	}	 
    }

    alert(storeResponses+'\nYou got '+ correct+' correct and '+incorrect+' incorrect.\n\nThe test will restart after you press OK.');
    location.reload();

} 