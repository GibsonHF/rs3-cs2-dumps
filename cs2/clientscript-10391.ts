//
function script10391(int0: unknown_int, int1: obj, int2: graphic, int3: int, int4: int, int5: int, int6: int, string0: string): [int, int] {
    var int7 = int4;
    if ((int0 == 1)) {
        var int4 = script8891(comp(1524, 87), string0, (int3 + int6), int4, 0);
    } else {
        int4 = script8891(comp(1524, 87), string0, (int3 + int6), int4, 1);
    };
    if ((int0 == 0)) {
        var string0 = strconcat(string0, "<br><br>You do not meet this requirement.");
        varclient_4502 = false;
    };
    var int6 = MAX(int6, (int4 - int7));
    script10456(comp(1524, 87), int1, int2, string0, int3, int7, int6);
    if ((int0 == 0)) {
        script10392(int3, int7, int6);
    };
    return [int3, (int7 + int6)];
}