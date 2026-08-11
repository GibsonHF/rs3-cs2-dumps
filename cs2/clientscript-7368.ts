//
function script7368(): void {
    CC_DELETEALL(comp(1379, 83));  // pop_manager:zone_1
    CC_DELETEALL(comp(1379, 87));  // pop_manager:zone_2
    CC_DELETEALL(comp(1379, 91));  // pop_manager:zone_3
    CC_DELETEALL(comp(1379, 95));  // pop_manager:zone_4
    CC_DELETEALL(comp(1379, 99));  // pop_manager:zone_5
    CC_DELETEALL(comp(1379, 103));  // pop_manager:zone_6
    CC_DELETEALL(comp(1379, 107));  // pop_manager:zone_7
    CC_DELETEALL(comp(1379, 111));  // pop_manager:zone_8
    var int0 = script4223();
    if ((int0 > 0)) {
        script996(90374227, -1, 28556, 0, script9670(varbitplayer_17496, 1));
        IF_SETONMOUSEOVER(callback(script7370, 1), comp(1379, 83));  // pop_manager:zone_1
        IF_SETONOP(callback(script7370, 1), comp(1379, 83));  // pop_manager:zone_1
    } else {
        script996(90374227, -1, 28556, 1, script9670(varbitplayer_17496, 1));
        IF_SETTEXT("???", comp(1379, 84));  // pop_manager:zone_title_1
    };
    if ((int0 > 1)) {
        script996(90374231, -1, 28556, 0, script9670(varbitplayer_17496, 2));
        IF_SETONMOUSEOVER(callback(script7370, 2), comp(1379, 87));  // pop_manager:zone_2
        IF_SETONOP(callback(script7370, 2), comp(1379, 87));  // pop_manager:zone_2
    } else {
        script996(90374231, -1, 28556, 1, script9670(varbitplayer_17496, 2));
        IF_SETTEXT("???", comp(1379, 88));  // pop_manager:zone_title_2
    };
    if ((int0 > 2)) {
        script996(90374235, -1, 28556, 0, script9670(varbitplayer_17496, 3));
        IF_SETONMOUSEOVER(callback(script7370, 3), comp(1379, 91));  // pop_manager:zone_3
        IF_SETONOP(callback(script7370, 3), comp(1379, 91));  // pop_manager:zone_3
    } else {
        script996(90374235, -1, 28556, 1, script9670(varbitplayer_17496, 3));
        IF_SETTEXT("???", comp(1379, 92));  // pop_manager:zone_title_3
    };
    if ((int0 > 3)) {
        script996(90374239, -1, 28556, 0, script9670(varbitplayer_17496, 4));
        IF_SETONMOUSEOVER(callback(script7370, 4), comp(1379, 95));  // pop_manager:zone_4
        IF_SETONOP(callback(script7370, 4), comp(1379, 95));  // pop_manager:zone_4
    } else {
        script996(90374239, -1, 28556, 1, script9670(varbitplayer_17496, 4));
        IF_SETTEXT("???", comp(1379, 96));  // pop_manager:zone_title_4
    };
    if ((int0 > 4)) {
        script996(90374243, -1, 28556, 0, script9670(varbitplayer_17496, 5));
        IF_SETONMOUSEOVER(callback(script7370, 5), comp(1379, 99));  // pop_manager:zone_5
        IF_SETONOP(callback(script7370, 5), comp(1379, 99));  // pop_manager:zone_5
    } else {
        script996(90374243, -1, 28556, 1, script9670(varbitplayer_17496, 5));
        IF_SETTEXT("???", comp(1379, 100));  // pop_manager:zone_title_5
    };
    if ((int0 > 5)) {
        script996(90374247, -1, 28556, 0, script9670(varbitplayer_17496, 6));
        IF_SETONMOUSEOVER(callback(script7370, 6), comp(1379, 103));  // pop_manager:zone_6
        IF_SETONOP(callback(script7370, 6), comp(1379, 103));  // pop_manager:zone_6
    } else {
        script996(90374247, -1, 28556, 1, script9670(varbitplayer_17496, 6));
        IF_SETTEXT("???", comp(1379, 104));  // pop_manager:zone_title_6
    };
    if ((int0 > 6)) {
        script996(90374251, -1, 28556, 0, script9670(varbitplayer_17496, 7));
        IF_SETONMOUSEOVER(callback(script7370, 7), comp(1379, 107));  // pop_manager:zone_7
        IF_SETONOP(callback(script7370, 7), comp(1379, 107));  // pop_manager:zone_7
    } else {
        script996(90374251, -1, 28556, 1, script9670(varbitplayer_17496, 7));
        IF_SETTEXT("???", comp(1379, 108));  // pop_manager:zone_title_7
    };
    if ((int0 > 7)) {
        script996(90374255, -1, 28556, 0, script9670(varbitplayer_17496, 8));
        IF_SETONMOUSEOVER(callback(script7370, 8), comp(1379, 111));  // pop_manager:zone_8
        IF_SETONOP(callback(script7370, 8), comp(1379, 111));  // pop_manager:zone_8
    } else {
        script996(90374255, -1, 28556, 1, script9670(varbitplayer_17496, 8));
        IF_SETTEXT("???", comp(1379, 112));  // pop_manager:zone_title_8
    };
    return;
}