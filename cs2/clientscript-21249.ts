//
function script21249(): void {
    var int0 = varbitplayer_62212;
    var int1 = 0;
    var int2 = 0;
    var int3 = 1;
    var int4 = 1;
    var int5 = 1;
    if ((int0 == 0)) {
        int1 = IF_GETWIDTH(comp(1623, 4));  // plugin_hub_parent_manage_permissions:permissions_content
        int2 = 24;
        int3 = MAX(1, ((int1 + 2) / (24 + 2)));
        int4 = 1;
        int5 = int3;
    } else {
        int1 = 24;
        int2 = IF_GETHEIGHT(comp(1623, 4));  // plugin_hub_parent_manage_permissions:permissions_content
        int3 = 1;
        int4 = MAX(1, ((int2 + 2) / (24 + 2)));
        int5 = int4;
    };
    stack(int0);
    stack(int1);
    stack(int2);
    stack(int3);
    stack(int4);
    stack(int5);
    return;
}