//
function script8575(int0: unknown_int): void {
    if ((varbitplayer_36829 == 0)) {
        IF_SETHIDE(true, comp(1890, 40));
    } else {
        IF_SETHIDE(false, comp(1890, 40));
    };
    CC_DELETEALL(comp(1890, 4));
    CC_DELETEALL(comp(1890, 5));
    CC_DELETEALL(comp(1890, 6));
    CC_DELETEALL(comp(1890, 10));
    CC_DELETEALL(comp(1890, 7));
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