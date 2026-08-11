//
function script14882(int0: number): void {
    varplayer_9287 = int0;
    script14900(int0);
    script14901(int0);
    var int1 = script14661(int0);
    IF_SETTEXT(`+${TOSTRING_LOCALISED(script14660(int0), 1)}%`, comp(693, 37));  // arch_research_management:contract_team_speed_modifier_text
    if ((int1 < 0)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(int1, 1)}%`, comp(693, 42));  // arch_research_management:contract_team_cost_modifier_text
    } else {
        IF_SETTEXT(`+${TOSTRING_LOCALISED(int1, 1)}%`, comp(693, 42));  // arch_research_management:contract_team_cost_modifier_text
    };
    return;
}