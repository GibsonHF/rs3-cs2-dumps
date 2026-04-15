//
function script4497(int0: int, int1: unknown_int, int2: unknown_int): unknown_int {
    var int3 = 0;
    var int4 = -1;
    if ((varbitclient_40723 == 0)) {
        int3 = enum_getvalue(0, 0, 13930 as cs2enum, 11);
    } else {
        int3 = enum_getvalue(0, 0, 13930 as cs2enum, (varbitclient_40723 - 1));
    };
    if ((((int0 != -1) && (int0 < varbitclient_40721)) || (int2 == 1))) {
        if ((int2 == 0)) {
            varbitclient_40726 = ((int3 - varbitclient_40721) + int0);
        } else {
            varbitclient_40726 = 0;
        };
        int4 = script4499();
        if ((int4 == 0)) {
            varbitclient_40726 = 0;
        };
    } else if ((((int0 != -1) && (int0 > ((varbitclient_40722 + varbitclient_40721) - 1))) || (int1 == 1))) {
        if ((int1 == 0)) {
            varbitclient_40726 = ((int0 - varbitclient_40722) - varbitclient_40721);
        } else {
            varbitclient_40726 = 0;
        };
        int4 = script4498();
        if ((int4 == 0)) {
            varbitclient_40726 = (varbitclient_40722 - 1);
        };
    };
    varbitclient_40721 = script4482(varbitclient_40723, varbitclient_40724);
    varclient_6438 = (varbitclient_40726 + varbitclient_40721);
    varbitclient_40722 = enum_getvalue(0, 0, 13930 as cs2enum, varbitclient_40723);
    return int4;
}