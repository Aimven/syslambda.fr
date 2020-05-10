$(document).ready(function () {
    $(window).scroll(function () {
        let scroll = 100 * Math.ceil($(document).scrollTop() / 100);
        let height = 400 * Math.ceil($(window).height() / 100);
        console.log(scroll + " out of " + height)
        let oneDocumentHeight = height / 4; // We have 4 pages
        console.log(oneDocumentHeight);
        if(scroll <= oneDocumentHeight - (height/10)) {
            if(!$("body").hasClass("home")) $("body").addClass("home");
            if($("body").hasClass("about")) $("body").removeClass("about");
            if($("body").hasClass("projects")) $("body").removeClass("projects");
            if($("body").hasClass("contact")) $("body").removeClass("contact");
        } else if(scroll <= (oneDocumentHeight * 2) - (height/10)) {
            if($("body").hasClass("home")) $("body").removeClass("home");
            if(!$("body").hasClass("about")) $("body").addClass("about");
            if($("body").hasClass("projects")) $("body").removeClass("projects");
            if($("body").hasClass("contact")) $("body").removeClass("contact");
        } else if(scroll <= (oneDocumentHeight * 3) - (height/10)) {
            if($("body").hasClass("home")) $("body").removeClass("home");
            if($("body").hasClass("about")) $("body").removeClass("about");
            if(!$("body").hasClass("projects")) $("body").addClass("projects");
            if($("body").hasClass("contact")) $("body").removeClass("contact");
        } else if(scroll <= (oneDocumentHeight * 4) - (height/10)) {
            if($("body").hasClass("home")) $("body").removeClass("home");
            if($("body").hasClass("about")) $("body").removeClass("about");
            if($("body").hasClass("projects")) $("body").removeClass("projects");
            if(!$("body").hasClass("contact")) $("body").addClass("contact");
        }
    });
});

$(document).ready(function(){
    $("a").on('click', function(event) {
        if(this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            
            window.location.hash = hash;
        });
      } // End if
    });
});

$("html, body").animate({ scrollTop: 0 }, "slow");

function discordTag() {
    navigator.clipboard.writeText("sysΛ 🍯#3162").then(function() {
        Swal.fire({
            title: "Succès",
            text: "Tag copié !",
            icon: "success",
            showConfirmButton: false,
            timer: 1000
        });
    }, function() {
        Swal.fire({
            title: "Oups...",
            html: "Votre navigateur n'est pas pris en charge pour la copie du tag Discord. Mais j'ai une solution !<br /><input value=\"sysΛ 🍯#3162\" onClick=\"this.setSelectionRange(0, this.value.length)\" readonly />",
            icon: "error"
        });
    });
}

function redir(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

console.log("(syslambda.fr) Loaded.");