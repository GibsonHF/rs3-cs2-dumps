//
function script14983(int0: number, int1: number): void {
    if ((int0 == comp(1473, 17))) {  // toplevel_v2_inventory:premium_currency_layer
        var int0 = comp(1473, 12);  // toplevel_v2_inventory:bonds_pouch_layer
    } else {
        int0 = comp(1474, 16);  // toplevel_v2_parent_suboverlay_inventory:bonds_pouch_layer
    };
    switch (int1) {
        case 1: {
            IF_SETSIZE(0, 44, 1, 0, int0);
            break;
        }
        case 2: {
            IF_SETSIZE(0, 80, 1, 0, int0);
            break;
        }
        default: {
            IF_SETSIZE(0, 117, 1, 0, int0);
            break;
        }
    };
    IF_SETSIZE(0, 0, 1, 1, comp(1473, 17));  // toplevel_v2_inventory:premium_currency_layer
    IF_SETSIZE(0, 0, 1, 1, comp(1474, 21));  // toplevel_v2_parent_suboverlay_inventory:premium_currency_layer
    return;
}