//
function script11362(int0: component, int1: int): void {
    var int2 = 24901 as graphic;
    var int3 = ((int1 - 9) + 1);
    var string0 = "";
    if (((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1)))) {
        CC_SETGRAPHIC(int2);
        if ((int3 == 2)) {
            string0 = "This ability slot will be unlocked when your pet reaches the adolescent stage.";
        } else if ((int3 == 3)) {
            string0 = "This ability slot will be unlocked when your pet reaches the adult stage.";
        };
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, int1));
    };
    return;
}