//
function script16976(): void {
    switch (varbitplayer_52106) {
        case 0: {
            IF_SETHIDE(true, comp(1068, 50));  // trh188:spells
            IF_SETHIDE(true, comp(1068, 0));  // trh188:ingredient_1_info_layer
            IF_SETHIDE(true, comp(1068, 1));  // trh188:ingredient_1_layer
            IF_SETHIDE(true, comp(1068, 4));  // trh188:ingredient_2_info_layer
            IF_SETHIDE(true, comp(1068, 5));  // trh188:ingredient_2_layer
            IF_SETHIDE(true, comp(1068, 7));  // trh188:ingredient_3_info_layer
            IF_SETHIDE(true, comp(1068, 8));  // trh188:ingredient_3_layer
            break;
        }
        case 1:
        case 2: {
            IF_SETHIDE(true, comp(1068, 50));  // trh188:spells
            IF_SETHIDE(false, comp(1068, 0));  // trh188:ingredient_1_info_layer
            IF_SETHIDE(false, comp(1068, 1));  // trh188:ingredient_1_layer
            IF_SETHIDE(true, comp(1068, 4));  // trh188:ingredient_2_info_layer
            IF_SETHIDE(true, comp(1068, 5));  // trh188:ingredient_2_layer
            IF_SETHIDE(true, comp(1068, 7));  // trh188:ingredient_3_info_layer
            IF_SETHIDE(true, comp(1068, 8));  // trh188:ingredient_3_layer
            break;
        }
        case 3:
        case 4: {
            IF_SETHIDE(true, comp(1068, 50));  // trh188:spells
            IF_SETHIDE(false, comp(1068, 4));  // trh188:ingredient_2_info_layer
            IF_SETHIDE(false, comp(1068, 5));  // trh188:ingredient_2_layer
            IF_SETHIDE(true, comp(1068, 7));  // trh188:ingredient_3_info_layer
            IF_SETHIDE(true, comp(1068, 8));  // trh188:ingredient_3_layer
            break;
        }
        case 5:
        case 6: {
            IF_SETHIDE(true, comp(1068, 50));  // trh188:spells
            IF_SETHIDE(false, comp(1068, 7));  // trh188:ingredient_3_info_layer
            IF_SETHIDE(false, comp(1068, 8));  // trh188:ingredient_3_layer
            break;
        }
        case 7: {
            IF_SETHIDE(true, comp(1068, 50));  // trh188:spells
            break;
        }
        case 8: {
            IF_SETHIDE(false, comp(1068, 50));  // trh188:spells
            break;
        }
    };
    return;
}