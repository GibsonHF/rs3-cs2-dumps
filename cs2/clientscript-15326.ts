//
function script15326(int0: component, int1: int, int2: int): void {
    var int3 = 0;
    var string0 = "";
    var string1 = "";
    if ((CC_FIND(int0, int1) == 1)) {
        if ((MODULO(int2, 100) == 0)) {
            var int2 = 0;
            int3 = ACHIEVEMENT_TOTAL_RUNESCORE();
            string0 = TOSTRING_LOCALISED(int3, 1);
            string1 = `Your current RuneScore is ${string0}`;
            CC_SETTEXT(string0);
            CC_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -2147483643));
        } else {
            int2 = (int2 + 1);
        };
        CC_SETONTIMER(callback(script15326, -2147483645, CC_GETID(), int2));
    };
    return;
}