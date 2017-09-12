// $(document).ready(function() {

// 	$('div.skillcontent').hide();

//     // $('div').hide();
//     $('h2.skilldescription').bind('mouseover', function() {
//     	// $('div.skillcontent').fadeOut();

        
        
//         $('#'+$(this).attr('id')+'content').fadeIn('slow');
//         $('#skillrow2').animate({
//         'marginTop' : "+=5px" //moves down
//         });
//     });
//     $('h2.skilldescription').bind('mouseout', function() {
//     	$('div.skillcontent').fadeOut();
//         $('#'+$(this).attr('id')+'content').fadeOut();
//         $('#skillrow2').animate({
//         'marginTop' : "-=10px" //moves down
//         });
//     });

//     $('#movedown').click(function() {
        
//     });
// });

function addMargin() {
   window.scrollTo(0, window.pageYOffset - 100);
}

window.addEventListener('hashchange', addMargin);