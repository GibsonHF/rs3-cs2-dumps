//
function script15066(): void {
    var int0 = 0;
    if ((AUTOSETUP_DOSETUP() == 1)) {
        stack(11334);
        stack(18350085);
        IF_SETGRAPHIC();
    } else if ((USERDETAIL_LOBBY_RECOVERYDAY() == 0)) {
        int0 = 1;
        stack(11333);
        stack(18350085);
        IF_SETGRAPHIC();
    } else {
        int0 = 2;
        stack(11332);
        stack(18350085);
        IF_SETGRAPHIC();
    };
    if ((int0 != varbitclient_46362)) {
        script13814();
        varbitclient_46362 = int0;
    };
    BATTERY_GETLEVELPERCENT();
    var int1 = stack();
    if ((BATTERY_ISCHARGING() == 1)) {
        stack(11328);
        stack(18350087);
        IF_SETGRAPHIC();
    } else if ((int1 >= 80)) {
        stack(11329);
        stack(18350087);
        IF_SETGRAPHIC();
    } else if ((int1 >= 40)) {
        stack(11331);
        stack(18350087);
        IF_SETGRAPHIC();
    } else {
        stack(11330);
        stack(18350087);
        IF_SETGRAPHIC();
    };
    IF_SETTEXT(`${inttostring(int1, 10)}%`, comp(280, 9));
    return;
}