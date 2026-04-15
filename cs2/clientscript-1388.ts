//
function script1388(): void {
    var string0 = "Unlock your ability bar to be able to drag these";
    var int0 = 0;
    if (((varbitplayer_1892 == 1) || (varbitplayer_27168 == 1))) {
        string0 = "You can drag these to your ability bar";
    };
    while ((CC_FIND(comp(1890, 10), int0) == 1)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        CC_SETONMOUSELEAVE(callback(script8805));
        int0 = (int0 + 1);
    };
    return;
}