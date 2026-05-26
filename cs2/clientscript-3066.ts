//
function script3066(int0: number, int1: number, int2: number, int3: number): void {
    var string0 = "-";
    var int4 = 1;
    if ((int0 > 0)) {
        string0 = inttostring(int0, 10);
        int4 = 0;
    };
    CC_DELETEALL(int2);
    if ((varbitplayer_58378 == 1)) {
        script7853(int2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 17062, string0, script12585(int4), 1, 0, 0);
        script20329(int4, int3, int0, int1);
    } else {
        script13971(int2, -1, 28554, string0, int4);
        if ((IF_FIND(int2) == 1)) {
            script20329(int4, int3, int0, int1);
        };
    };
    return;
}