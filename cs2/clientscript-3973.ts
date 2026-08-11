//
function script3973(int0: number, int1: number): void {
    script4063(int0, int1);
    switch (varbitplayer_33660) {
        case 1: {
            IF_SETONTIMER(callback(script3871, 28704793, 28704777, 4, 0), comp(438, 25));  // oct18:loot_1
            IF_SETONTIMER(callback(script3871, 28704795, 28704778, 8, 0), comp(438, 27));  // oct18:loot_2
            IF_SETONTIMER(callback(script3871, 28704797, 28704779, 12, 0), comp(438, 29));  // oct18:loot_3
            IF_SETONTIMER(callback(script3871, 28704824, 28704780, 16, 0), comp(438, 56));  // oct18:loot_4
            break;
        }
        case 2: {
            IF_SETONTIMER(callback(script3871, 28704782, 28704770, 288000, 1), comp(438, 14));  // oct18:loot_community_1
            IF_SETONTIMER(callback(script3871, 28704784, 28704771, 556000, 1), comp(438, 16));  // oct18:loot_community_2
            IF_SETONTIMER(callback(script3871, 28704786, 28704772, 803000, 1), comp(438, 18));  // oct18:loot_community_3
            IF_SETONTIMER(callback(script3871, 28704852, 28704773, 1008000, 1), comp(438, 84));  // oct18:loot_community_4
            IF_SETONTIMER(callback(script3871, 28704854, 28704774, 1163000, 1), comp(438, 86));  // oct18:loot_community_5
            IF_SETONTIMER(callback(script3871, 28704856, 28704775, 1286000, 1), comp(438, 88));  // oct18:loot_community_6
            IF_SETONTIMER(callback(script3871, 28704858, 28704776, 1410000, 1), comp(438, 90));  // oct18:loot_community_7
            break;
        }
    };
    return;
}