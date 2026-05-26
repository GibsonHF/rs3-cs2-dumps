//
function script9683(int0: number, int1: number): void {
    if ((int1 <= 0)) {
        IF_SETMODELANIM(-1, int0);
        IF_SETMODELANIM(22645, int0);
        IF_SETONTIMER(callback(), int0);
    } else {
        var int1 = (int1 - 1);
        if ((((int0 == 103874566) && (varbitplayer_26873 >= 5)) && (IF_GETHIDE(103874576) == 1))) {
            IF_SETHIDE(0, 103874576);
        };
        IF_SETONTIMER(callback(script9683, int0, int1), int0);
    };
    return;
}