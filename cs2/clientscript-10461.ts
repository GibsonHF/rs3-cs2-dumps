//
function script10461(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = -1;
    if ((IF_FIND(int1) == 1)) {
        IF_SETONTIMER(callback(), int0);
        cc_setparam(6568, -1);
        cc_setparam(4521, -1);
        cc_setparam(4520, -1);
        cc_setparam(4522, 0);
        IF_SETHIDE(true, int1);
        if ((int3 != comp(-1, 65535))) {
            IF_SETHIDE(true, int3);
        };
        script10468(int0, 0);
    };
    return;
}