//[clientscript,friendschat_setrank]
function script197(int0: int, int1: int): void {
    var int2 = (int1 - 1);
    var string0 = "";
    var string1 = "";
    [string0, string1] = FRIEND_GETNAME(int0);
    stack(string0);
    stack(int2);
    FRIEND_SETRANK();
    if ((CC_FIND(72613895, int0) == 1)) {
        CC_SETTEXT(enum_getvalue(0, 36, 5853 as cs2enum, int2));
    };
    return;
}