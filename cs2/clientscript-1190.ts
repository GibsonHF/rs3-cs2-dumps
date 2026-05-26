//
function script1190(): number {
    if ((PLAYERMEMBER() == 1)) {
        return INV_FREESPACE(890);
    };
    return MAX(0, (INV_FREESPACE(890) - (INV_SIZE(890) - 6)));
}