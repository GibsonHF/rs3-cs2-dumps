//
function script3072(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    var int7 = -1;
    var int8 = 0;
    var int9 = -1;
    [int7, int8, int9] = dbrow_getfield(int0, 512016, int1);
    IF_SETTEXT(enum_getvalue(17, 36, 680, int7), int5);
    IF_SETGRAPHIC(enum_getvalue(0, 23, 745, script2180(int7)), int6);
    if ((int8 == 1)) {
        if ((MAP_MEMBERS() == 0)) {
            script13991(int3, int4, 28557, 1);
        } else if ((int2 == int1)) {
            script996(int3, int4, 28557, 1, 1);
        } else {
            script13990(int3, int4, 28557);
        };
    } else if ((int2 == int1)) {
        script996(int3, int4, 28557, 1, 1);
    } else {
        script13990(int3, int4, 28557);
    };
    return;
}