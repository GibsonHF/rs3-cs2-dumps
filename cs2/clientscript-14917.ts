//
function script14917(int0: number): void {
    if ((int0 == -1)) {
        return;
    };
    var int1 = script14686(int0);
    var int2 = script14960(int0);
    IF_SETHIDE(1, 45481990);
    IF_SETTEXT(OC_NAME(int0), 45482031);
    IF_SETOBJECT_NONUM(int0, 1, 45482030);
    script14918(int1, int2);
    script14920(int1);
    if ((script6431() == 1)) {
        IF_SETSIZE(116, 18, 1, 1, 45481992);
    } else {
        IF_SETSIZE(108, 52, 1, 1, 45481992);
    };
    return;
}