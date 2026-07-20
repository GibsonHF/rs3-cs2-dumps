//
function script11053(int0: number): void {
    if ((int0 == -1 as struct)) {
        var int0 = varplayer_5144;
    };
    var int1 = 0;
    int1 = struct_getparam(int0, 3387);
    var int2 = struct_getparam(int0, 4829);
    if ((struct_getparam(int0, 3814) > 0)) {
        IF_SETHIDE(false, comp(1591, 43));
        IF_SETHIDE(false, comp(1591, 49));
    } else {
        IF_SETHIDE(true, comp(1591, 43));
    };
    if ((struct_getparam(int0, 3042) == true)) {
        IF_SETHIDE(true, comp(1591, 82));
    } else {
        IF_SETHIDE(false, comp(1591, 82));
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
    IF_SETTEXT(struct_getparam(int0, 3815), comp(1591, 9));
    if ((((struct_getparam(int0, 3345) != -1 as struct) || (struct_getparam(int0, 4826) == 1)) && (struct_getparam(int0, 7426) == 0))) {
        IF_SETHIDE(false, comp(1591, 10));
    } else {
        IF_SETHIDE(true, comp(1591, 10));
    };
    if ((struct_getparam(int0, 7433) == 1)) {
        IF_SETHIDE(true, comp(1591, 11));
    };
    IF_SETTEXT(`${struct_getparam(int0, 8574)}:`, comp(1591, 108));
    if ((varbitplayer_27141 == 1)) {
        IF_SETHIDE(false, comp(1591, 60));
        IF_SETHIDE(true, comp(1591, 62));
        IF_SETHIDE(false, comp(1591, 113));
    } else {
        IF_SETHIDE(true, comp(1591, 60));
        IF_SETHIDE(false, comp(1591, 62));
        IF_SETHIDE(true, comp(1591, 113));
    };
    varbitplayer_27143 = varbitplayer_27150;
    return;
}