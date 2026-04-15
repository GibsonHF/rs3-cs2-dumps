//
function script10438(int0: component, int1: int, int2: cs2enum, int3: component, int4: component, int5: int): void {
    var string0 = "";
    if ((CC_FIND(int0, int1) == 1)) {
        string0 = CC_GETTEXT();
        if ((CC_FIND[1](int4, int5) == 1)) {
            CC_SETTEXT[1](string0);
        };
    };
    script10444();
    script11988(int3, int4, int2, int1, string0);
    return;
}