//
function script7151(): void {
    var int0 = comp(185, 18);
    var int1 = ENUM_GETOUTPUTCOUNT(15289 as cs2enum);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as obj;
    var string0 = "";
    CC_DELETEALL(int0);
    while ((int2 < int1)) {
        int4 = (41 * MODULO(int2, 5));
        int5 = (37 * (int2 / 5));
        int7 = enum_getvalue(0, 33, 15289 as cs2enum, int2);
        int3 = script6645(int7);
        CC_CREATE(int0, 5, int6++);
        CC_SETSIZE(40, 36, 0, 0);
        CC_SETPOSITION(int4, int5, 0, 0);
        CC_SETGRAPHIC(18266 as graphic);
        CC_SETOUTLINE(1);
        CC_CREATE(int0, 5, int6++);
        CC_SETPOSITION((int4 + 3), (int5 + 3), 0, 0);
        CC_SETSIZE(36, 32, 0, 0);
        if ((int3 > 0)) {
            CC_SETOBJECT_ALWAYSNUM(int7, int3);
            CC_SETTRANS(0);
            CC_SETOP(1, "Withdraw");
            CC_SETOP(2, "Withdraw-all");
        } else {
            CC_SETOBJECT(int7, int3);
            CC_SETTRANS(175);
        };
        CC_SETOP(10, "Examine");
        string0 = OC_NAME(int7);
        CC_SETOPBASE(`<col=FF981F>${string0}`);
        CC_SETONMOUSEREPEAT(callback(script5495, int7));
        CC_SETONMOUSELEAVE(callback(script5495, -1));
        int2 = (int2 + 1);
    };
    IF_SETONINVTRANSMIT(callback(script7151, 866, 1), int0);
    IF_SETONVARTRANSMIT(callback(script7151, 8639, 8640, 8641, 8642, 8643, 5), int0);
    IF_SETONVARTRANSMIT(callback(script7152, 8649, 1), 12124166);
    return;
}