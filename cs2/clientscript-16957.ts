//
function script16957(): void {
    CC_DELETEALL(comp(1253, 556));
    var int0 = 0;
    int0 = (int0 + 1);
    while ((int0 <= 14)) {
        CC_CREATE(comp(1253, 556), 5, int0);
    };
    IF_SETONVARTRANSMIT(callback(script16958, 10605, 10605, 10605, 10605, 10605, 10605, 6), comp(1067, 0));
    IF_SETONTIMER(callback(script16963, 0, 69927001), comp(1067, 23));
    IF_SETONTIMER(callback(script16963, 0, 69926963), comp(1067, 23));
    IF_SETOPCURSOR(1, 204, comp(1067, 61));
    IF_SETOPCURSOR(1, 204, comp(1067, 66));
    IF_SETOPCURSOR(1, 204, comp(1067, 71));
    IF_SETOPCURSOR(1, 204, comp(1067, 76));
    IF_SETOPCURSOR(1, 204, comp(1067, 80));
    IF_SETOPCURSOR(1, 204, comp(1067, 81));
    IF_SETOPCURSOR(1, 204, comp(1067, 3));
    IF_SETOPCURSOR(1, 204, comp(1067, 55));
    return;
}