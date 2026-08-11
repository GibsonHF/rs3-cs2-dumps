//
function script9782(int0: number): number {
    switch (int0) {
        case 1: {
            return IF_HASSUBOVERLAY(comp(1429, 19), 406 as overlayinterface);  // clan_keep_theatre_container:facing_interface
        }
        case 2: {
            return IF_HASSUBOVERLAY(comp(1429, 20), 310 as overlayinterface);  // clan_keep_theatre_container:actors_interface
        }
        case 3: {
            return IF_HASSUBOVERLAY(comp(1429, 21), 319 as overlayinterface);  // clan_keep_theatre_container:sounds_interface
        }
        case 4: {
            return IF_HASSUBOVERLAY(comp(1429, 22), 824 as overlayinterface);  // clan_keep_theatre_container:spotlights_interface
        }
        case 5: {
            return IF_HASSUBOVERLAY(comp(1429, 23), 823 as overlayinterface);  // clan_keep_theatre_container:props_interface
        }
    };
    return 0;
}