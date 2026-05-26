//
function script4846(int0: number): void {
    IF_SETHIDE(true, comp(1258, 523));
    IF_SETHIDE(true, comp(1258, 514));
    IF_SETHIDE(true, comp(1258, 505));
    IF_SETHIDE(true, comp(1258, 425));
    IF_SETHIDE(true, comp(1258, 344));
    IF_SETHIDE(true, comp(1258, 257));
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(1258, 523));
            IF_SETHIDE(false, comp(1258, 425));
            IF_SETGRAPHIC(7287 as graphic, comp(1258, 539));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1258, 514));
            IF_SETHIDE(false, comp(1258, 344));
            IF_SETGRAPHIC(7288 as graphic, comp(1258, 539));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1258, 505));
            IF_SETHIDE(false, comp(1258, 257));
            IF_SETGRAPHIC(7289 as graphic, comp(1258, 539));
            break;
        }
    };
    script4838();
    script4810();
    script4840();
    script4814();
    return;
}