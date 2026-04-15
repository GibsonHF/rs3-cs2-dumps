//
function script11372(int0: component, int1: unknown_int, int2: int): void {
    var int3 = 0;
    if ((IF_FIND(int0) == 1)) {
        if (((CLIENTCLOCK() > int2) || (CC_GETHIDE() == true))) {
            CC_SETONTIMER(callback());
            CC_SETTEXT("");
            IF_SETHIDE(1, int1);
        } else {
            int3 = (1 + ((int2 - CLIENTCLOCK()) / 50));
            if ((int3 > 60)) {
                CC_SETTEXT(`${inttostring((int3 / 60), 10)}m`);
            } else {
                CC_SETTEXT(inttostring(int3, 10));
            };
        };
    };
    return;
}