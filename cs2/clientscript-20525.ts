//
function script20525(int0: int, int1: int, int2: int, int3: int): int {
    if ((int1 == int2)) {
        return int3;
    };
    if ((int1 == varclient_8372)) {
        return script8730(int2, int0);
    };
    var int4 = int3;
    var int5 = script8730(varclient_8372, int0);
    var int6 = script8730(int2, int0);
    if ((((int5 == 1) && (int6 == 0)) && (script20524(varclient_8372, int0) == script20524(int1, int0)))) {
        int4 = 0;
    } else if (((int3 == 0) && (int6 == 1))) {
        int4 = 1;
    };
    return int4;
}