$(document).ready(function()
{
    $("#hideme").click(function()
    {
        $("#content").hide(1000);
    });
    $("#showme").click(function()
    {
        $("#content").show();
    });
    $("#clickme").click(function()
    {
        $("#content").toggle();
    });
    $("#fadein").click(function()
    {
        $("#content").fadeIn("show");
    });
    $("#fadeout").click(function()
    {
        $("#content").fadeOut();
    });
    $("#fadetoggle").click(function()
    {
        $("#content").fadeToggle();
    });

});