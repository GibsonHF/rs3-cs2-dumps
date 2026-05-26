//
function script13452(): void {
    IF_SETOP(1, "Open Imperial faction tab", comp(1875, 12));
    IF_SETONOP(callback(script13469, 2), comp(1875, 12));
    IF_SETOP(1, "Open Ports faction tab", 122880014);
    IF_SETONOP(callback(script13469, 3), 122880014);
    IF_SETOP(1, "Open Merchant faction tab", 122880019);
    IF_SETONOP(callback(script13469, 4), 122880019);
    IF_SETOP(1, "Open Worker faction tab", 122880017);
    IF_SETONOP(callback(script13469, 5), 122880017);
    return;
}