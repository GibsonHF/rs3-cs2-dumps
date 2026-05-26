//
function script7378(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string): void {
    var int5 = -1;
    switch (int3) {
        case 0: {
            int5 = 115;
            break;
        }
        case 1: {
            int5 = 116;
            break;
        }
        case 2: {
            int5 = 117;
            break;
        }
        case 3: {
            int5 = 118;
            break;
        }
    };
    if ((int3 != int4)) {
        IF_SETGRAPHIC(int5, int0);
    };
    var string0 = strconcat(string0, `<br>(${inttostring(int3, 10)} of ${inttostring(int4, 10)})`);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int1);
    return;
}