//
function script11143(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component, int8: int): void {
    var int9 = (int8 * 40);
    var int10 = 230;
    IF_SETSIZE(0, int10, 1, 0, int5);
    IF_SETPOSITION(0, 0, 0, 0, int5);
    IF_SETSCROLLPOS(0, 0, int6);
    if ((int9 < 400)) {
        IF_SETSIZE(int9, int10, 0, 0, int6);
        IF_SETPOSITION(100, 0, 0, 0, int6);
        IF_SETSCROLLSIZE(0, 0, int6);
        IF_SETHIDE(true, int7);
    } else {
        IF_SETSIZE(400, int10, 0, 0, int6);
        IF_SETPOSITION(100, 0, 0, 0, int6);
        IF_SETSIZE(400, 16, 0, 0, int7);
        IF_SETPOSITION(100, int10, 0, 0, int7);
        IF_SETSCROLLSIZE(int9, int10, int6);
        IF_SETHIDE(false, int7);
        script11147(int7, int6);
        int10 = (int10 + 16);
        int9 = 400;
    };
    var int11 = 21218 as struct;
    int10 = ((int10 + struct_getparam(int11, 3547)) + struct_getparam(int11, 3549));
    int9 = (((int9 + 100) + struct_getparam(int11, 3550)) + struct_getparam(int11, 3551));
    int9 = MAX(int9, 300);
    IF_SETSIZE(int9, int10, 0, 0, int0);
    script8421(int1, int2, int3, int4, "Egg Notes", int11, 1007, 1, -1 as graphic, -1 as struct);
    return;
}