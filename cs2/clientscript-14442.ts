//
function script14442(int0: component, int1: component, int2: component, int3: component, int4: component): void {
    CC_DELETEALL(int2);
    IF_SETSIZE(210, 0, 1, 1, int0);
    IF_SETPOSITION(0, 0, 2, 0, int0);
    script14443(int1);
    IF_SETONVARTRANSMIT(callback(script14442, int0, int1, int2, int3, int4, 10273, 1), int1);
    if ((varbitplayer_49036 != 0)) {
        IF_SETSCROLLSIZE(0, 0, int0);
        IF_SETSCROLLPOS(0, 0, int0);
        CC_DELETEALL(int3);
        return;
    };
    var int5 = script15073(int4, 16365 as cs2enum, -1 as dbrow);
    var int6 = script5276(script15073(int4, 16365 as cs2enum, -1 as dbrow), 2);
    script16217(int0, int2, int3, int5, 0, -1, 270, 50);
    return;
}