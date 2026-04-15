//
function script1874(int0: int, int1: component, int2: component): void {
    if ((script13749() == true)) {
        varclient_1097 = STRING_LENGTH(varclient_2478);
    } else {
        varclient_1097 = script1401(int0, varclient_2478, IF_GETFONTMETRICS(int1), 0);
    };
    script1875(int1, int2, varclient_2478);
    var int3 = 80;
    if ((varplayer_8156 > 0)) {
        int3 = varplayer_8156;
    };
    script1566(0, varclient_2478, int3);
    return;
}