//
function script17750(int0: dbrow, int1: dbrow): void {
    IF_SETHIDE(false, comp(1222, 5));
    IF_SETHIDE(false, comp(1222, 56));
    IF_SETTEXT(script17486(int1), comp(1222, 64));
    stack(script17489(int1, 0, 1));
    stack(80085070);
    IF_SETGRAPHIC();
    stack("<col=ffffff>Cost: ");
    stack(int1);
    stack(954432);
    stack(0);
    dbrow_getfield();
    stack(TOSTRING_LOCALISED(stack(), 1));
    stack(" ");
    stack(varplayer_11091);
    stack(int1);
    stack(954432);
    stack(0);
    dbrow_getfield();
    IF_SETTEXT(`${stack()}${script17481(stack())}<br>Are you sure you wish to continue?`, 80085059);
    return;
}