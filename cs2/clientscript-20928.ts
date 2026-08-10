//
function script20928(): void {
    var int1 = script20117(varplayer_12314);
    if ((int1 == -1)) {
        stack(0);
        return;
    };
    var int2 = dbrow_getfield(int1, 1335648, 0);
    var int3 = dbrow_getfield(int1, 1335712, 0);
    if (((PLAYERMEMBER() == true) || (int0 == 1))) {
        stack(ENUM_GETOUTPUTCOUNT(int2));
        return;
    };
    stack(int3);
    return;
}