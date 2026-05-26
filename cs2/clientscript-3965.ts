//
function script3965(int0: number): void {
    if ((((varclient_1885 < 5) || (varclient_1885 > 9)) && (IF_GETTRANS(int0) != 255))) {
        IF_SETTRANS(255, int0);
        IF_SETHIDE(1, 68812801);
        IF_SETHIDE(1, 68812802);
    } else if ((((varclient_1885 > 4) && (varclient_1885 < 10)) && (IF_GETTRANS(int0) != 0))) {
        IF_SETTRANS(0, int0);
        IF_SETHIDE(0, 68812801);
        IF_SETHIDE(0, 68812802);
    };
    return;
}