//
function script13913(): unknown_int {
    var int0 = script6355();
    var int1 = script6356();
    var int2 = GET_MOUSEX();
    var int3 = GET_MOUSEY();
    var int4 = CC_GETWIDTH();
    var int5 = CC_GETHEIGHT();
    if (((((int2 >= int0) && (int3 >= int1)) && (int2 < (int0 + int4))) && (int3 < (int1 + int5)))) {
        return 1;
    };
    return 0;
}