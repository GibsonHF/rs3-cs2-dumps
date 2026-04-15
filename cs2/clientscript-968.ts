//
function script968(int0: component, int1: int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((script970(int1) == 1)) {
            CC_SETONTIMER(callback(script969, int0, int1));
        } else {
            CC_SETONTIMER(callback());
        };
    };
    return;
}