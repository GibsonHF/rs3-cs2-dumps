//
function script1190(): int {
    if ((PLAYERMEMBER() == true)) {
        return INV_FREESPACE(890 as inv);
    };
    return MAX(0, (INV_FREESPACE(890 as inv) - (INV_SIZE(890 as inv) - 6)));
}