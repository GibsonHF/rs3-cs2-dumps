//
function script3066(int0: int, int1: unknown_int, int2: component, int3: boolean): void {
    var string0 = "-";
    var int4 = true;
    if ((int0 > 0)) {
        string0 = inttostring(int0, 10);
        int4 = false;
    };
    CC_DELETEALL(int2);
    if ((varbitplayer_58378 == 1)) {
        script7853(int2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 17062 as dbrow, string0, script12585(int4), 1, false, false);
        script20329(int4, int3, int0, int1);
    } else {
        script13971(int2, comp(-1, 65535), 28554 as struct, string0, int4);
        if ((IF_FIND(int2) == 1)) {
            script20329(int4, int3, int0, int1);
        };
    };
    return;
}