//
function script16886(int0: component, int1: unknown_int): void {
    var string0 = "Transition Now";
    if (((int0 == comp(1055, 11)) && (script1017() == 1))) {
        IF_SETSIZE(20, 40, 1, 0, int0);
        script15938(int0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1);
        script7858(0, 1, 0, 0, 1, 1, 100, 0, 1, 1, 17061 as dbrow, "Continue Playing");
        CC_SETOP(1, "Continue Playing");
        string0 = "Change Game Mode";
    } else {
        IF_SETSIZE(310, 40, 0, 0, int0);
    };
    script15938(int0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1);
    script7858(1, 1, 0, 0, 1, 1, 100, 0, 1, 1, 17062 as dbrow, string0);
    CC_SETOP(1, "Transition Now");
    CC_SETONBUTTONCLICK(callback(script16887, int1));
    return;
}