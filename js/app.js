$(document).ready(function() 
{
	backgroundmusic();

	$('.ryu')
	.mouseenter(function() 
	{
    	$(".ryu-still").hide();
    	$(".ryu-ready").show();
  })
	.mouseleave(function()
	{
		$(".ryu-still").show();
    	$(".ryu-ready").hide();
    	$(".ryu-cool").hide();
	})
	.mousedown(function()
	{
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
		.animate({"left": "500px"}, 300, function() 
			{
				$(this).hide();
				$(this).css("left", "-210px");
			}
		);
	})
	.mouseup(function()
	{
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
		//$(".hadouken").hide();//
	})

	$(document).keydown(function(event)
	{
		if (event.which == 88)
			{
				$(".ryu-still").hide();
				$(".ryu-throwing").hide();
				$(".ryu-ready").hide();
				$(".ryu-cool").show();
			};
	})
	
	.keyup(function(event)
	{
		$(".ryu-cool").hide();
		$(".ryu-ready").show();
	})
});

$(document).ready(function()
{
	$("#instructions").on('mouseenter', 'li', function()
		{
			$(".one").hide();
			$(".two").show();
		})

	.on("mouseleave", "li", function()
		{
			$(".one").show();
			$(".two").hide();
		});
});

function playHadouken () 
	{
 		$('#hadouken-sound')[0].volume = 0.5;
  		$('#hadouken-sound')[0].load();
  		$('#hadouken-sound')[0].play();
	}

function backgroundmusic ()
	{
		$('#ryu-theme')[0].volume = 0.5;
  		$('#ryu-theme')[0].load();
  		$('#ryu-theme')[0].play();
	}