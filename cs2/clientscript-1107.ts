//[clientscript,bankpin_init]
function script1107(): void {
    if ((varbitplayer_47566 == 1)) {
        script8841(110, 1);
    };
    if ((varbitplayer_22875 != 2)) {
        IF_SETPOSITION(418, 7, 0, 0, comp(13, 12));  // bankpin_main:digit_1
        IF_SETPOSITION(434, 7, 0, 0, comp(13, 13));  // bankpin_main:digit_2
        IF_SETPOSITION(450, 7, 0, 0, comp(13, 14));  // bankpin_main:digit_3
        IF_SETPOSITION(466, 7, 0, 0, comp(13, 15));  // bankpin_main:digit_4
    };
    script1271(1);
    return;
}