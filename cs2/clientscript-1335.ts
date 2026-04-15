//
function script1335(int0: int, int1: component, int2: component): void {
    if ((unk10993(0) == 0)) {
        MES_TYPED(43, 0, "You need to be in a clan to do that.");
        return;
    };
    if ((script13749() == true)) {
        varclient_1098 = STRING_LENGTH(varclient_2479);
    } else {
        varclient_1098 = script1401(int0, varclient_2479, 26 as fontmetrics, IF_GETX(int1));
    };
    script1566(0, varclient_2479, 80);
    script1390(int1, int2, varclient_2479);
    return;
}