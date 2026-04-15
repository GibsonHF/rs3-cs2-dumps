//
function script19744(int0: component, int1: unknown_int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int): void {
    var int8 = IF_GETX(int0);
    var int9 = IF_GETY(int0);
    if ((int6 >= int7)) {
        IF_SETPOSITION(int2, int3, 0, 0, int0);
        IF_SETONTIMER(callback(), int0);
        IF_SENDTOBACK(int0);
        IF_SETOP(1, "Select", int1);
        IF_SETOPCURSOR(1, 46, int1);
        return;
    };
    var int10 = (int8 + int4);
    var int11 = (int9 + int5);
    IF_SETPOSITION(int10, int11, 0, 0, int0);
    IF_SETONTIMER(callback(script19744, int0, int1, int2, int3, int4, int5, (int6 + 1), int7), int0);
    return;
}