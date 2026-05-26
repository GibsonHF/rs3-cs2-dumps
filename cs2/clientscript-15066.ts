//
function script15066(): void {
    var int0 = 0;
    if ((AUTOSETUP_DOSETUP() == 1)) {
        IF_SETGRAPHIC(11334 as graphic, comp(280, 5));
    } else if ((USERDETAIL_LOBBY_RECOVERYDAY() == 0)) {
        int0 = 1;
        IF_SETGRAPHIC(11333 as graphic, comp(280, 5));
    } else {
        int0 = 2;
        IF_SETGRAPHIC(11332 as graphic, comp(280, 5));
    };
    if ((int0 != varbitclient_46362)) {
        script13814();
        varbitclient_46362 = int0;
    };
    BATTERY_GETLEVELPERCENT();
    var int1 = stack();
    if ((BATTERY_ISCHARGING() == 1)) {
        IF_SETGRAPHIC(11328 as graphic, comp(280, 7));
    } else if ((int1 >= 80)) {
        IF_SETGRAPHIC(11329 as graphic, comp(280, 7));
    } else if ((int1 >= 40)) {
        IF_SETGRAPHIC(11331 as graphic, comp(280, 7));
    } else {
        IF_SETGRAPHIC(11330 as graphic, comp(280, 7));
    };
    IF_SETTEXT(`${inttostring(int1, 10)}%`, comp(280, 9));
    return;
}