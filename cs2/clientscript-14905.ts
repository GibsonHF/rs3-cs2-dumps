//
function script14905(int0: number): void {
    var int1 = -1;
    var string0 = "";
    var int2 = -1 as graphic;
    var string1 = "";
    var string2 = "Assign";
    if ((int0 != -1)) {
        IF_SETHIDE(true, comp(693, 97));  // arch_research_management:researcher_info_filler
        IF_SETHIDE(false, comp(693, 96));  // arch_research_management:researcher_info_content_layer
        int1 = script14589(dbrow_getfield(int0, 372752, 0));
        string0 = dbrow_getfield(int0, 372768, 0);
        int2 = dbrow_getfield(int0, 372816, 0);
        string1 = dbrow_getfield(int1, 380944, 0);
        switch (script14670(int0)) {
            case 1: {
                string2 = "Unassign";
                break;
            }
            case 2: {
                string2 = "";
                break;
            }
            case 3: {
                string0 = "Unknown";
                int2 = -1;
                string1 = "-";
                string2 = "";
                break;
            }
        };
        IF_SETTEXT(string0, comp(693, 98));  // arch_research_management:researcher_info_name
        IF_SETTEXT(string1, comp(693, 99));  // arch_research_management:researcher_info_qualification
        IF_SETGRAPHIC(int2, comp(693, 116));  // arch_research_management:researcher_info_icon_graphic
        IF_SETTEXT(`+${TOSTRING_LOCALISED(script14675(int0), 1)}%`, comp(693, 105));  // arch_research_management:researcher_info_speed_modifier
        IF_SETTEXT(`+${TOSTRING_LOCALISED(script14676(int0), 1)}%`, comp(693, 185));  // arch_research_management:researcher_info_cost_modifier
        IF_SETTEXT(dbrow_getfield(int0, 372784, 0), comp(693, 112));  // arch_research_management:researcher_info_bio
        IF_SETTEXT(script14681(dbrow_getfield(int0, 372864, 0)), comp(693, 113));  // arch_research_management:researcher_info_perk_name
        IF_SETTEXT(script14682(dbrow_getfield(int0, 372864, 0)), comp(693, 114));  // arch_research_management:researcher_info_perk_description
        if ((STRING_LENGTH(string2) > 0)) {
            IF_SETHIDE(false, comp(693, 110));  // arch_research_management:researcher_info_button_layer
            IF_SETHIDE(true, comp(693, 109));  // arch_research_management:researcher_info_unlock
            script13969(45416634, 45416635, 28553, string2);
        } else {
            IF_SETHIDE(true, comp(693, 110));  // arch_research_management:researcher_info_button_layer
            IF_SETHIDE(false, comp(693, 109));  // arch_research_management:researcher_info_unlock
            IF_SETTEXT(script14677(int0), comp(693, 109));  // arch_research_management:researcher_info_unlock
        };
    } else {
        IF_SETHIDE(false, comp(693, 97));  // arch_research_management:researcher_info_filler
        IF_SETHIDE(true, comp(693, 96));  // arch_research_management:researcher_info_content_layer
    };
    return;
}