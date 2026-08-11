//
function script5816(): void {
    if ((IF_GETHIDE(comp(916, 107)) == false)) {  // pop_ship:list_layer
        switch (varplayer_3392) {
            case 5: {
                IF_SETGRAPHIC(15867 as graphic, comp(916, 94));  // pop_ship:ram_target
                IF_SETGRAPHIC(15858 as graphic, comp(916, 97));  // pop_ship:deck1_target
                IF_SETGRAPHIC(15859 as graphic, comp(916, 100));  // pop_ship:deck2_target
                IF_SETGRAPHIC(15860 as graphic, comp(916, 103));  // pop_ship:rudder_target
                IF_SETGRAPHIC(15856 as graphic, comp(916, 106));  // pop_ship:hull_target
                break;
            }
            case 2: {
                IF_SETGRAPHIC(15868 as graphic, comp(916, 97));  // pop_ship:deck1_target
                IF_SETGRAPHIC(15857 as graphic, comp(916, 94));  // pop_ship:ram_target
                IF_SETGRAPHIC(15859 as graphic, comp(916, 100));  // pop_ship:deck2_target
                IF_SETGRAPHIC(15860 as graphic, comp(916, 103));  // pop_ship:rudder_target
                IF_SETGRAPHIC(15856 as graphic, comp(916, 106));  // pop_ship:hull_target
                break;
            }
            case 3: {
                IF_SETGRAPHIC(15869 as graphic, comp(916, 100));  // pop_ship:deck2_target
                IF_SETGRAPHIC(15857 as graphic, comp(916, 94));  // pop_ship:ram_target
                IF_SETGRAPHIC(15858 as graphic, comp(916, 97));  // pop_ship:deck1_target
                IF_SETGRAPHIC(15860 as graphic, comp(916, 103));  // pop_ship:rudder_target
                IF_SETGRAPHIC(15856 as graphic, comp(916, 106));  // pop_ship:hull_target
                break;
            }
            case 4: {
                IF_SETGRAPHIC(15870 as graphic, comp(916, 103));  // pop_ship:rudder_target
                IF_SETGRAPHIC(15857 as graphic, comp(916, 94));  // pop_ship:ram_target
                IF_SETGRAPHIC(15858 as graphic, comp(916, 97));  // pop_ship:deck1_target
                IF_SETGRAPHIC(15859 as graphic, comp(916, 100));  // pop_ship:deck2_target
                IF_SETGRAPHIC(15856 as graphic, comp(916, 106));  // pop_ship:hull_target
                break;
            }
            case 1: {
                IF_SETGRAPHIC(15866 as graphic, comp(916, 106));  // pop_ship:hull_target
                IF_SETGRAPHIC(15857 as graphic, comp(916, 94));  // pop_ship:ram_target
                IF_SETGRAPHIC(15858 as graphic, comp(916, 97));  // pop_ship:deck1_target
                IF_SETGRAPHIC(15859 as graphic, comp(916, 100));  // pop_ship:deck2_target
                IF_SETGRAPHIC(15860 as graphic, comp(916, 103));  // pop_ship:rudder_target
                break;
            }
        };
    };
    return;
}