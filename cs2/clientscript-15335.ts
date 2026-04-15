//
function script15335(int0: int, int1: int, int2: unknown_int, int3: unknown_int, string0: string, string1: string): void {
    var int4 = 27 as fontmetrics;
    var int5 = IF_GRID_GETNUMCOLUMNS(comp(1851, 43));
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
    script20480(comp(1851, 43), int0, 0, 0, 1, 0, 0, int6, 1, 0, 2100 as dbrow, string0, int7, 0, 1);
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