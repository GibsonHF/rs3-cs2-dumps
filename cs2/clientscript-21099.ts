//
function script21099(): void {
    var int0 = 100532242;
    var int1 = ENUM_GETOUTPUTCOUNT(13250 as cs2enum);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var string0 = "";
    CC_DELETEALL(int0);
    while ((int2 < int1)) {
        int4 = (41 * MODULO(int2, 5));
        int5 = (37 * (int2 / 5));
        int7 = enum_getvalue(0, 33, 13250 as cs2enum, int2);
        stack(int7);
        script21002();
        int3 = [];
        stack(int0);
        stack(5);
        stack(int6);
        int6 = (int6 + 1);
        CC_CREATE();
        CC_SETSIZE(40, 36, 0, 0);
        CC_SETPOSITION(int4, int5, 0, 0);
        CC_SETGRAPHIC(18266 as graphic);
        CC_SETOUTLINE(1);
        stack(int0);
        stack(5);
        stack(int6);
        int6 = (int6 + 1);
        CC_CREATE();
        CC_SETPOSITION((int4 + 3), (int5 + 3), 0, 0);
        CC_SETSIZE(36, 32, 0, 0);
        if ((int3 > 0)) {
            CC_SETOBJECT_ALWAYSNUM(int7, int3);
            CC_SETTRANS(0);
            CC_SETOP(1, "Withdraw");
            CC_SETOP(2, "Withdraw all");
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
    stack(21099);
    stack(866);
    stack(1);
    IF_SETONINVTRANSMIT("Y", int0);
    stack(21099);
    stack(8639);
    stack(8640);
    stack(8641);
    stack(8642);
    stack(8643);
    stack(5);
    IF_SETONVARTRANSMIT("Y", int0);
    stack(21100);
    stack(8649);
    stack(1);
    IF_SETONVARTRANSMIT("Y", 100532230);
    return;
}