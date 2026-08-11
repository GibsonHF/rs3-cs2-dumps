//
function script17733(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    switch (int0) {
        case 7599: {
            IF_SETONSTATTRANSMIT(callback(script17738, 28, 1), 80084994);
            break;
        }
    };
    varplayer_11091 = int0;
    varclient_7216 = int1;
    varclient_7217 = int2;
    varclient_7218 = int3;
    varclient_7219 = int4;
    varclient_7220 = int5;
    varclient_7221 = int6;
    varclient_7222 = int7;
    var string0 = dbrow_getfield(int0, 946240, 0);
    switch (int0) {
        case 7599: {
            string0 = `Earn <col=ffffff>${script17481(int0, int7)}</col> by gaining Necromancy XP with combat.`;
            IF_SETHIDE(false, comp(1222, 23));  // skill_tree:extra_value_layer
            IF_SETGRAPHIC(31310 as graphic, comp(1222, 147));  // skill_tree:extra_value_icon
            IF_SETONVARCTRANSMIT(callback(script17736, 7223, 1), comp(1222, 148));  // skill_tree:extra_value_text
            script3536("Total number of souls powering the vessel.", 80085015, -1);
            break;
        }
    };
    IF_SETTEXT(dbrow_getfield(int0, 946192, 0), 80085007);
    IF_SETTEXT(string0, comp(1222, 16));  // skill_tree:tree_details_body_text
    IF_SETGRAPHIC(dbrow_getfield(int0, 946256, 0), comp(1222, 25));  // skill_tree:points_available_icon
    script17741(int0);
    script13310(80085090, 80085091, 59, (8 * 1000));
    IF_SETONVARCTRANSMIT(callback(script17735, 7220, 7221, 7222, 3), comp(1222, 26));  // skill_tree:points_available_text
    script3536("Total number of Talent Points available.", 80085016, -1);
    IF_SETONVARCTRANSMIT(callback(script17734, 7220, 7221, 7222, 3), comp(1222, 18));  // skill_tree:points_earned_text
    return;
}