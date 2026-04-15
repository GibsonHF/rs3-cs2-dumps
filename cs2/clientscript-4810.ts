//
function script4810(): void {
    var int0 = 1;
    IF_SETPOSITION(4, int0, 0, 0, comp(1258, 426));
    int0 = (int0 + 13);
    IF_SETPOSITION(0, int0, 0, 0, comp(1258, 453));
    int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 453)));
    if ((IF_GETHEIGHT(comp(1258, 441)) > 0)) {
        IF_SETHIDE(false, comp(1258, 427));
        IF_SETPOSITION(4, int0, 0, 0, comp(1258, 427));
        int0 = (int0 + 13);
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 441));
        int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 441)));
    } else {
        IF_SETHIDE(true, comp(1258, 427));
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 441));
    };
    if ((IF_GETHEIGHT(comp(1258, 429)) > 0)) {
        IF_SETHIDE(false, comp(1258, 428));
        IF_SETPOSITION(4, int0, 0, 0, comp(1258, 428));
        int0 = (int0 + 13);
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 429));
        int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 429)));
    } else {
        IF_SETHIDE(true, comp(1258, 428));
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 429));
    };
    IF_SETPOSITION(0, int0, 0, 0, comp(1258, 465));
    int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 465)));
    IF_SETSCROLLSIZE(0, int0, comp(1258, 425));
    if ((IF_GETHIDE(comp(1258, 425)) == false)) {
        script31(comp(1258, 255), comp(1258, 425), 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    };
    int0 = 1;
    IF_SETPOSITION(4, int0, 0, 0, comp(1258, 345));
    int0 = (int0 + 13);
    IF_SETPOSITION(0, int0, 0, 0, comp(1258, 376));
    int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 376)));
    if ((IF_GETHEIGHT(comp(1258, 362)) > 0)) {
        IF_SETHIDE(false, comp(1258, 346));
        IF_SETPOSITION(4, int0, 0, 0, comp(1258, 346));
        int0 = (int0 + 13);
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 362));
        int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 362)));
    } else {
        IF_SETHIDE(true, comp(1258, 346));
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 362));
    };
    if ((IF_GETHEIGHT(comp(1258, 348)) > 0)) {
        IF_SETHIDE(false, comp(1258, 347));
        IF_SETPOSITION(4, int0, 0, 0, comp(1258, 347));
        int0 = (int0 + 13);
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 348));
        int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 348)));
    } else {
        IF_SETHIDE(true, comp(1258, 347));
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 348));
    };
    IF_SETPOSITION(0, int0, 0, 0, comp(1258, 390));
    int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 390)));
    IF_SETSCROLLSIZE(0, int0, comp(1258, 344));
    if ((IF_GETHIDE(comp(1258, 344)) == false)) {
        script31(comp(1258, 255), comp(1258, 344), 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    };
    int0 = 1;
    IF_SETPOSITION(4, int0, 0, 0, comp(1258, 258));
    int0 = (int0 + 13);
    IF_SETPOSITION(0, int0, 0, 0, comp(1258, 293));
    int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 293)));
    if ((IF_GETHEIGHT(comp(1258, 277)) > 0)) {
        IF_SETHIDE(false, comp(1258, 259));
        IF_SETPOSITION(4, int0, 0, 0, comp(1258, 259));
        int0 = (int0 + 13);
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 277));
        int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 277)));
    } else {
        IF_SETHIDE(true, comp(1258, 259));
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 277));
    };
    if ((IF_GETHEIGHT(comp(1258, 261)) > 0)) {
        IF_SETHIDE(false, comp(1258, 260));
        IF_SETPOSITION(4, int0, 0, 0, comp(1258, 260));
        int0 = (int0 + 13);
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 261));
        int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 261)));
    } else {
        IF_SETHIDE(true, comp(1258, 260));
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 261));
    };
    IF_SETPOSITION(0, int0, 0, 0, comp(1258, 309));
    int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 309)));
    IF_SETSCROLLSIZE(0, int0, comp(1258, 257));
    if ((IF_GETHIDE(comp(1258, 257)) == false)) {
        script31(comp(1258, 255), comp(1258, 257), 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    };
    return;
}