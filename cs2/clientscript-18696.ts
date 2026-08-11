//
function script18696(int0: number): void {
    IF_CREATECHILD(4, UI_GETCATEGORY(int0), UI_GETDYNID(int0), comp(828, 2));  // mobile_shop_hard_currency:fake_op_layer
    IF_TRIGGEROP(comp(828, 2), int0, 1);  // mobile_shop_hard_currency:fake_op_layer
    if ((CC_FINDBYCATEGORY(comp(828, 2), UI_GETCATEGORY(int0), UI_GETDYNID(int0)) == 1)) {  // mobile_shop_hard_currency:fake_op_layer
        CC_DELETE();
    };
    return;
}