//
function script19008(): void {
    var int0 = 40;
    var int1 = 6;
    var int2 = 6;
    var int3 = 30448;
    var int4 = 30447;
    var int5 = -1 as cs2enum;
    var int6 = script16161();
    var int7 = 190;
    var int8 = 52;
    switch (int6) {
        case 1515: {
            int3 = 30448;
            int4 = 30447;
            int1 = 6;
            int2 = 6;
            int7 = 230;
            int8 = 52;
            break;
        }
        case 40380: {
            int7 = 134;
            int8 = 47;
            int3 = 28162;
            int4 = 969;
            int1 = 6;
            int2 = 6;
            break;
        }
        case 7229: {
            int7 = 318;
            int8 = 47;
            int3 = 30448;
            int4 = 166;
            int1 = 10;
            int2 = 6;
            int5 = 17513 as cs2enum;
            break;
        }
        case 44604: {
            int7 = 318;
            int8 = 47;
            int3 = 12017;
            int4 = 12015;
            int1 = 10;
            int2 = 6;
            int5 = 1652 as cs2enum;
            break;
        }
        case 49941: {
            int7 = 413;
            int8 = 25;
            IF_SETONVARTRANSMIT(callback(script18996, 11753, 1), comp(1870, 16));  // trh119_buried_treasure_overlay:grid_rect_layer
            int1 = 7;
            int2 = 7;
            int5 = 17514 as cs2enum;
            int0 = 43;
            break;
        }
        default: {
            script12478(`Unexpected promo trying to draw buried treasure grid ${script16345(int6)}`);
            break;
        }
    };
    IF_SETPOSITION(int7, int8, 0, 0, comp(1870, 16));  // trh119_buried_treasure_overlay:grid_rect_layer
    IF_SETPOSITION(int7, int8, 0, 0, comp(1870, 18));  // trh119_buried_treasure_overlay:grid_chest_layer
    IF_SETPOSITION(int7, int8, 0, 0, comp(1870, 17));  // trh119_buried_treasure_overlay:grid_hover_layer
    IF_SETSIZE((int1 * int0), (int2 * int0), 0, 0, comp(1870, 16));  // trh119_buried_treasure_overlay:grid_rect_layer
    IF_SETSIZE((int1 * int0), (int2 * int0), 0, 0, comp(1870, 18));  // trh119_buried_treasure_overlay:grid_chest_layer
    IF_SETSIZE((int1 * int0), (int2 * int0), 0, 0, comp(1870, 17));  // trh119_buried_treasure_overlay:grid_hover_layer
    var int9 = (0 - int0);
    var int10 = 0;
    var int11 = int9;
    var int12 = int10;
    var int13 = 0;
    CC_DELETEALL(comp(1870, 16));  // trh119_buried_treasure_overlay:grid_rect_layer
    CC_DELETEALL(comp(1870, 18));  // trh119_buried_treasure_overlay:grid_chest_layer
    CC_DELETEALL(comp(1870, 17));  // trh119_buried_treasure_overlay:grid_hover_layer
    CC_DELETEALL(comp(1870, 25));  // trh119_buried_treasure_overlay:chest_info_layer
    CC_DELETEALL(comp(1253, 556));  // wheel_of_fortune:fake_op
    var int14 = 0;
    var int15 = script18992(int6);
    var int16 = (int9 + (int1 * int0));
    while ((int14 < int15)) {
        if ((int5 != -1 as cs2enum)) {
            int11 = (int11 + (int0 * (enum_getvalue(0, 0, int5, int14) + 1)));
        };
        if ((int11 > int16)) {
            int11 = (int9 + MODULO(int11, int16));
            int12 = (int12 + int0);
        };
        script19009(int6, int14, int0, int11, int12, int4, int3);
        CC_CREATE(comp(1253, 556), 5, int14);  // wheel_of_fortune:fake_op
        int14 = (int14 + 1);
    };
    CC_CREATE(comp(1253, 556), 5, int14);  // wheel_of_fortune:fake_op
    IF_SETONOP(callback(script19007, int14, 1), comp(1870, 21));  // trh119_buried_treasure_overlay:keybind_layer
    switch (int6) {
        case 1515: {
            script18995();
            break;
        }
        case 40380:
        case 7229:
        case 44604:
        case 49941: {
            script19010(int6);
            break;
        }
    };
    return;
}