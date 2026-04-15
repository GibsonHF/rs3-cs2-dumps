//
function script12892(int0: struct, int1: obj, int2: int, int3: int, int4: struct, int5: component, int6: component, int7: int): int {
    var int8 = script10495(3);
    var string0 = GET_COL_TAG(15777401);
    var string1 = GET_COL_TAG(script10495(3));
    var string2 = "<col=E12323>";
    var string3 = "";
    if ((int3 == 0)) {
        string3 = "Unclaimed";
        string2 = "<col=FFFF00>";
    } else if ((int3 == 1)) {
        string3 = "Claimed";
        string2 = "<col=00C800>";
    } else {
        string3 = "Locked";
    };
    var int7 = script7235(" ", string0, int4, int5, int6, int7);
    int7 = script7235("Event Information", string0, int4, int5, int6, int7);
    if ((struct_getparam(int0, 78) == false)) {
        int7 = script7235(`Unlocked at: ${inttostring(int2, 10)}`, string1, int4, int5, int6, int7);
    };
    int7 = script7235(`Current state: ${string2}${string3}</col>`, string1, int4, int5, int6, int7);
    if ((item_getparam(int1, 4286) == 1)) {
        int7 = script7235(script14456(int1), string1, int4, int5, int6, int7);
    };
    return int7;
}