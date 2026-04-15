//
function script16244(int0: obj, int1: int, int2: int, int3: struct, int4: component, int5: component, int6: int): int {
    var string0 = "Daily";
    if ((varbitplayer_52723 == 1)) {
        string0 = "Returner";
    };
    var int7 = script10495(3);
    var string1 = GET_COL_TAG(15777401);
    var string2 = GET_COL_TAG(script10495(3));
    var string3 = "<col=E12323>";
    var string4 = "";
    if ((int2 == 0)) {
        string4 = "Unclaimed";
        string3 = "<col=FFFF00>";
    } else if ((int2 == 1)) {
        string4 = "Claimed";
        string3 = "<col=00C800>";
    } else {
        string4 = "Locked";
    };
    var int6 = script7235(" ", string1, int3, int4, int5, int6);
    int6 = script7235(`${string0} challenges to complete: ${inttostring(int1, 10)}`, string2, int3, int4, int5, int6);
    int6 = script7235(`Current state: ${string3}${string4}</col>`, string2, int3, int4, int5, int6);
    if ((item_getparam(int0, 4286) == 1)) {
        int6 = script7235(script14456(int0), string2, int3, int4, int5, int6);
    };
    return int6;
}