//
function script20266(int0: number, int1: number, int2: number, int3: number): [number, number] {
    var string0 = "You must be a member to activate this relic.";
    if (((PLAYERMEMBER() == false) && (dbrow_getfield(int1, 1343536, 0) == 1))) {
        stack(94568471);
        stack(int2);
        var int2 = (int2 + 1);
        script2994(1, int3, 0, 0, 32, 32, 0, 0, 23835);
        if ((dbrow_getfield(int0, 1347616, 0) == 1)) {
            string0 = "You must be a member to activate this blessing.";
        };
        stack(94568471);
        stack(int2);
        int2 = (int2 + 1);
        script2995(0, int3, 2, 0, 36, 32, 1, 0, 2100, `<col=EB2F2F>${string0}</col>`);
        var int3 = (int3 + (32 + 4));
    };
    var int5 = dbrow_getfield(int0, 1347664, 0);
    var string1 = dbrow_getfield(int0, 1347600, 0);
    if ((int5 == -1)) {
        if ((STRING_LENGTH(string1) > 0)) {
            return script19615(0, int2, int3, int4, string1);
        };
        return [int2, int3];
    };
    var int6 = MAX(50, script20478(string1, (int4 - 60), 2100, 0));
    stack(94568471);
    stack(int2);
    int2 = (int2 + 1);
    script17949(0, (int3 + MAX(0, ((int6 - 50) / 2))), 0, 0, 50, 50, 0, 0, int5, 1);
    stack(94568471);
    stack(int2);
    int2 = (int2 + 1);
    script2995(0, int3, 2, 0, 60, int6, 1, 0, 2100, string1);
    CC_SETTEXTALIGN(0, 1, 0);
    return [int2, ((int3 + int6) + 4)];
}