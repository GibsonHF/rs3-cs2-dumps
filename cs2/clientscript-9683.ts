//
function script9683(int0: component, int1: int): void {
    if ((int1 <= 0)) {
        IF_SETMODELANIM(-1 as seq, int0);
        IF_SETMODELANIM(22645 as seq, int0);
        IF_SETONTIMER(callback(), int0);
    } else {
        var int1 = (int1 - 1);
        if ((((int0 == comp(1585, 6)) && (varbitplayer_26873 >= 5)) && (IF_GETHIDE(comp(1585, 16)) == true))) {
            IF_SETHIDE(false, comp(1585, 16));
        };
        IF_SETONTIMER(callback(script9683, int0, int1), int0);
    };
    return;
}