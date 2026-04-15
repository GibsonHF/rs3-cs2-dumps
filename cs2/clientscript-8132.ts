//
function script8132(int0: component): void {
    var int1 = 18613;
    if ((CC_FIND(int0, 1) == 1)) {
        CC_SETPOSITION(2, 2, 2, 0);
        CC_SETONOP(callback(script8134, int0, -2147483644));
        CC_SETOP(2, "Sheathe/Unsheathe Weapon");
        CC_SETMOUSEOVERCURSOR(36);
        CC_SETNOCLICKTHROUGH(1);
    };
    script8133(int0);
    return;
}