//
function script15872(): void {
    var int0 = comp(1924, 6);
    if ((TESTBIT(varbitplayer_43335, (script11800(1043) - 1)) == 1)) {
        int0 = comp(1924, 94);
    };
    if ((IF_GETHIDE(comp(276, 27)) == false)) {
        IF_SETHIDE(true, comp(279, 0));
        IF_SETHIDE(true, comp(1923, 0));
        IF_SETHIDE(true, int0);
        IF_SETHIDE(true, comp(1924, 183));
        IF_SETHIDE(true, comp(1477, 596));
        IF_SETHIDE(false, comp(1477, 56));
    } else {
        IF_SETHIDE(false, comp(279, 0));
        IF_SETHIDE(false, comp(1923, 0));
        IF_SETHIDE(false, int0);
        IF_SETHIDE(false, comp(1924, 183));
        IF_SETHIDE(false, comp(1477, 596));
        IF_SETHIDE(true, comp(1477, 56));
        if ((script11205(2442 as dbrow) == true)) {
            script13017(varplayer_9017, varplayer_11481, varbitplayer_47683);
        };
    };
    return;
}