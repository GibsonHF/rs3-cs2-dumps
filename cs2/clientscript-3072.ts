//
function script3072(int0: dbrow, int1: int, int2: int, int3: component, int4: component, int5: component, int6: unknown_int): void {
    var int7 = -1 as stat;
    var int8 = false;
    var int9 = -1 as cs2enum;
    [int7, int8, int9] = dbrow_getfield(int0, 512016, int1);
    IF_SETTEXT(enum_getvalue(17, 36, 680 as cs2enum, int7), int5);
    stack(enum_getvalue(0, 23, 745 as cs2enum, script2180(int7)));
    stack(int6);
    IF_SETGRAPHIC();
    if (((int8 == 1) && (MAP_MEMBERS() == 0))) {
        script13991(int3, int4, 28557 as struct, true);
    } else if ((int2 == int1)) {
        script996(int3, int4, 28557 as struct, true, 1);
    } else {
        script13990(int3, int4, 28557 as struct);
    };
    return;
}