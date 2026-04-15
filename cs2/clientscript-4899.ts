//
function script4899(int0: int): void {
    varbitplayer_6679 = int0;
    script4935();
    script4940();
    switch (int0) {
        case 0: {
            IF_SETHIDE(true, comp(1261, 23));
            IF_SETHIDE(true, comp(1258, 115));
            IF_SETHIDE(true, comp(1258, 44));
            IF_SETHIDE(false, comp(1259, 5));
            IF_SETTEXT("", comp(1259, 150));
            IF_SETHIDE(true, comp(1259, 147));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1261, 23));
            IF_SETHIDE(true, comp(1258, 115));
            IF_SETHIDE(true, comp(1258, 44));
            IF_SETTEXT("", comp(1261, 349));
            IF_SETHIDE(true, comp(1261, 345));
            IF_SETHIDE(true, comp(1259, 5));
            script5009();
            script5011();
            break;
        }
        case 2: {
            script4860();
            script4863();
            script4859();
            IF_SETHIDE(true, comp(1261, 23));
            IF_SETHIDE(false, comp(1258, 115));
            IF_SETHIDE(false, comp(1258, 44));
            IF_SETTEXT("", comp(1258, 596));
            IF_SETHIDE(true, comp(1258, 593));
            IF_SETHIDE(true, comp(1259, 5));
            script5009();
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1261, 23));
            IF_SETHIDE(true, comp(1258, 115));
            IF_SETHIDE(true, comp(1258, 44));
            IF_SETTEXT("Please select an available spot from the map.", comp(1261, 349));
            IF_SETHIDE(false, comp(1261, 345));
            IF_SETHIDE(true, comp(1259, 5));
            script5010();
            script4935();
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1261, 23));
            IF_SETHIDE(true, comp(1258, 115));
            IF_SETHIDE(true, comp(1258, 44));
            IF_SETTEXT("Please select a spot from the map.", comp(1261, 349));
            IF_SETHIDE(false, comp(1261, 345));
            IF_SETHIDE(true, comp(1259, 5));
            script5010();
            break;
        }
        case 5: {
            IF_SETHIDE(true, comp(1261, 23));
            IF_SETHIDE(false, comp(1258, 115));
            IF_SETHIDE(false, comp(1258, 44));
            IF_SETTEXT("Please select an available spot from the map.", comp(1258, 596));
            IF_SETHIDE(false, comp(1258, 593));
            IF_SETHIDE(true, comp(1259, 5));
            script5009();
            break;
        }
    };
    script4853();
    return;
}