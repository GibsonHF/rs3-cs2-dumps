//
function script827(int0: number): void {
    var int1 = 0;
    if ((CLIENTCLOCK() >= (int0 + 32))) {
        if ((CLIENTCLOCK() < (int0 + 140))) {
            IF_SETTEXT("Varrock Herald", comp(465, 2));  // afr_newspaper_interface:title
            IF_SETTEXT("Covering all of Misthalin and beyond.", comp(465, 3));  // afr_newspaper_interface:slogan
            IF_SETTEXT("1 gp", comp(465, 4));  // afr_newspaper_interface:price
            IF_SETTEXT("Oo'glog Ogresses Open Health Spa!", comp(465, 5));  // afr_newspaper_interface:byline
        } else {
            IF_SETTEXT(" ", comp(465, 2));  // afr_newspaper_interface:title
            IF_SETTEXT(" ", comp(465, 3));  // afr_newspaper_interface:slogan
            IF_SETTEXT(" ", comp(465, 4));  // afr_newspaper_interface:price
            IF_SETTEXT(" ", comp(465, 5));  // afr_newspaper_interface:byline
        };
    } else {
        IF_SETTEXT(" ", comp(465, 2));  // afr_newspaper_interface:title
        IF_SETTEXT(" ", comp(465, 3));  // afr_newspaper_interface:slogan
        IF_SETTEXT(" ", comp(465, 4));  // afr_newspaper_interface:price
        IF_SETTEXT(" ", comp(465, 5));  // afr_newspaper_interface:byline
    };
    return;
}