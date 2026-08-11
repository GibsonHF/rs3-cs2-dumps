//
function script12352(): void {
    var int0 = OS_DRIVER_VENDOR();
    var string0 = "Your graphics card drivers are over 6 months old. Please consider updating your drivers to receive the optimal experience playing RuneScape.";
    if ((int0 >= 0)) {
        IF_SETHIDE(false, comp(744, 267));  // loginscreen:bottom_1
        string0 = strconcat(string0, "<br><br>Select the button below to be taken to the manufacturer's website.");
    } else {
        IF_SETHIDE(true, comp(744, 267));  // loginscreen:bottom_1
        IF_SETPOSITION(0, 10, 1, 2, comp(744, 268));  // loginscreen:left_border_1
        string0 = strconcat(string0, "<br><br>Please visit the manufacturer's website for your graphics card to update the drivers.");
    };
    IF_SETTEXT(string0, comp(744, 262));  // loginscreen:tncs_layer_background
    return;
}