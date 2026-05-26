//
function script15335(int0: number, int1: number, int2: number, int3: number, string0: string, string1: string): void {
    var int4 = 27;
    var int5 = IF_GRID_GETNUMCOLUMNS(121307179);
    var int6 = script15891(string0, int5, int4, 0);
    var int7 = 7829367;
    if ((int1 == -2)) {
        int7 = 16777215;
    } else if ((int1 == -1)) {
        int7 = script10495(6);
    };
    if ((int3 == 1)) {
        int7 = 16355874;
    };
    script20480(121307179, int0, 0, 0, 1, 0, 0, int6, 1, 0, 2100, string0, int7, 0, 1);
    if ((int2 == 1)) {
        CC_SETOP(1, "Go To");
        CC_SETOPBASE(string0);
        CC_SETOPCURSOR(1, 210);
    };
    if ((strcmp(string1, "") != 0)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string1, CC_GETLAYER(), CC_GETID()));
    };
    return;
}