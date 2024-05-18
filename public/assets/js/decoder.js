$(document).ready(function() {
	function decode(img) {
		var qr = new QrcodeDecoder();
		var btn = document.querySelector('#vcard');

		btn.onclick = async () => {
			const code = await qr.decodeFromImage(img);

			var content = code.data;
			var filename = "vcard.vcf";

			var blob = new Blob([content], { type: "text/vcard"});
			saveAs(blob, filename);
		};
	}

	$('#vcard').parent().click(function(e) {
		e.preventDefault();
		var img = $('#vcard').attr('src');

		decode(img);
	});
});
