//
function script6068(int0: unknown_int, int1: unknown_int): void {
    if ((((MAP_LANG() == 0) && (int0 == 37)) || (((MAP_LANG() == 1) && (int0 == 54)) || (((MAP_LANG() == 2) && (int0 == 40)) || ((MAP_LANG() == 3) && (int0 == 49)))))) {
        IF_RESUME_PAUSEBUTTON(77529096);
    } else if (((int0 == 69) || (int0 == 13))) {
        if (((int0 == 13) && (script9666() == 1))) {
            return;
        };
        IF_RESUME_PAUSEBUTTON(77529097);
    } else if ((((int0 == 48) && (KEYHELD_CTRL() == true)) && (IF_GETHIDE(comp(1183, 7)) == false))) {
        IF_RESUME_PAUSEBUTTON(77529095);
    };
    return;
}