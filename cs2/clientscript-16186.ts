//
function script16186(int0: component, int1: component): void {
    if ((IF_FIND[1](int0) == 1)) {
        script7925(int1, 0, CC_GETX[1](), 0, 0, 0, CC_GETWIDTH[1](), 30, 0, 0, 0, 4, 1, 5);
        IF_CREATENESTED(4, 1, 0, 0, 0, int1);
        script16190();
        CC_SETTEXT("Category");
        IF_CREATENESTED(4, 1, 1, 0, 0, int1);
        script16190();
        CC_SETTEXT("Prize");
        IF_CREATENESTED(4, 1, 3, 0, 0, int1);
        script16190();
        CC_SETTEXT("Rarity");
        IF_CREATENESTED(4, 1, 4, 0, 0, int1);
        script16190();
        CC_SETTEXT("% Chance");
        CC_CREATE(int1, 9, 1);
        CC_SETPOSITION(CC_GETX[1](), 30, 0, 0);
        CC_SETSIZE(CC_GETWIDTH[1](), 0, 0, 0);
        script11024(2);
    };
    return;
}