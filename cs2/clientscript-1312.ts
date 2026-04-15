//
function script1312(): void {
    script1218(55050263, 12754, 55050264, 12755, 55050265, 12756);
    IF_SETONCLICK(callback(), comp(840, 21));
    switch (PLATFORMTYPE()) {
        case 3: {
            SHOP_PURCHASEITEM("20181336.t1150.v3");
            break;
        }
        case 2: {
            SHOP_PURCHASEITEM("20181336.t1150.v1");
            break;
        }
        default: {
            return;
        }
    };
    IF_SETONTIMER(callback(script1333), comp(840, 6));
    return;
}