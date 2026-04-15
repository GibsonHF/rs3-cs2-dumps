//
function script19130(int0: component): void {
    if ((IF_FIND(int0) == 1)) {
        script2994(int0, 0, 0, 0, 1, 1, 170, 170, 0, 0, 34192 as graphic);
        CC_SET2DANGLE(16384);
        CC_SETSIZE(170, 170, 0, 0);
        CC_SETONTIMER(callback(script17942, int0, 0, -2000));
    };
    return;
}