//
function script4498(): unknown_int {
    var int0 = 1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    [int1, int2, int3] = DATE_RUNEDAY_TODATE(varplayer_3079);
    var int4 = (int2 + 1);
    var int5 = int3;
    if ((int4 > 11)) {
        int4 = 0;
        int5 = (int5 + 1);
    };
    varbitclient_40723 = (varbitclient_40723 + 1);
    if ((varbitclient_40723 > 11)) {
        varbitclient_40723 = 0;
        varbitclient_40724 = (varbitclient_40724 + 1);
    };
    if ((((varbitclient_40723 > int4) && (int5 == varbitclient_40724)) || (varbitclient_40724 > int5))) {
        varbitclient_40723 = int4;
        varbitclient_40724 = int5;
        printmessage("You cannot go forward any further than this.");
        int0 = 0;
    };
    return int0;
}