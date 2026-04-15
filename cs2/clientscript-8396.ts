//
function script8396(int0: component, int1: component): int {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    [int2, int4] = script8405(int0);
    int3 = (int2 + IF_GETWIDTH(int0));
    int5 = (int4 + IF_GETHEIGHT(int0));
    [int6, int8] = script8405(int1);
    int7 = (int6 + IF_GETWIDTH(int1));
    int9 = (int8 + IF_GETHEIGHT(int1));
    return script8399(int2, int4, int3, int5, int6, int8, int7, int9);
}