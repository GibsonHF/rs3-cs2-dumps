//
function script13036(): void {
    var int0 = (varplayer_6787 / 500000);
    var int1 = (200 - (int0 * 5));
    if ((script13083() == 0)) {
        if ((MAP_MEMBERS() == 1)) {
            int1 = 200;
        } else {
            int1 = 120;
        };
        if ((varclient_6370 > DATE_MINUTES())) {
            if ((MAP_MEMBERS() == 1)) {
                int1 = 220;
            } else {
                int1 = 125;
            };
        };
    };
    stack(script13037((int1 / 100)));
    stack(113442818);
    IF_SETGRAPHIC();
    stack(script13037(MODULO((int1 / 10), 10)));
    stack(113442819);
    IF_SETGRAPHIC();
    stack(script13037(MODULO(int1, 10)));
    stack(113442820);
    IF_SETGRAPHIC();
    return;
}