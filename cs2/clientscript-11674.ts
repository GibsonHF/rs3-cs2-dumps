//
function script11674(): void {
    var int0 = comp(-1, 65535);
    var string0 = "";
    var string1 = "";
    var int1 = 0;
    var int2 = 13483 as cs2enum;
    var string2 = "";
    while ((int1 < ENUM_GETOUTPUTCOUNT(int2))) {
        int0 = enum_getvalue(0, 9, int2, int1);
        if ((int0 != comp(-1, 65535))) {
            string2 = enum_getvalue(0, 36, 14305 as cs2enum, int1);
            string0 = "Teleport";
            string1 = "Quick Teleport";
            if ((varbitplayer_28622 == 1)) {
                string0 = "Quick Teleport";
                string1 = "Teleport";
            };
            IF_SETOP(1, string0, int0);
            IF_SETOP(2, string1, int0);
            IF_SETOPBASE(`<col=FFFFFF>${string2}`, int0);
        };
        int1 = (int1 + 1);
    };
    script9286();
    script13513();
    return;
}