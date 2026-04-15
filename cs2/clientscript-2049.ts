//[proc,worldmap_setupgraphic]
function script2049(int0: graphic, int1: int, int2: int, int3: int, int4: int, int5: int, int6: boolean, int7: boolean, int8: boolean, int9: unknown_int, int10: coordgrid, string0: string, string1: string): void {
    CC_SETHIDE(false);
    CC_SETSIZE(int1, int2, 0, 0);
    CC_SETPOSITION(int3, int4, 1, 1);
    CC_SET2DANGLE(int5);
    CC_SETTILING(int6);
    CC_SETHFLIP(int7);
    CC_SETVFLIP(int8);
    CC_SETGRAPHIC(int0);
    var int11 = 0;
    var int12 = 0;
    if ((int9 == 1)) {
        CC_SETALPHA(1);
        int11 = MODULO(CLIENTCLOCK(), 50);
        int12 = (50 / 2);
        if ((int11 <= int12)) {
            CC_SETTRANS((255 - SCALE(int11, int12, 255)));
        } else {
            CC_SETTRANS(SCALE((int11 - int12), int12, 255));
        };
    };
    if ((int10 != -1 as coordgrid)) {
        CC_SETOPBASE(`<col=ff9040>${string0}</col>`);
        CC_SETOP(1, string1);
        CC_SETONOP(callback(script2053, -2147483644, -2147483645, int10));
        if ((strcmp(string0, "J-Mod") == 0)) {
            CC_SETOP(2, "Tele To");
        };
    } else {
        CC_SETOP(1, "");
        CC_SETONOP(callback());
    };
    return;
}