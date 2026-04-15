//
function script4485(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: unknown_int): void {
    varclient_6438 = int4;
    varbitclient_40721 = int0;
    varbitclient_40723 = int1;
    varbitclient_40724 = int2;
    varbitclient_40722 = int3;
    var int8 = 0;
    var int9 = int2;
    if ((int1 == 0)) {
        int8 = 11;
        int9 = (int9 - 1);
    } else {
        int8 = (int1 - 1);
    };
    var int10 = enum_getvalue(0, 0, 13930 as cs2enum, int8);
    if (((int8 == 1) && (DATE_ISLEAPYEAR(int2) == 1))) {
        int10 = 29;
    };
    varbitclient_40729 = int5;
    script4486(int0, int1, int2, int3, int4, int6, int7);
    return;
}