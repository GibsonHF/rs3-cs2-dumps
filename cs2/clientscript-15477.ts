//
function script15477(int0: int, int1: int): unknown_int {
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    [int2, int3, int4, int5] = script15478(int0);
    if (((((int1 == int2) || (int1 == int3)) || (int1 == int4)) || (int1 == int5))) {
        if ((((int2 != -1) && (int1 != int2)) && (script15468(int2) == false))) {
            return 0;
        };
        if ((((int3 != -1) && (int1 != int3)) && (script15468(int3) == false))) {
            return 0;
        };
        if ((((int4 != -1) && (int1 != int4)) && (script15468(int4) == false))) {
            return 0;
        };
        if ((((int5 != -1) && (int1 != int5)) && (script15468(int5) == false))) {
            return 0;
        };
        return 1;
    };
    return 0;
}