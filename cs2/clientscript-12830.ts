//
function script12830(int0: number, int1: number): void {
    IF_SETHIDE(true, comp(1798, 86));  // elrc:dynamic_layer
    IF_SETHIDE(true, comp(1798, 87));  // elrc:guide_layer
    IF_SETHIDE(true, comp(1798, 69));  // elrc:home_layer
    switch (int0) {
        case 2: {
            switch (int1) {
                case 1: {
                    IF_SETGRAPHIC(28419 as graphic, comp(1798, 50));  // elrc:tab_active_tab_graphic
                    IF_SETPOSITION(88, 0, 0, 0, comp(1798, 56));  // elrc:tab_active_tab
                    break;
                }
                case 2: {
                    IF_SETGRAPHIC(28448 as graphic, comp(1798, 50));  // elrc:tab_active_tab_graphic
                    IF_SETPOSITION(139, 0, 0, 0, comp(1798, 56));  // elrc:tab_active_tab
                    break;
                }
                case 3: {
                    IF_SETGRAPHIC(28416 as graphic, comp(1798, 50));  // elrc:tab_active_tab_graphic
                    IF_SETPOSITION(190, 0, 0, 0, comp(1798, 56));  // elrc:tab_active_tab
                    break;
                }
                case 4: {
                    IF_SETGRAPHIC(28436 as graphic, comp(1798, 50));  // elrc:tab_active_tab_graphic
                    IF_SETPOSITION(241, 0, 0, 0, comp(1798, 56));  // elrc:tab_active_tab
                    break;
                }
                case 5: {
                    IF_SETGRAPHIC(28422 as graphic, comp(1798, 50));  // elrc:tab_active_tab_graphic
                    IF_SETPOSITION(292, 0, 0, 0, comp(1798, 56));  // elrc:tab_active_tab
                    break;
                }
            };
            IF_SETHIDE(false, comp(1798, 86));  // elrc:dynamic_layer
            break;
        }
        case 3: {
            IF_SETGRAPHIC(28445 as graphic, comp(1798, 50));  // elrc:tab_active_tab_graphic
            IF_SETPOSITION(412, 0, 0, 0, comp(1798, 56));  // elrc:tab_active_tab
            IF_SETHIDE(false, comp(1798, 86));  // elrc:dynamic_layer
            break;
        }
        case 5: {
            IF_SETGRAPHIC(28451 as graphic, comp(1798, 50));  // elrc:tab_active_tab_graphic
            IF_SETPOSITION(37, 0, 0, 0, comp(1798, 56));  // elrc:tab_active_tab
            IF_SETHIDE(false, comp(1798, 69));  // elrc:home_layer
            break;
        }
        case 6: {
            IF_SETGRAPHIC(28439 as graphic, comp(1798, 50));  // elrc:tab_active_tab_graphic
            IF_SETPOSITION(667, 0, 0, 0, comp(1798, 56));  // elrc:tab_active_tab
            IF_SETHIDE(false, comp(1798, 87));  // elrc:guide_layer
            break;
        }
    };
    return;
}