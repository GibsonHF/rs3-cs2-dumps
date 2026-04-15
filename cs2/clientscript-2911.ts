//[clientscript,ii_resize_if]
function script2911(int0: unknown_int, int1: int, int2: int, int3: int, int4: component): void {
    var int5 = 10;
    var int3 = (int3 + 1);
    if ((int0 == 0)) {
        IF_SETSIZE(IF_GETWIDTH(int4), (int1 + ((int2 * (int5 - int3)) / int5)), 0, 0, int4);
    } else {
        IF_SETSIZE(IF_GETWIDTH(int4), (int1 + ((int2 * int3) / int5)), 0, 0, int4);
    };
    if ((int3 == int5)) {
        IF_SETONTIMER(callback(), int4);
    } else {
        IF_SETONTIMER(callback(script2911, int0, int1, int2, int3, int4), int4);
    };
    return;
}