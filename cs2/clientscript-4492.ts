//
function script4492(int0: int): [int, int] {
    var int1 = -1;
    var int2 = (int0 / 10000);
    var int3 = (MODULO((int0 / 100), 100) - 1);
    var int4 = (MODULO(int0, 100) + 2000);
    var int5 = 0;
    if ((((int3 > varbitclient_40723) && (int4 == varbitclient_40724)) || (int4 > varbitclient_40724))) {
        int1 = (((int2 + varbitclient_40721) + enum_getvalue(0, 0, 13930 as cs2enum, varbitclient_40723)) - 1);
        int5 = 200;
    } else if ((((int3 < varbitclient_40723) && (int4 == varbitclient_40724)) || (int4 < varbitclient_40724))) {
        int1 = (int2 - ((enum_getvalue(0, 0, 13930 as cs2enum, script4488()) - varbitclient_40721) + 1));
        int5 = 200;
    } else {
        int1 = ((int2 + varbitclient_40721) - 1);
    };
    return [(int1 * 3), int5];
}