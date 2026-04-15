//
function script8007(int0: component, int1: unknown_int, int2: unknown_int, int3: int, int4: int, int5: int, int6: int, int7: int): void {
    var int8 = (int5 - int3);
    var int9 = (int6 - int4);
    var int10 = 1;
    var int11 = 1;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    if ((int8 < 0)) {
        int8 = (0 - int8);
        int10 = -1;
    };
    if ((int9 < 0)) {
        int9 = (0 - int9);
        int11 = -1;
    };
    int14 = (int8 / int7);
    int15 = (int9 / int7);
    int12 = MODULO(int8, int7);
    int13 = MODULO(int9, int7);
    if ((int12 != 0)) {
        int14 = (int14 + 1);
    };
    if ((int13 != 0)) {
        int15 = (int15 + 1);
    };
    IF_SETONTIMER(callback(script8008, int0, int1, int2, int7, 0, int3, int4, (int14 * int10), (int15 * int11), (int12 * int10), (int13 * int11)), int2);
    return;
}