//
function script1150(): void {
    var int0 = -1;
    var int1 = -1;
    CC_DELETEALL(comp(1253, 556));  // wheel_of_fortune:fake_op
    int0 = (int0 + 1);
    while ((int0 < 8)) {
        script1155(int0);
        CC_CREATE(comp(1253, 556), 5, int0);  // wheel_of_fortune:fake_op
    };
    CC_CREATE(comp(1253, 556), 5, int0);  // wheel_of_fortune:fake_op
    IF_SETONOP(callback(script1116, int0), comp(215, 26));  // trh148_overlay:keybind_layer
    IF_SETONVARTRANSMIT(callback(script1151, 8101, 8102, 2), comp(215, 29));  // trh148_overlay:gem_info_layer
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(33749 as graphic, comp(215, 25));  // trh148_overlay:promo_name_graphic
            break;
        }
        case 1: {
            IF_SETGRAPHIC(33750 as graphic, comp(215, 25));  // trh148_overlay:promo_name_graphic
            break;
        }
        case 2: {
            IF_SETGRAPHIC(33751 as graphic, comp(215, 25));  // trh148_overlay:promo_name_graphic
            break;
        }
        case 3: {
            IF_SETGRAPHIC(33752 as graphic, comp(215, 25));  // trh148_overlay:promo_name_graphic
            break;
        }
    };
    return;
}