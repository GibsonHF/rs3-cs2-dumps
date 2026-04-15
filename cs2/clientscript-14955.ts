//
function script14955(int0: obj): void {
    var int1 = INV_TOTAL(885 as inv, int0);
    CC_SETOBJECT_ALWAYSNUM(int0, int1);
    if ((int1 == 0)) {
        CC_SETTRANS(178);
    } else {
        CC_SETTRANS(0);
    };
    CC_SETONMOUSEREPEAT(callback(script3876, script14957(int0), -2147483645, -2147483643));
    CC_SETONCLICK(callback(script14956, int0));
    return;
}