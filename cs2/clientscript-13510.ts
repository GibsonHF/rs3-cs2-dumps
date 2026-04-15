//
function script13510(int0: unknown_int): void {
    if ((varbitplayer_38842 == 0)) {
        CC_SETDRAGDEADTIME(5);
        CC_SETDRAGDEADZONE(5);
        CC_SETONDRAG(callback(script13508, int0, -2147483645, -2147483643, -2147483647, -2147483646));
        CC_SETONDRAGCOMPLETE(callback(script8304, int0, 1));
    } else {
        CC_SETONDRAG(callback());
        CC_SETONDRAGCOMPLETE(callback());
    };
    return;
}