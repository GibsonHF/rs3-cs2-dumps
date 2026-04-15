//
function script20025(int0: int): void {
    var int1 = script20011(int0);
    var int2 = script20012(int0);
    var int3 = script20013(int0);
    var int4 = script20026(int1);
    var int5 = script20015(int0);
    var int6 = script20016(int0);
    var int7 = script20014(int0);
    var int8 = script20027(int5);
    var int9 = 40;
    var int10 = 40;
    [int9, int10] = script20028(int0);
    stack(int4);
    stack(int2);
    IF_SETGRAPHIC();
    stack(int8);
    stack(int6);
    IF_SETGRAPHIC();
    if ((int1 == 0)) {
        int9 = (int9 + 30);
        int10 = (int10 + 30);
    };
    IF_SETSIZE(int9, int10, 0, 0, int2);
    if ((int0 == 1)) {
        stack(script20010(int5));
        stack(87818270);
        IF_SETGRAPHIC();
    };
    stack(int4);
    stack(int3);
    IF_SETGRAPHIC();
    stack(int8);
    stack(int7);
    IF_SETGRAPHIC();
    return;
}