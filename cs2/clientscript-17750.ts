//
function script17750(int0: number, int1: number): void {
    IF_SETHIDE(0, 80084997);
    IF_SETHIDE(0, 80085048);
    IF_SETTEXT(script17486(int1), 80085056);
    IF_SETGRAPHIC(script17489(int1, 0, 1), 80085070);
    IF_SETTEXT(`<col=ffffff>Cost: ${TOSTRING_LOCALISED(dbrow_getfield(int1, 954432, 0), 1)} ${script17481(varplayer_11091, dbrow_getfield(int1, 954432, 0))}<br>Are you sure you wish to continue?`, 80085059);
    return;
}