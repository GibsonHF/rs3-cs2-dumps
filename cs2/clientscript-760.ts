//
function script760(int0: number, int1: number, int2: number, int3: number, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string): void {
    if ((CC_FIND(int2, int3) == 1)) {
        if ((int0 != -1)) {
            CC_SETOBJECT(int0, -1);
            CC_SETOPBASE(OC_NAME(int1));
            CC_SETOP(1, string0);
            CC_SETOP(2, string1);
            CC_SETOP(3, string2);
            CC_SETOP(4, string3);
            CC_SETOP(5, string4);
            CC_SETOP(6, "Examine<col=ff9040>");
            CC_SETOP(7, string5);
            CC_SETOUTLINE(1);
        } else {
            CC_SETOBJECT(-1, 0);
            CC_SETOPBASE("");
            CC_SETOP(1, "");
            CC_SETOP(2, "");
            CC_SETOP(3, "");
            CC_SETOP(4, "");
            CC_SETOP(5, "");
            CC_SETOP(6, "");
            CC_SETOP(7, "");
        };
    };
    return;
}