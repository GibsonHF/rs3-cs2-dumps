//
function script5927(int0: number, int1: number): void {
    switch (int0) {
        case 5: {
            if ((varplayer_3392 == int0)) {
                if ((IF_GETHIDE(comp(916, 107)) == false)) {  // pop_ship:list_layer
                    IF_SETGRAPHIC(15867 as graphic, comp(916, 94));  // pop_ship:ram_target
                } else if ((int1 == 1)) {
                    IF_SETGRAPHIC(15862 as graphic, comp(916, 94));  // pop_ship:ram_target
                } else {
                    IF_SETGRAPHIC(15857 as graphic, comp(916, 94));  // pop_ship:ram_target
                };
            } else if ((int1 == 1)) {
                IF_SETGRAPHIC(15862 as graphic, comp(916, 94));  // pop_ship:ram_target
            } else {
                IF_SETGRAPHIC(15857 as graphic, comp(916, 94));  // pop_ship:ram_target
            };
            break;
        }
        case 2: {
            if ((varplayer_3392 == int0)) {
                if ((IF_GETHIDE(comp(916, 107)) == false)) {  // pop_ship:list_layer
                    IF_SETGRAPHIC(15868 as graphic, comp(916, 97));  // pop_ship:deck1_target
                } else if ((int1 == 1)) {
                    IF_SETGRAPHIC(15863 as graphic, comp(916, 97));  // pop_ship:deck1_target
                } else {
                    IF_SETGRAPHIC(15858 as graphic, comp(916, 97));  // pop_ship:deck1_target
                };
            } else if ((int1 == 1)) {
                IF_SETGRAPHIC(15863 as graphic, comp(916, 97));  // pop_ship:deck1_target
            } else {
                IF_SETGRAPHIC(15858 as graphic, comp(916, 97));  // pop_ship:deck1_target
            };
            break;
        }
        case 3: {
            if ((varplayer_3392 == int0)) {
                if ((IF_GETHIDE(comp(916, 107)) == false)) {  // pop_ship:list_layer
                    IF_SETGRAPHIC(15869 as graphic, comp(916, 100));  // pop_ship:deck2_target
                } else if ((int1 == 1)) {
                    IF_SETGRAPHIC(15864 as graphic, comp(916, 100));  // pop_ship:deck2_target
                } else {
                    IF_SETGRAPHIC(15859 as graphic, comp(916, 100));  // pop_ship:deck2_target
                };
            } else if ((int1 == 1)) {
                IF_SETGRAPHIC(15864 as graphic, comp(916, 100));  // pop_ship:deck2_target
            } else {
                IF_SETGRAPHIC(15859 as graphic, comp(916, 100));  // pop_ship:deck2_target
            };
            break;
        }
        case 4: {
            if ((varplayer_3392 == int0)) {
                if ((IF_GETHIDE(comp(916, 107)) == false)) {  // pop_ship:list_layer
                    IF_SETGRAPHIC(15870 as graphic, comp(916, 103));  // pop_ship:rudder_target
                } else if ((int1 == 1)) {
                    IF_SETGRAPHIC(15865 as graphic, comp(916, 103));  // pop_ship:rudder_target
                } else {
                    IF_SETGRAPHIC(15860 as graphic, comp(916, 103));  // pop_ship:rudder_target
                };
            } else if ((int1 == 1)) {
                IF_SETGRAPHIC(15865 as graphic, comp(916, 103));  // pop_ship:rudder_target
            } else {
                IF_SETGRAPHIC(15860 as graphic, comp(916, 103));  // pop_ship:rudder_target
            };
            break;
        }
        case 1: {
            if ((varplayer_3392 == int0)) {
                if ((IF_GETHIDE(comp(916, 107)) == false)) {  // pop_ship:list_layer
                    IF_SETGRAPHIC(15866 as graphic, comp(916, 106));  // pop_ship:hull_target
                } else if ((int1 == 1)) {
                    IF_SETGRAPHIC(15861 as graphic, comp(916, 106));  // pop_ship:hull_target
                } else {
                    IF_SETGRAPHIC(15856 as graphic, comp(916, 106));  // pop_ship:hull_target
                };
            } else if ((int1 == 1)) {
                IF_SETGRAPHIC(15861 as graphic, comp(916, 106));  // pop_ship:hull_target
            } else {
                IF_SETGRAPHIC(15856 as graphic, comp(916, 106));  // pop_ship:hull_target
            };
            break;
        }
    };
    return;
}