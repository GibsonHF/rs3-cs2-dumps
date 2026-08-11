//[clientscript,bankpin_init]
function script1107(): void {
    if ((varbitplayer_22875 != 2)) {
        IF_SETPOSITION(418, 7, 0, 0, comp(13, 21));  // bankpin_main:digit_1
        IF_SETPOSITION(434, 7, 0, 0, comp(13, 22));  // bankpin_main:digit_2
        IF_SETPOSITION(450, 7, 0, 0, comp(13, 23));  // bankpin_main:digit_3
        IF_SETPOSITION(466, 7, 0, 0, comp(13, 24));  // bankpin_main:digit_4
    };
    script1271(1);
    return;
}