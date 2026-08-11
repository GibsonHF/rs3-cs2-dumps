//
function script9924(int0: number): void {
    if ((int0 == 1)) {
        if ((IF_GETNEXTSUBID(comp(1431, 5)) == 0)) {  // toplevel_v2_ribbon:quickchild_listener
            IF_SETONTIMER(callback(script9923), comp(1431, 5));  // toplevel_v2_ribbon:quickchild_listener
        } else {
            script8147(0);
            script8844(1, 1, 8, 93782021, 2);
            script8844(1, 2, 8, 93782021, 3);
            script8844(1, 3, 8, 93782021, 4);
            script8844(1, 4, 8, 93782021, 5);
            script8844(1, 5, 8, 93782021, 6);
            script8844(8, script8825(2, 12), 93782022, -1);
            IF_SETONVARTRANSMIT(callback(script9923, 12314, 1), comp(1431, 6));  // toplevel_v2_ribbon:parent_listener
        };
    } else if ((IF_GETNEXTSUBID(comp(1431, 5)) > 0)) {  // toplevel_v2_ribbon:quickchild_listener
        if ((CC_FIND(comp(1431, 5), 2) == 1)) {  // toplevel_v2_ribbon:quickchild_listener
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        if ((CC_FIND(comp(1431, 5), 3) == 1)) {  // toplevel_v2_ribbon:quickchild_listener
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        if ((CC_FIND(comp(1431, 5), 4) == 1)) {  // toplevel_v2_ribbon:quickchild_listener
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        if ((CC_FIND(comp(1431, 5), 5) == 1)) {  // toplevel_v2_ribbon:quickchild_listener
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        if ((CC_FIND(comp(1431, 5), 6) == 1)) {  // toplevel_v2_ribbon:quickchild_listener
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        IF_SETOPKEY(8, 0, 0, comp(1431, 6));  // toplevel_v2_ribbon:parent_listener
        IF_SETONVARTRANSMIT(callback(), comp(1431, 6));  // toplevel_v2_ribbon:parent_listener
    };
    return;
}