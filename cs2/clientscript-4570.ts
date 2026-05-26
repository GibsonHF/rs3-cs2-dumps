//
function script4570(int0: number, int1: number, int2: number): void {
    if ((CLAN_GETCHATCOUNT() == 0)) {
        MES_TYPED(11, 0, "You need to be in a Friends Chat channel to do that.");
        return;
    };
    if ((script13749() == 1)) {
        varclient_1507 = STRING_LENGTH(varclient_2480);
    } else {
        varclient_1507 = script1401(int0, varclient_2480, 26, IF_GETX(int1));
    };
    script1566(0, varclient_2480, 80);
    script4571(int1, int2, varclient_2480);
    return;
}