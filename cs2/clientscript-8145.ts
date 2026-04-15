//
function script8145(): void {
    var int0 = 0;
    var int1 = -1 as struct;
    while ((int0 <= 46)) {
        int1 = script10405(int0);
        CC_CREATE(comp(1431, 5), 3, int0);
        if ((int1 != -1 as struct)) {
            CC_SETONOP(callback(script8158, int0, 0));
            CC_SETOP(1, "Open");
        };
        int0 = (int0 + 1);
    };
    if ((script8846(21) == 1)) {
        script8838(21);
    } else if ((script8846(49) == 1)) {
        script8838(49);
    };
    return;
}