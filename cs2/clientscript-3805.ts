//
function script3805(): void {
    if ((varbitplayer_20806 == 1)) {
        IF_SETHIDE(true, comp(641, 9));
    };
    if ((script13749() == true)) {
        script8179();
        IF_SETHIDE(true, comp(641, 132));
        IF_SETSIZE(0, 0, 1, 1, comp(641, 0));
        script3856(comp(641, 129), comp(641, 29), comp(641, 35), script2956());
    } else {
        IF_SETHIDE(true, comp(641, 35));
        IF_SETHIDE(true, comp(641, 131));
    };
    script8841(88, 1);
    script12794();
    script16663(7010 as dbrow, 60003 as obj, 1);
    IF_SETOPCURSOR(1, 56 as cursor, comp(641, 22));
    IF_SETOPCURSOR(1, 56 as cursor, comp(641, 23));
    script19649(0, 0);
    script19649(1, 0);
    return;
}