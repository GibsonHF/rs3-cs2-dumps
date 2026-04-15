//
function script11110(int0: int, int1: unknown_int, int2: component, int3: unknown_int, int4: component): void {
    IF_SETTEXT(enum_getvalue(0, 36, 9847 as cs2enum, int0), int2);
    stack(19456);
    stack(int3);
    IF_SETGRAPHIC();
    var int5 = IF_GETWIDTH(int3);
    var int6 = IF_GETX(int3);
    var int7 = 0;
    var int8 = 0;
    var int9 = ((int5 - 4) / 2);
    switch (int1) {
        case 0: {
            int8 = 0;
            int7 = (int9 - 16);
            break;
        }
        case 1: {
            int8 = (int9 - 16);
            int7 = 32;
            break;
        }
        case 2: {
            int8 = (int9 + 16);
            int7 = (int9 - 16);
            break;
        }
    };
    IF_SETPOSITION(((int6 + int8) + 2), 5, 0, 0, int4);
    IF_SETSIZE(int7, 11, 0, 0, int4);
    IF_SETONMOUSEREPEAT(callback(script8799, script11119(int1), -2147483645, -1), int3);
    return;
}