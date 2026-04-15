//
function script3965(int0: component): void {
    if ((((varclient_1885 < 5) || (varclient_1885 > 9)) && (IF_GETTRANS(int0) != 255))) {
        IF_SETTRANS(255, int0);
        IF_SETHIDE(true, comp(1050, 1));
        IF_SETHIDE(true, comp(1050, 2));
    } else if ((((varclient_1885 > 4) && (varclient_1885 < 10)) && (IF_GETTRANS(int0) != 0))) {
        IF_SETTRANS(0, int0);
        IF_SETHIDE(false, comp(1050, 1));
        IF_SETHIDE(false, comp(1050, 2));
    };
    return;
}