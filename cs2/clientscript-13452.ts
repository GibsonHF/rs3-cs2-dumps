//
function script13452(): void {
    IF_SETOP(1, "Open Imperial faction tab", comp(1875, 12));
    IF_SETONOP(callback(script13469, 2), comp(1875, 12));
    IF_SETOP(1, "Open Ports faction tab", comp(1875, 14));
    IF_SETONOP(callback(script13469, 3), comp(1875, 14));
    IF_SETOP(1, "Open Merchant faction tab", comp(1875, 19));
    IF_SETONOP(callback(script13469, 4), comp(1875, 19));
    IF_SETOP(1, "Open Worker faction tab", comp(1875, 17));
    IF_SETONOP(callback(script13469, 5), comp(1875, 17));
    return;
}