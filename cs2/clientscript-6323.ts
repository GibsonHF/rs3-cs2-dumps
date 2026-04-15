//
function script6323(): void {
    var int0 = CC_GETLAYER();
    var int1 = INV_GETOBJ(662 as inv, 0);
    if ((int1 != -1 as obj)) {
        CC_SETOBJECT(int1, INV_GETNUM(662 as inv, 0));
        CC_SETTRANS(0);
        IF_SETOP(1, "Remove", int0);
        IF_SETOP(10, "Examine", int0);
        IF_SETOPBASE(`${script4033(int1)}${OC_NAME(int1)}`, int0);
        IF_SETONOP(callback(script1620, int0, CC_GETID(), 150, 0, 10), int0);
    } else {
        CC_SETOBJECT_NONUM(24507 as obj, 1);
        CC_SETTRANS(100);
        CC_SETONTIMER(callback());
        IF_CLEAROPS(int0);
        IF_SETOP(1, "What is this?", int0);
        IF_SETOPBASE("", int0);
        IF_SETONOP(callback(), int0);
    };
    return;
}