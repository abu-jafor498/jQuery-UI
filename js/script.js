// ex 1
$(document).ready(function(){
        $("#draggable").draggable();
})

// ex 2
$(document).ready(function(){
        $("#dragh").draggable({axis: "y"});
})

// ex 3
$(document).ready(function(){
        $("#dragh1").draggable({axis: "x"});
})

// ex 4
$(document).ready(function(){
        $("#dragh2").draggable({containment: ".div_cont", Scroll: false });

})
// ex 5
$(document).ready(function(){
        $("#drag3").draggable({containment: "parent"});

})

// ex 6
$(document).ready(function(){
        $('#sort').sortable({
                revert : true
        });
})

$(document).ready(function(){
        $('#drag_li').draggable({
                connectToSortable: "#sortable",
                helper: "clone",
                revert: "invalid"
        });
})

// ex 7
$(document).ready(function(){
        $('#revert').draggable({ revert: true })
})

// ex 8
$(document).ready(function(){
        $('#revert1').draggable({ revert: true, helper: "clone" })
})

// ex 9
$(document).ready(function(){
        $(".drop").droppable({
                drop:function( event, ui ) {
                        $(this)
                        .addClass( )
                        .find("h1")
                        .html("Dropped!");
                }
        });
});

// ex 10
$(document).ready(function(){
        $(".drg").draggable();
        $("drp").droppable({
                accept: ".drp",
                drop:function( event, ui) {
                        $(this)
                        .addClass()
                        .find("h3")
                        .html("Dropped!");
                }
        });
});

// ex 11
$(document).ready(function(){
        $(".resize").resizable();
})

// ex 12
$(document).ready(function(){
        $(".select").selectable();
})

// ex 13
$(function(){
        $(".sortab").sortable();
})

// ex 14
$(function(){
        $(".accordion").accordion();
})

// ex 15
$(function(){
        $("#datepicker").datepicker();
})