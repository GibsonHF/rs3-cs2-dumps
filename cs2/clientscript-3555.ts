//
function script3555(): void {
    if ((IF_GETHIDE(comp(1477, 805)) == false)) {
        if ((script8292(-1, -1) == 1)) {
            if ((struct_getparam(21301, 3507) != comp(-1, 65535))) {
                IF_TRIGGEROP(struct_getparam(21301, 3507), 1, 1);
            };
        } else if ((IF_GETHIDE(comp(274, 192)) == false)) {
            IF_SETHIDE(true, comp(274, 192));
        } else if ((IF_GETHIDE(comp(274, 179)) == false)) {
            script9540();
        } else if ((script15532(0) == 1)) {
            IF_TRIGGEROP(comp(279, 1), -1, 1);
        } else {
            script8182();
        };
    };
    return;
}