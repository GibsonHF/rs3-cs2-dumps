//
function script16813(int0: number, int1: number, int2: number, int3: number): void {
    if ((int0 == -1)) {
        return;
    };
    if ((DB_GETROWTABLE(int0) != 197)) {
        return;
    };
    if ((script16812(int0) == 0)) {
        return;
    };
    var int4 = script16811(int0);
    if ((int4 < 0)) {
        IF_SETHIDE(1, int2);
        IF_SETONTIMER(callback(), int1);
        script16808(int0, 1);
    } else {
        IF_SETHIDE(0, int2);
        IF_SETTEXT(inttostring(((int4 / 10) + 1), 10), int3);
    };
    return;
}