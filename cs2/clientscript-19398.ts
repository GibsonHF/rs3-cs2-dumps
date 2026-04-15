//
function script19398(): void {
    var int0 = 85131266;
    var int1 = comp(1299, 1);
    IF_SETONCLANTRANSMIT(callback(script19401), int0);
    IF_SETONCLANSETTINGSTRANSMIT(callback(script19401), int0);
    IF_SETONCLANCHANNELTRANSMIT(callback(script19401), int0);
    IF_SETONVARTRANSMIT(callback(script19401, 4818, 11939, 11940, 11941, 11942, 11943, 11938, 7), int0);
    IF_SETONTIMER(callback(script19400), int0);
    if ((WORLDLIST_FETCH() == 0)) {
        IF_SETONTIMER(callback(script19399, -2147483645), int1);
    };
    script19402();
    return;
}