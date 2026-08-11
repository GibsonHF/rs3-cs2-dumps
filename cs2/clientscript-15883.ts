//
function script15883(): void {
    var string0 = IF_GETTEXT(comp(94, 5));  // image_sequence:text
    var int0 = script15884(string0, "<br>");
    script15887(6160389, (int0 + 1), 1024, 160, 25, 16357, 18);
    IF_SETPARAM_INT(8059, IF_GETWIDTH(comp(94, 5)), comp(94, 5));  // image_sequence:text
    IF_SETPARAM_INT(8060, IF_GETHEIGHT(comp(94, 5)), comp(94, 5));  // image_sequence:text
    return;
}