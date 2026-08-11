//
function script14892(int0: number): void {
    var int1 = -1;
    var int2 = 45416521;
    switch (int0) {
        case 14093: {
            script13972(45416523, -1, 28595, "General Research", 1);
            script13972(45416524, -1, 28595, "Special Research", 0);
            IF_SETHIDE(false, comp(693, 69));  // arch_research_management:general_research_scrolling_layer
            IF_SETHIDE(true, comp(693, 72));  // arch_research_management:special_research_scrolling_layer
            int1 = 45416517;
            break;
        }
        case 14094: {
            script13972(45416523, -1, 28595, "General Research", 0);
            script13972(45416524, -1, 28595, "Special Research", 1);
            IF_SETHIDE(true, comp(693, 69));  // arch_research_management:general_research_scrolling_layer
            IF_SETHIDE(false, comp(693, 72));  // arch_research_management:special_research_scrolling_layer
            int1 = 45416520;
            break;
        }
    };
    script14871(int1, int2);
    return;
}