//
function script8413(int0: component, int1: int): void {
    if ((script1186() == 1)) {
        CC_SETMOUSEOVERCURSOR(-1);
    } else {
        CC_SETMOUSEOVERCURSOR(194);
    };
    CC_SETONCLICK(callback(script8291, int0, int1, 0));
    return;
}