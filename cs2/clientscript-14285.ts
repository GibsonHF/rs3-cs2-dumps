//
function script14285(int0: component, int1: component, int2: overlayinterface, int3: int, int4: int): void {
    var int5 = true;
    var int6 = true;
    var int7 = 0;
    if ((IF_HASSUBOVERLAY(int0, int2) == 1)) {
        int5 = false;
        if ((int4 == int3)) {
            int6 = false;
            int7 = 1;
        };
    };
    script13960(int1, 28755 as struct, int5, int7);
    IF_SETHIDE(int6, int0);
    return;
}