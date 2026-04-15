//
function script15393(int0: obj): int {
    if ((MAP_MEMBERS() == 0)) {
        return 0;
    };
    var int1 = INV_TOTAL(93 as inv, int0);
    if ((INV_TOTAL(93 as inv, 51022 as obj) > 0)) {
        int1 = (int1 + INV_TOTAL(895 as inv, int0));
    };
    return int1;
}