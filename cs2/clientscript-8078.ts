//
function script8078(int0: int, int1: int, int2: unknown_int): void {
    var int3 = IF_GETWIDTH(comp(1477, 31));
    var int4 = IF_GETHEIGHT(comp(1477, 31));
    var int5 = IF_GETWIDTH(comp(1477, 31));
    var int6 = IF_GETHEIGHT(comp(1477, 31));
    var int7 = int3;
    var int8 = int4;
    if (((IF_GET_GAMESCREEN() != comp(-1, 65535)) || (script6354(IF_GET_GAMESCREEN()) == 1))) {
        [int7, int8] = VIEWPORT_GETEFFECTIVESIZE();
        if (((int7 != int0) || (int8 != int1))) {
            int5 = MAX(0, (int3 - int7));
            int6 = MAX(0, (int4 - int8));
            script8080(0, int5, int6);
            script8080(1, int5, int6);
            script8080(5, int5, int6);
            script8080(2, int5, int6);
            script6247(int5, int6);
            IF_SETONTIMER(callback(script8078, IF_GETWIDTH(comp(1477, 45)), IF_GETHEIGHT(comp(1477, 45)), 96796717), 96796717);
        };
    };
    return;
}