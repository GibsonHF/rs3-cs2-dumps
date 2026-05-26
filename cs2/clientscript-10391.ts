//
function script10391(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, string0: string): [number, number] {
    var int7 = int4;
    if ((int0 == 1)) {
        var int4 = script8891(99876951, string0, (int3 + int6), int4, 0);
    } else {
        int4 = script8891(99876951, string0, (int3 + int6), int4, 1);
    };
    if ((int0 == 0)) {
        var string0 = strconcat(string0, "<br><br>You do not meet this requirement.");
        varclient_4502 = false;
    };
    var int6 = MAX(int6, (int4 - int7));
    script10456(99876951, int1, int2, string0, int3, int7, int6);
    if ((int0 == 0)) {
        script10392(int3, int7, int6);
    };
    return [int3, (int7 + int6)];
}