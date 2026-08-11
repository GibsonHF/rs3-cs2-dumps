//
function script14895(int0: number, int1: number): void {
    var int2 = script14631(int0);
    var int3 = -1;
    var string0 = "0";
    var string1 = "0";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "Research";
    var int4 = 0;
    if ((int0 != -1)) {
        IF_SETHIDE(true, comp(693, 46));  // arch_research_management:research_info_holding_layer
        IF_SETHIDE(false, comp(693, 48));  // arch_research_management:research_info_content_layer
        int3 = script14638(int0);
        IF_SETTEXT(dbrow_getfield(int0, 368688, 0), comp(693, 49));  // arch_research_management:research_info_name
        IF_SETGRAPHIC(script14635(int0), comp(693, 54));  // arch_research_management:research_info_banner_graphic
        IF_SETGRAPHIC(script14636(int0), comp(693, 55));  // arch_research_management:research_info_overlay_graphic
        if ((int3 != -1)) {
            IF_SETHIDE(false, comp(693, 56));  // arch_research_management:research_info_requirement_layer
            IF_SETTEXT(`Lvl ${inttostring(int3, 10)}`, comp(693, 53));  // arch_research_management:research_info_skill_requirement_level
        } else {
            IF_SETHIDE(true, comp(693, 56));  // arch_research_management:research_info_requirement_layer
            IF_SETTEXT("Lvl 1", comp(693, 53));  // arch_research_management:research_info_skill_requirement_level
            int3 = STAT_BASE(27 as stat);
        };
        IF_SETTEXT(dbrow_getfield(int0, 368736, 0), 45416510);
        if ((int2 > 0)) {
            script14896();
            string4 = script14665(int2);
            switch (script14649(int2)) {
                case 1: {
                    string0 = script14664(int2);
                    string2 = `Report ETA: <col=FFFFFF>${string0}</col>`;
                    string5 = "Terminate";
                    break;
                }
                case 2: {
                    string2 = "<col=FFFFFF>Report available</col>";
                    string5 = "View Report";
                    break;
                }
            };
        } else {
            script14897(int0, int1);
            string0 = script14648(int0, int1, varplayer_9287);
            string1 = script14646(int0, int1, int3, varplayer_9287);
            string2 = `Duration: <col=FFFFFF>${string0}</col>`;
            string3 = `Cost: <col=FFFFFF>${string1}</col>`;
            string4 = script14633(int0, int1, int3);
        };
        CC_DELETEALL(comp(693, 192));  // arch_research_management:research_info_contract_summary_build_layer
        script14874(45416640, 0, 0, IF_GETWIDTH(comp(693, 192)), IF_GETHEIGHT(comp(693, 192)), string2, string3, 1);  // arch_research_management:research_info_contract_summary_build_layer
        IF_SETTEXT(string4, comp(693, 199));  // arch_research_management:research_info_rewards_text
        CC_DELETEALL(comp(693, 200));  // arch_research_management:research_info_rewards_scrollbar_layer
        int4 = script7593(string4, IF_GETWIDTH(comp(693, 199)), IF_GETFONTMETRICS(comp(693, 199)), 0);  // arch_research_management:research_info_rewards_text
        if ((int4 > IF_GETHEIGHT(comp(693, 198)))) {  // arch_research_management:research_info_rewards_build_layer
            IF_SETSCROLLSIZE(0, int4, comp(693, 198));  // arch_research_management:research_info_rewards_build_layer
            script7791(45416648, 45416646);
        } else {
            IF_SETSCROLLSIZE(0, 0, comp(693, 198));  // arch_research_management:research_info_rewards_build_layer
        };
        IF_SETSCROLLPOS(0, 0, comp(693, 198));  // arch_research_management:research_info_rewards_build_layer
        script13969(45416642, 45416643, 28553, string5);
    } else {
        IF_SETHIDE(false, comp(693, 46));  // arch_research_management:research_info_holding_layer
        IF_SETHIDE(true, comp(693, 48));  // arch_research_management:research_info_content_layer
    };
    return;
}