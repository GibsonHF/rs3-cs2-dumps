//
function script16813(int0: dbrow, int1: component, int2: component, int3: component): void {
    if ((int0 == -1 as dbrow)) {
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
        IF_SETHIDE(true, int2);
        IF_SETONTIMER(callback(), int1);
        script16808(int0, 1);
    } else {
        IF_SETHIDE(false, int2);
        IF_SETTEXT(inttostring(((int4 / 10) + 1), 10), int3);
    };
    return;
}