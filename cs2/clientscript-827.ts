//
function script827(int0: int): void {
    var int1 = 0;
    if (((CLIENTCLOCK() >= (int0 + 32)) && (CLIENTCLOCK() < (int0 + 140)))) {
        IF_SETTEXT("Varrock Herald", comp(465, 2));
        IF_SETTEXT("Covering all of Misthalin and beyond.", comp(465, 3));
        IF_SETTEXT("1 gp", comp(465, 4));
        IF_SETTEXT("Oo'glog Ogresses Open Health Spa!", comp(465, 5));
    } else {
        IF_SETTEXT(" ", comp(465, 2));
        IF_SETTEXT(" ", comp(465, 3));
        IF_SETTEXT(" ", comp(465, 4));
        IF_SETTEXT(" ", comp(465, 5));
    };
    return;
}