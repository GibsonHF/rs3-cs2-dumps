//
function script10461(int0: component, int1: component, int2: component, int3: component): void {
    var int4 = -1;
    if ((IF_FIND(int1) == 1)) {
        IF_SETONTIMER(callback(), int0);
        cc_setparam(6568, -1);
        cc_setparam(4521, -1);
        cc_setparam(4520, -1);
        cc_setparam(4522, 0);
        IF_SETHIDE(1, int1);
        if ((int3 != -1)) {
            IF_SETHIDE(true, int3);
        };
        script10468(int0, 0);
    };
    return;
}