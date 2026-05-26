//
function script19182(int0: number, int1: number): void {
    var int2 = -1;
    if ((int1 <= 0)) {
        if ((int0 == 84410437)) {
            varbitplayer_56046 = 0;
            int2 = script16161();
            script19184(int2, int0);
        } else if ((int0 == 84410411)) {
            IF_SETMODELANIM(varclient_7803, int0);
            unk10997(int0);
        } else if ((int0 == 84410424)) {
            IF_SETMODEL(-1, int0);
            IF_SETMODELANIM(-1 as seq, int0);
            unk10997(int0);
        };
        IF_SETONTIMER(callback(), int0);
    } else {
        IF_SETONTIMER(callback(script19181, int0, (int1 - 1)), int0);
    };
    return;
}