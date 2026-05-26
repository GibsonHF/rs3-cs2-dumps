//
function script19969(): number {
    if ((MAP_MEMBERS() == 0)) {
        return 0;
    };
    var int0 = INV_GETOBJ[1](94, 3);
    if ((int0 == -1)) {
        return 0;
    };
    if ((item_getparam(int0, 8928) == 51671 as struct)) {
        return 1;
    };
    return 0;
}