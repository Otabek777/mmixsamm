$( document ).ready(function() {
    // Burgir
    $(".header__burgir").click(function() {
        if($(".header__burgir").hasClass("active")) {
            $(".header__right").removeClass("active");
            $(".header__burgir").removeClass("rotate");
            setTimeout(function() {
                $(".header__burgir").removeClass("active");
            }, 300);
        } else {
            $(".header__right").addClass("active");
            $(".header__burgir").addClass("active");
            setTimeout(function() {
                $(".header__burgir").addClass("rotate");
            }, 300);
        };
    });
    // Input
    if($(".form_input")) {
        $(".form_input input").focus(function() {
            $(this).parent().addClass("open");
        });
        $(".form_input input").focusout(function() {
            var thisInput = $(this).val();
            if(thisInput == ''){
                $(this).parent().removeClass("open");
            };
        });
    };
    // Button Disabled 
    $(".main_btn.disable").click(function(event) {
        event.preventDefault();
    });
    $(".black_btn.disable").click(function(event) {
        event.preventDefault();
    });
    // Modal
    $(".modal-open").click(function () {
        $("#modal-main").addClass("active");
        setTimeout(function() {
            $("#modal-main").addClass("opacity");
        },1);
    });
    $(".modal__close").click(function () {
        $(".modal").removeClass("opacity");
        setTimeout(function() {
            $(".modal").removeClass("active");
        },400);
    });
    $("#modal-done .black_btn").click(function () {
        $(".modal").removeClass("opacity");
        setTimeout(function() {
            $(".modal").removeClass("active");
        },400);
    });
    $("#modal-main .main_btn").click(function() {
        $(".modal").removeClass("opacity");
        setTimeout(function() {
            $(".modal").removeClass("active");
        },400);
        setTimeout(function() {
            $("#modal-done").addClass("active");
            setTimeout(function() {
                $("#modal-done").addClass("opacity");
            },1);
        },700);
    });
    
    // Phone Number
    if(document.querySelector('.input_phone')) {
        window.addEventListener("DOMContentLoaded", function() {
            [].forEach.call( document.querySelectorAll('.tel'), function(input) {
            var keyCode;
            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                var pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                var matrix = "+7 (___) ___ ____",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    new_value = matrix.replace(/[_\d]/g, function(a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                    });
                i = new_value.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i)
                }
                var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                    function(a) {
                        return "\\d{1," + a.length + "}"
                    }).replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
                if (event.type == "blur" && this.value.length < 5)  this.value = ""
            }
        
            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false)
        
          });
        
        });
    };
});
