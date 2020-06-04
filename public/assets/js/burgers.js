$(function() {
    $(".devour_btn").on("click", function(event) {
        const id = $(this).data("burgerid");
        $.ajax("/api/burger/" + id, {
            type: "PUT"
        }).then(function() {
            location.reload();
        })
    })

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            name: $("#burger").val().trim(),
            devoured: false
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });
    });
});