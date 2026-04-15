//
function script8412(int0: int): void {
    if ((((script1186() == 1) || (int0 == -1)) || ((int0 == 1017) && (HAS_NXT() == 0)))) {
        CC_SETMOUSEOVERCURSOR(-1);
        CC_SETDRAGGABLE(comp(-1, 65535), -1);
        CC_SETONDRAG(callback());
        CC_SETONDRAGCOMPLETE(callback());
    } else if ((int0 != -1)) {
        CC_SETMOUSEOVERCURSOR(194);
        CC_SETDRAGGABLE(comp(1477, 27), -1);
        CC_SETDRAGDEADTIME(1);
        CC_SETDRAGDEADZONE(1);
        CC_SETONDRAG(callback(script8301, int0, -2147483645, -2147483643, -2147483647, -2147483646));
        CC_SETONDRAGCOMPLETE(callback(script8304, int0, 1));
    };
    CC_SETDRAGRENDERBEHAVIOUR(3);
    return;
}