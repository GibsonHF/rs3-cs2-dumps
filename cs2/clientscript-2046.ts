//[proc,worldmap_overlay_clear]
function script2046(int0: number): void {
    IF_SETONTIMER(callback(script2045, int0, 93126656, 0, 0, 0), int0);
    CC_DELETEALL(int0);
    CC_DELETEALL(comp(1422, 5));  // worldmap_v2_ui:you_are_here
    CC_DELETEALL(comp(1422, 6));  // worldmap_v2_ui:arrow0
    CC_DELETEALL(comp(1422, 7));  // worldmap_v2_ui:arrow1
    CC_DELETEALL(comp(1422, 8));  // worldmap_v2_ui:arrow2
    CC_DELETEALL(comp(1422, 9));  // worldmap_v2_ui:arrow3
    CC_DELETEALL(comp(1422, 10));  // worldmap_v2_ui:arrow_gravestone
    CC_DELETEALL(comp(1422, 12));  // worldmap_v2_ui:arrow_waypoint
    CC_DELETEALL(comp(1422, 31));  // worldmap_v2_ui:newcontent_upsell0
    if ((PLAYERMEMBER() == false)) {
        CC_DELETEALL(comp(1422, 20));  // worldmap_v2_ui:upsell0
        CC_DELETEALL(comp(1422, 21));  // worldmap_v2_ui:upsell1
        CC_DELETEALL(comp(1422, 22));  // worldmap_v2_ui:upsell2
        CC_DELETEALL(comp(1422, 23));  // worldmap_v2_ui:upsell3
        CC_DELETEALL(comp(1422, 24));  // worldmap_v2_ui:upsell4
        CC_DELETEALL(comp(1422, 25));  // worldmap_v2_ui:upsell5
        CC_DELETEALL(comp(1422, 26));  // worldmap_v2_ui:upsell6
        CC_DELETEALL(comp(1422, 27));  // worldmap_v2_ui:upsell7
        CC_DELETEALL(comp(1422, 28));  // worldmap_v2_ui:upsell8
        CC_DELETEALL(comp(1422, 29));  // worldmap_v2_ui:upsell9
        CC_DELETEALL(comp(1422, 30));  // worldmap_v2_ui:upsell10
    };
    return;
}