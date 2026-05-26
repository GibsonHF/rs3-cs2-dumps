//
function script18325(): void {
    if (((((varplayer_10946 != -1 as struct) && (struct_getparam(varplayer_10946, 8990) != -1 as struct)) && (varplayer_11535 != -1)) && (varplayer_11536 != -1))) {
        IF_SETHIDE(false, comp(1181, 1));
        IF_SETPOSITION(0, 40, 1, 0, comp(1181, 2));
    } else {
        IF_SETHIDE(true, comp(1181, 1));
        IF_SETPOSITION(0, 0, 1, 0, comp(1181, 2));
    };
    return;
}