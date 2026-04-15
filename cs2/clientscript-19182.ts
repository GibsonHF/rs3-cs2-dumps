//
function script19182(int0: component, int1: int): void {
    var int2 = -1 as struct;
    if ((int1 <= 0)) {
        if ((int0 == comp(1288, 69))) {
            varbitplayer_56046 = 0;
            int2 = script16161();
            script19184(int2, int0);
        } else if ((int0 == comp(1288, 43))) {
            IF_SETMODELANIM(varclient_7803, int0);
            unk10997(int0);
        } else if ((int0 == comp(1288, 56))) {
            IF_SETMODEL(-1 as model, int0);
            IF_SETMODELANIM(-1 as seq, int0);
            unk10997(int0);
        };
        IF_SETONTIMER(callback(), int0);
    } else {
        IF_SETONTIMER(callback(script19181, int0, (int1 - 1)), int0);
    };
    return;
}