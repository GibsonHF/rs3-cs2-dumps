//
function script1333(): void {
    var int0 = SHOP_PURCHASEITEMSTATUS();
    switch (int0) {
        case 0: {
            break;
        }
        case -1:
        case 2: {
            script1218(55050263, 12748, 55050264, 12749, 55050265, 12750);
            IF_SETONCLICK(callback(script1312), comp(840, 21));
            IF_SETONTIMER(callback(), 55050246);
            break;
        }
        case 1: {
            IF_SETONTIMER(callback(), comp(840, 6));
            IF_TRIGGEROP(55050284, -1, 1);
            break;
        }
    };
    return;
}