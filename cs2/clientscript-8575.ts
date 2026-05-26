//
function script8575(int0: number): void {
    if ((varbitplayer_36829 == 0)) {
        IF_SETHIDE(1, 123863080);
    } else {
        IF_SETHIDE(0, 123863080);
    };
    CC_DELETEALL(123863044);
    CC_DELETEALL(123863045);
    CC_DELETEALL(123863046);
    CC_DELETEALL(123863050);
    CC_DELETEALL(123863047);
    var int1 = 0;
    var int2 = 0;
    while ((int1 == 0)) {
        if ((script2222(int2) == 0)) {
            script8573(int2);
            int1 = 1;
        } else {
            script8572(int2);
            script8574(int2);
        };
        if ((++int2 > 9)) {
            int1 = 1;
            return;
        };
    };
    return;
}