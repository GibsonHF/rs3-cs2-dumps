//
function script21137(): void {
    var int0 = 106364933;
    CC_DELETEALL(int0);
    CC_DELETEALL(comp(1623, 8));  // plugin_hub_parent_manage_permissions:permissions_list
    var int1 = 0;
    unk11717();
    var int2 = [];
    var string0 = "";
    var int3 = 0;
    while ((int1 < int2)) {
        stack(int1);
        unk12176();
        int3 = [];
        if ((int3 == varclient_8509)) {
            stack(int3);
            script21253();
            if (BRANCH_EQUALS(1)) {
                stack(int0);
                stack(1);
                stack(int3);
                unk11506();
                return;
            };
        };
        int1 = (int1 + 1);
    };
    varclient_8509 = -1;
    string0 = "Visit the Plugin Hub using the button below to install or enable plugins. Their quick-access settings may then be displayed here.";
    script20480(106364936, 0, 0, 0, 1, 1, 0, 50, 1, 0, 2100, string0, -1, 1, 1);
    return;
}