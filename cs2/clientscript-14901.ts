//
function script14901(int0: number): void {
    CC_DELETEALL(comp(693, 41));  // arch_research_management:contract_team_build_layer
    CC_DELETEALL(comp(693, 43));  // arch_research_management:contract_team_control_layer
    script14875(45416489, 45416491, int0, 0, 0, IF_GETWIDTH(comp(693, 41)), IF_GETHEIGHT(comp(693, 41)), 0);  // arch_research_management:contract_team_build_layer
    var int1 = script14662();
    var int2 = -1;
    var int3 = -1;
    int3 = (int3 + 1);
    while ((int3 < 5)) {
        if ((CC_FIND(comp(693, 43), int3) == 1)) {  // arch_research_management:contract_team_control_layer
            int2 = script14655(int0, (int3 + 1));
            if ((int2 != -1)) {
                CC_SETOPBASE(dbrow_getfield(int2, 372768, 0));
                CC_SETOPCURSOR(1, 172);
                CC_SETOP(1, "Info");
                CC_SETOP(2, "Unassign");
                CC_SETONOP(callback(script14888, -2147483644, int0, (int3 + 1)));
            } else if ((int3 < int1)) {
                CC_SETOPCURSOR(1, 46);
                CC_SETOP(1, "Select");
                CC_SETONOP(callback(script14888, -2147483644, int0, (int3 + 1)));
            } else {
                CC_CLEAROPS();
                CC_CLEARSCRIPTHOOKS();
            };
        };
    };
    return;
}