//
function script4452(int0: int, int1: int, int2: int, int3: int): void {
    var int4 = IF_GETHEIGHT(script10074());
    var int5 = IF_GETWIDTH(script10074());
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    [int6, int7, int8, int9] = script2956();
    var int10 = (1 + ((int6 * int2) / int5));
    var int11 = (1 + ((int7 * int3) / int4));
    var int12 = (1 + ((int8 * int2) / int5));
    var int13 = (1 + ((int9 * int3) / int4));
    var int0 = (int0 - int10);
    var int1 = (int1 - int11);
    var int2 = (int2 + (int10 + int12));
    var int3 = (int3 + (int11 + int13));
    UNKNOWN_COMMAND_127(int0, int1, int2, int3);
    return;
}