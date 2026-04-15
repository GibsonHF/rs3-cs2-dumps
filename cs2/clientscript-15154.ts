//
function script15154(int0: dbrow): void {
    if ((script13749() == true)) {
        script8179();
    };
    IF_SETTEXT(dbrow_getfield(int0, 438448, 0), comp(653, 60));
    if ((int0 == 3667 as dbrow)) {
        IF_SETTRANS(25, comp(653, 41));
        IF_SETHIDE(false, comp(653, 43));
    };
    script8841(92, 1);
    script15158(dbrow_getfield(int0, 438272, 0));
    if ((varbitplayer_47773 == 0)) {
        IF_SETHIDE(false, comp(653, 16));
    };
    return;
}