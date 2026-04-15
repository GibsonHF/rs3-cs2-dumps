//
function script13480(int0: struct, int1: int, int2: int, int3: obj, int4: unknown_int, int5: struct, int6: component, int7: component, int8: int): int {
    var int9 = script10495(3);
    var string0 = GET_COL_TAG(15777401);
    var string1 = GET_COL_TAG(script10495(3));
    var string2 = "<col=E12323>";
    var string3 = "";
    if ((int2 == 0)) {
        string3 = "Unlocked";
        string2 = "<col=FFFF00>";
    } else if ((int2 == 1)) {
        string3 = "Unlocked";
        string2 = "<col=00C800>";
    } else {
        string3 = "Locked";
    };
    if (((int0 != -1 as struct) && (int3 != -1 as obj))) {
        var int8 = script7235(" ", string0, int5, int6, int7, int8);
        int8 = script7235(`Unlocked at: ${inttostring(int1, 10)}`, string1, int5, int6, int7, int8);
        int8 = script7235(`Current state: ${string2}${string3}<br><br>${script14456(int3)}</col>`, string1, int5, int6, int7, int8);
    };
    return int8;
}