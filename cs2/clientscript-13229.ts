//
function script13229(int0: component, int1: int, int2: struct): void {
    var string0 = script13227(int2);
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETTEXT(script3930(string0, CC_GETWIDTH(), 2, CC_GETFONTMETRICS()));
        if ((strcmp(CC_GETTEXT(), string0) != 0)) {
            script14990(2, string0);
        };
    };
    return;
}