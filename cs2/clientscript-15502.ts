//
function script15502(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = -1;
    var int6 = -1;
    var int7 = -1 as graphic;
    var int8 = 0;
    var int9 = enum_getvalue(9, 0, 16178 as cs2enum, int0);
    if ((int9 != 0)) {
        int5 = script15463(int9);
        int6 = script15459(script15470(int9));
        if ((script15468(int9) == 1)) {
            int8 = 1;
        };
    };
    if (((int6 != -1) && (int7 == -1 as graphic))) {
        if ((int8 == 1)) {
            int7 = struct_getparam(int6, 8201);
        } else if ((int1 == 1)) {
            int7 = struct_getparam(int6, 8199);
        } else if ((int2 == 1)) {
            int7 = struct_getparam(int6, 8198);
        } else if (((int3 == 1) || (int4 == 1))) {
            int7 = struct_getparam(int6, 8197);
        };
    };
    stack(int7);
    stack(int5);
    IF_SETGRAPHIC();
    return;
}