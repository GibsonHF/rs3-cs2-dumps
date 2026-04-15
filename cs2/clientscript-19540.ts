//
function script19540(int0: obj, int1: int, string0: string, string1: string): void {
    if (((int0 == -1 as obj) || (int0 == 48447 as obj))) {
        CC_SETOBJECT_NONUM(48447 as obj, 0);
        CC_CLEAROPS();
        CC_SETOPBASE("<col=B8D1D1>Empty slot");
        CC_SETOP(10, "Examine");
        CC_SETTRANS(0);
        return;
    };
    CC_SETOBJECT(int0, int1);
    script14420(int0);
    if ((int1 == 0)) {
        CC_CLEAROPS();
        CC_SETOP(8, "Remove-Placeholder");
        CC_SETOP(10, "Examine");
        CC_SETTRANS(128);
        return;
    };
    CC_SETTRANS(0);
    CC_SETOP(1, string1);
    CC_SETOP(2, `${string0}-1`);
    CC_SETOP(3, `${string0}-5`);
    CC_SETOP(4, `${string0}-10`);
    CC_SETOP(5, `${string0}-${inttostring(varplayer_111, 10)}`);
    CC_SETOP(6, `${string0}-X`);
    CC_SETOP(7, `${string0}-All`);
    CC_SETOP(8, `${string0}-Placeholder`);
    CC_SETOP(9, "");
    CC_SETOP(10, "Examine");
    CC_SETOP(varbitplayer_45189, "");
    return;
}