//
function script18088(int0: number, int1: number, int2: number): void {
    var int3 = 80347203;
    IF_SETTEXT(`This will cost <col=2EF8FF>${TOSTRING_LOCALISED(int1, 1)}</col> x vis wax.`, 80347201);
    var string0 = "";
    if ((int2 == 1)) {
        string0 = "";
    } else {
        string0 = "Warning: You will lose any progress already gained towards this mission.";
    };
    IF_SETTEXT(string0, 80347202);
    CC_DELETEALL(int3);
    var int4 = 681;
    var int5 = ENUM_GETOUTPUTCOUNT(int4);
    var int6 = 486;
    if ((IF_FIND(int3) == 1)) {
        script10028(1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0);
        script10028(1, 1, 0, 0, 1, 1, int6, 0, 0, 1, 0, 4);
        CC_GETDYNAMICLAYER();
        script10028(1, 2, 0, 0, 1, 1, int6, 0, 0, 1, 0, 4);
        CC_GETDYNAMICLAYER();
        script10028(1, 3, 0, 0, 1, 1, int6, 0, 0, 1, 0, 4);
        CC_GETDYNAMICLAYER();
        int6 = 108;
        script10028(1, 4, 0, 0, 1, 1, int6, 0, 0, 1, 0, 4);
        CC_GETDYNAMICLAYER();
    };
    var int7 = 9;
    var int8 = 1;
    var int9 = 2;
    var int10 = 0;
    [int10, int8] = script18092(1, int8, int10, int0);
    [int10, int8] = script18092(2, int8, int10, int0);
    [int10, int8] = script18092(3, int8, int10, int0);
    [int10, int8] = script18092(4, int8, int10, int0);
    CC_DELETEALL(80347204);
    script7852(80347204, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7954, "Confirm");
    CC_SETOP(1, "Confirm");
    CC_SETONOP(callback(script18089));
    CC_DELETEALL(80347205);
    script7852(80347205, int8, 0, 0, 0, 0, 0, 0, 1, 1, 7953, "Back");
    CC_SETOP(1, "Back");
    CC_SETONOP(callback(script18090));
    IF_SETHIDE(0, 80347151);
    return;
}