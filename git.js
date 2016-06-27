$("#git").DataTable({
    "ajax" : "git.json",
	"lengthMenu": [
	[5,10, -1],
	[5,10, "Alle"]
	],
	
});

$(".tooltipster").tooltipster();