//
function script8160(int0: int, int1: int, int2: int): void {
    varclient_3467 = int0;
    var int3 = script10405(int0);
    var int4 = struct_getparam(int3, 3503);
    var int5 = (int1 - GET_MOUSEX());
    var int6 = (int2 - GET_MOUSEY());
    if (((((int5 > 5) || (int5 < -5)) || (int6 > 5)) || (int6 < -5))) {
        script8361(int0);
        script8792();
        script8368(int0, struct_getparam(int3, 3506), 0, 1);
        IF_SETSIZE(script8716(int0), 0, 0, int4);
        script8390(int0);
        script8361(int0);
        script13842(int0);
    };
    return;
}