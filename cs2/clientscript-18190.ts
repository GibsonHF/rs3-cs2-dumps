//
function script18190(): dbrow {
    stack(667920);
    stack((INV_SIZE(675 as inv) - INV_FREESPACE(675 as inv)));
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}