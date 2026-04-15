//
function script17125(int0: int): void {
    if ((varclient_7113 == int0)) {
        script17130(comp(1044, 50), false, 1, false, false);
        if ((CC_FIND(comp(1044, 43), int0) == 1)) {
            if ((MODULO(int0, 2) == 0)) {
                script1341(28679 as struct);
            } else {
                script1341(28680 as struct);
            };
        };
        varclient_7113 = -1;
    } else {
        script17130(comp(1044, 50), true, 1, false, false);
        if (((varclient_7113 != -1) && (CC_FIND(comp(1044, 43), varclient_7113) == 1))) {
            if ((MODULO(varclient_7113, 2) == 0)) {
                script1341(28679 as struct);
            } else {
                script1341(28680 as struct);
            };
        };
        if ((CC_FIND(comp(1044, 43), int0) == 1)) {
            script1341(28682 as struct);
        };
        varclient_7113 = int0;
    };
    return;
}