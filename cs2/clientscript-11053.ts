//
function script11053(int0: struct): void {
    if ((int0 == -1 as struct)) {
        var int0 = varplayer_5144;
    };
    var int1 = 0;
    int1 = struct_getparam(int0, 3387);
    var int2 = struct_getparam(int0, 4829);
    if ((struct_getparam(int0, 3814) > 0)) {
        IF_SETHIDE(false, comp(1591, 47));
        IF_SETHIDE(false, comp(1591, 53));
    } else {
        IF_SETHIDE(true, comp(1591, 47));
    };
    if ((struct_getparam(int0, 3042) == true)) {
        IF_SETHIDE(true, comp(1591, 86));
    } else {
        IF_SETHIDE(false, comp(1591, 86));
    };
    if ((struct_getparam(int0, 3814) > 0)) {
        varbitplayer_27138 = struct_getparam(int0, 3814);
    } else if ((varbitplayer_27145 != 0)) {
        varbitplayer_27138 = MIN(varbitplayer_27145, int1);
    } else if ((varbitplayer_27138 == 0)) {
        varbitplayer_27138 = int1;
    };
    if ((struct_getparam(int0, 4090) == true)) {
        if ((varbitplayer_27146 != 0)) {
            varbitplayer_27139 = MIN(varbitplayer_27146, COMLEVEL_ACTIVE());
        } else if ((varbitplayer_27139 == 0)) {
            varbitplayer_27139 = COMLEVEL_ACTIVE();
        };
    } else {
        varbitplayer_27139 = 0;
    };
    if (((struct_getparam(int0, 3042) == true) && (varbitplayer_27147 != 0))) {
        varbitplayer_27140 = varbitplayer_27147;
    };
    IF_SETTEXT(struct_getparam(int0, 3815), comp(1591, 12));
    if ((((struct_getparam(int0, 3345) != -1 as struct) || (struct_getparam(int0, 4826) == 1)) && (struct_getparam(int0, 7426) == 0))) {
        IF_SETHIDE(false, comp(1591, 13));
    } else {
        IF_SETHIDE(true, comp(1591, 13));
    };
    if ((struct_getparam(int0, 7433) == 1)) {
        IF_SETHIDE(true, comp(1591, 14));
    };
    IF_SETTEXT(`${struct_getparam(int0, 8574)}:`, comp(1591, 112));
    if ((varbitplayer_27141 == 1)) {
        IF_SETHIDE(false, comp(1591, 64));
        IF_SETHIDE(true, comp(1591, 66));
        IF_SETHIDE(false, comp(1591, 117));
    } else {
        IF_SETHIDE(true, comp(1591, 64));
        IF_SETHIDE(false, comp(1591, 66));
        IF_SETHIDE(true, comp(1591, 117));
    };
    varbitplayer_27143 = varbitplayer_27150;
    return;
}