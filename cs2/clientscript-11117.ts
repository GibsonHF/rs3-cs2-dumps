//
function script11117(int0: component): void {
    var int1 = 0;
    CC_DELETEALL(int0);
    while ((int1 < ENUM_GETOUTPUTCOUNT(9849 as cs2enum))) {
        CC_CREATE(int0, 3, int1);
        CC_SETHIDE(true);
        CC_SETTRANS(255);
        CC_SETOP(1, "Add to machine");
        script10407();
        int1 = (int1 + 1);
    };
    return;
}