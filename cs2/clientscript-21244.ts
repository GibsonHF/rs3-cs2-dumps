//
function script21244(): void {
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    var int3 = -1;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = 0;
    var int28 = 0;
    var int29 = ((24 - 20) / 2);
    CC_DELETEALL(comp(1623, 7));  // plugin_hub_parent_manage_permissions:permissions_close_button
    CC_DELETEALL(comp(1623, 8));  // plugin_hub_parent_manage_permissions:permissions_list
    if ((int0 == 1)) {
        CC_DELETEALL(comp(1623, 5));  // plugin_hub_parent_manage_permissions:permissions_layer
    };
    script21252();
    [int12, int13, int14] = [];
    stack(-1);
    unk11541();
    if (BRANCH_EQUALS(1)) {
        script20480(106364936, 0, 0, 0, 1, 1, 0, 0, 1, 1, 2100, "The Plugin Hub and all plugins are currently disabled. Please try again later.", -1, 1, 1);
        return;
    };
    unk11976();
    script21164();
    if (BRANCH_NOT(8)) {
        script20480(106364936, 0, 0, 0, 1, 1, 0, 0, 1, 1, 2100, "Visit the Plugin Hub using the button below to authenticate with mod.io, then you may install and enable plugins.", -1, 1, 1);
        return;
    };
    if ((int12 <= 0)) {
        script20480(106364936, 0, 0, 0, 1, 1, 0, 0, 1, 1, 2100, "Visit the Plugin Hub using the button below to install or enable plugins. Their quick-access settings may then be displayed here.", -1, 1, 1);
        return;
    };
    if ((int13 <= 0)) {
        script20480(106364936, 0, 0, 0, 1, 1, 0, 0, 1, 1, 2100, "None of your installed plugins are enabled.<br><br>Visit the Plugin Hub using the button below to enable your plugins.", -1, 1, 1);
        return;
    };
    if ((int14 <= 0)) {
        script20480(106364936, 0, 0, 0, 1, 1, 0, 0, 1, 1, 2100, "None of your enabled plugins populate this window.<br><br>Visit the Plugin Hub using the button below to install or enable other plugins.", -1, 1, 1);
        return;
    };
    script21249();
    [int6, int4, int5, int7, int8, int9] = [];
    stack(int6);
    stack(int4);
    stack(int5);
    script21250();
    stack(int14);
    stack(int9);
    stack(varclient_8508);
    script21246();
    [int17, int15, int16, int18, int19, int27, int28] = [];
    varclient_8508 = int17;
    int10 = 0;
    int11 = 0;
    if ((int27 == 1)) {
        stack(int20);
        stack(int7);
        stack(int10);
        stack(int11);
        stack(int6);
        script21245();
        [int23, int24] = [];
        stack(106364935);
        stack(int23);
        stack(int24);
        stack(int6);
        stack(-1);
        stack(int18);
        stack("Previous");
        script21247();
        int20 = (int20 + 1);
    };
    while ((int1 < int12)) {
        stack(int1);
        unk12176();
        int2 = [];
        stack(int2);
        script21253();
        if (BRANCH_EQUALS(1)) {
            if (((int22 >= int17) && (int21 < int15))) {
                stack(int2);
                stack(6);
                stack(-1);
                unk11849();
                string0 = [];
                stack(int20);
                stack(int7);
                stack(int10);
                stack(int11);
                stack(int6);
                script21245();
                [int23, int24] = [];
                int25 = IF_GETNEXTSUBID(comp(1623, 7));  // plugin_hub_parent_manage_permissions:permissions_close_button
                if ((int2 == varclient_8509)) {
                    int26 = 1;
                } else {
                    int26 = 0;
                };
                script7853(106364935, int25, int23, int24, 0, 0, 24, 24, 0, 0, 14908, "", 1, 1, 1, int26);
                if ((CC_FIND(comp(1623, 7), int25) == 1)) {  // plugin_hub_parent_manage_permissions:permissions_close_button
                    CC_SETOPBASE(string0);
                    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
                    CC_SETOP(1, "Open");
                    stack(21251);
                    stack(int2);
                    stack(-2147483645);
                    stack(-2147483643);
                    CC_SETONOP("iii");
                    CC_SETNOCLICKTHROUGH(true);
                    cc_setparam(9501, int2);
                    if ((int3 == -1)) {
                        stack(string0);
                        script21254();
                        CC_SETTEXT();
                    };
                };
                script2994(106364935, IF_GETNEXTSUBID(comp(1623, 7)), (int23 + int29), (int24 + int29), 0, 0, 20, 20, 0, 0, int3);  // plugin_hub_parent_manage_permissions:permissions_close_button
                int21 = (int21 + 1);
                int20 = (int20 + 1);
            };
            int22 = (int22 + 1);
        };
        int1 = (int1 + 1);
    };
    if ((int28 == 1)) {
        stack(int20);
        stack(int7);
        stack(int10);
        stack(int11);
        stack(int6);
        script21245();
        [int23, int24] = [];
        stack(106364935);
        stack(int23);
        stack(int24);
        stack(int6);
        stack(1);
        stack(int19);
        stack("Next");
        script21247();
    };
    return;
}