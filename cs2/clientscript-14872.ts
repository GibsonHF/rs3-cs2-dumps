//
function script14872(int0: component, int1: component, int2: dbrow, int3: int, int4: int, int5: int, int6: int, int7: int): int {
    var int8 = int3;
    var int9 = int4;
    var int10 = 58;
    script13998(int0, int1, 28556 as struct, int8, int9, int5, int10, int6, false, "", int7);
    if ((CC_FIND(int1, int6) == 1)) {
        CC_SETOPBASE(`'${dbrow_getfield(int2, 368688, 0)}'`);
        CC_SETOPCURSOR(1, 46);
    };
    script152(int0, (int5 - 20), 20, (int8 + 10), (int9 + 9), 26 as fontmetrics, dbrow_getfield(int2, 368688, 0), 16777215);
    var string0 = script14641(int2, 0);
    var string1 = script14643(int2, 0, script14638(int2));
    script14874(int0, (int8 + 10), (int9 + 23), (int5 - 20), 30, `Duration: <col=FFFFFF>${string0}</col>`, `Cost: <col=FFFFFF>${string1}</col>`, true);
    return (int4 + int10);
}