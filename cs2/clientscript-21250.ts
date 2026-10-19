//
function script21250(): void {
    var int3 = IF_GETWIDTH(comp(1623, 4));
    var int4 = IF_GETHEIGHT(comp(1623, 4));
    var int5 = 0;
    var int6 = 0;
    var int7 = int3;
    var int8 = int4;
    if ((int0 == 0)) {
        IF_SETPOSITION(0, 0, 0, 0, comp(1623, 7));
        IF_SETSIZE(int3, int2, 0, 0, comp(1623, 7));
        int6 = int2;
        int8 = MAX(0, (int4 - int2));
    } else {
        if ((int0 == 2)) {
            IF_SETPOSITION(0, 0, 0, 0, comp(1623, 7));
            int5 = int1;
        } else {
            IF_SETPOSITION(0, 0, 2, 0, comp(1623, 7));
        };
        IF_SETSIZE(int1, int4, 0, 0, comp(1623, 7));
        int7 = MAX(0, (int3 - int1));
    };
    IF_SETPOSITION(int5, int6, 0, 0, comp(1623, 5));
    IF_SETSIZE(int7, int8, 0, 0, comp(1623, 5));
    return;
}