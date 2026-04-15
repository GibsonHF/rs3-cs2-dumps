//
function script11339(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component): void {
    var int8 = 32;
    var int9 = 20;
    if ((varbitplayer_38842 == 1)) {
        int8 = 52;
        int9 = 40;
    };
    var int10 = ((int8 + int9) + 3);
    IF_SETSIZE(0, int10, 1, 0, int0);
    IF_SETPOSITION(0, 0, 0, 0, int0);
    IF_SETPOSITION(0, (int10 - 1), 0, 0, int2);
    IF_SETPOSITION(0, (1 - int8), 0, 0, int3);
    IF_SETPOSITION(0, (1 - int8), 0, 0, int4);
    IF_SETPOSITION(0, (1 - int8), 0, 0, int5);
    IF_SETPOSITION(0, (1 - int8), 0, 0, int6);
    IF_SETPOSITION(0, (1 - int8), 0, 0, int7);
    IF_SETSIZE(0, (int8 - 3), 1, 1, int3);
    IF_SETSIZE(0, (int8 - 3), 1, 1, int4);
    IF_SETSIZE(0, (int8 - 3), 1, 1, int5);
    IF_SETSIZE(0, (int8 - 3), 1, 1, int6);
    IF_SETSIZE(0, (int8 - 3), 1, 1, int7);
    CC_DELETEALL(int1);
    CC_CREATE(int1, 9, 0);
    CC_SETPOSITION(0, (int10 - 6), 1, 0);
    CC_SETSIZE(0, 0, 1, 0);
    CC_SETCOLOUR(script10495(7));
    CC_CREATE(int1, 9, 1);
    CC_SETPOSITION(0, (int10 - 5), 1, 0);
    CC_SETSIZE(0, 0, 1, 0);
    CC_SETCOLOUR(script10495(8));
    IF_SETONVARTRANSMIT(callback(script11340, int0, int2, int3, int4, int5, int6, int7, 3705, 3706, 4, 3527, 4027, 616, 623, 627, 8), int0);
    IF_SETONVARCTRANSMIT(callback(script11340, int0, int2, int3, int4, int5, int6, int7, 1725, 1), int0);
    script11341(int0, int2, int3, int4, int5, int6, int7);
    return;
}