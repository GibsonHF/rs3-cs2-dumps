//
function script17185(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int): [int, int] {
    var int8 = 0;
    var int9 = (((int1 - int7) - 150) + 4);
    if ((int9 >= 0)) {
        int8 = ((int9 + int7) - 4);
    } else if (((varclient_7118 == 2) && ((((int1 + int7) + 150) - 4) < int5))) {
        int8 = int1;
        int9 = ((int1 + 150) - 4);
    } else {
        IF_SETHIDE(true, comp(1177, 1));
        return script17184(int0, int1, int2, int3, int4, int5, int6, int7);
    };
    IF_SETHIDE(false, comp(1177, 1));
    IF_SETPOSITION(((int0 - 1) - int2), int8, 0, 0, comp(1177, 1));
    IF_SETSIZE(3, 150, 0, 0, comp(1177, 1));
    var int0 = ((int0 - (int6 / 2)) - int2);
    int0 = MIN(MAX(int0, 0), (int4 - int6));
    return [int0, int9];
}