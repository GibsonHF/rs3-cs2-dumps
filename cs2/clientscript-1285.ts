//
function script1285(): void {
    switch (varbitplayer_39986) {
        case 2: {
            IF_SETGRAPHIC(33116 as graphic, comp(501, 10));  // trh139:4x_gem_graphic
            IF_SETGRAPHIC(33114 as graphic, comp(501, 12));  // trh139:3x_gem_graphic
            IF_SETGRAPHIC(33111 as graphic, comp(501, 14));  // trh139:2x_gem_graphic
            IF_SETHIDE(true, comp(501, 6));  // trh139:4x_gem_glow
            IF_SETHIDE(true, comp(501, 11));  // trh139:3x_gem_glow
            IF_SETHIDE(false, comp(501, 13));  // trh139:2x_gem_glow
            break;
        }
        case 3: {
            IF_SETGRAPHIC(33116 as graphic, comp(501, 10));  // trh139:4x_gem_graphic
            IF_SETGRAPHIC(33113 as graphic, comp(501, 12));  // trh139:3x_gem_graphic
            IF_SETGRAPHIC(33112 as graphic, comp(501, 14));  // trh139:2x_gem_graphic
            IF_SETHIDE(true, comp(501, 6));  // trh139:4x_gem_glow
            IF_SETHIDE(false, comp(501, 11));  // trh139:3x_gem_glow
            IF_SETHIDE(true, comp(501, 13));  // trh139:2x_gem_glow
            break;
        }
        case 4: {
            IF_SETGRAPHIC(33115 as graphic, comp(501, 10));  // trh139:4x_gem_graphic
            IF_SETGRAPHIC(33114 as graphic, comp(501, 12));  // trh139:3x_gem_graphic
            IF_SETGRAPHIC(33112 as graphic, comp(501, 14));  // trh139:2x_gem_graphic
            IF_SETHIDE(false, comp(501, 6));  // trh139:4x_gem_glow
            IF_SETHIDE(true, comp(501, 11));  // trh139:3x_gem_glow
            IF_SETHIDE(true, comp(501, 13));  // trh139:2x_gem_glow
            break;
        }
        default: {
            IF_SETGRAPHIC(33116 as graphic, comp(501, 10));  // trh139:4x_gem_graphic
            IF_SETGRAPHIC(33114 as graphic, comp(501, 12));  // trh139:3x_gem_graphic
            IF_SETGRAPHIC(33112 as graphic, comp(501, 14));  // trh139:2x_gem_graphic
            IF_SETHIDE(true, comp(501, 6));  // trh139:4x_gem_glow
            IF_SETHIDE(true, comp(501, 11));  // trh139:3x_gem_glow
            IF_SETHIDE(true, comp(501, 13));  // trh139:2x_gem_glow
            break;
        }
    };
    switch (varbitplayer_39988) {
        case 2: {
            IF_SETGRAPHIC(33108 as graphic, comp(501, 22));  // trh139:red_gem_graphic
            IF_SETGRAPHIC(33106 as graphic, comp(501, 24));  // trh139:orange_gem_graphic
            IF_SETGRAPHIC(33109 as graphic, comp(501, 26));  // trh139:yellow_gem_graphic
            IF_SETHIDE(true, comp(501, 21));  // trh139:red_gem_glow
            IF_SETHIDE(true, comp(501, 23));  // trh139:orange_gem_glow
            IF_SETHIDE(false, comp(501, 25));  // trh139:yellow_gem_glow
            break;
        }
        case 3: {
            IF_SETGRAPHIC(33108 as graphic, comp(501, 22));  // trh139:red_gem_graphic
            IF_SETGRAPHIC(33105 as graphic, comp(501, 24));  // trh139:orange_gem_graphic
            IF_SETGRAPHIC(33110 as graphic, comp(501, 26));  // trh139:yellow_gem_graphic
            IF_SETHIDE(true, comp(501, 21));  // trh139:red_gem_glow
            IF_SETHIDE(false, comp(501, 23));  // trh139:orange_gem_glow
            IF_SETHIDE(true, comp(501, 25));  // trh139:yellow_gem_glow
            break;
        }
        case 4: {
            IF_SETGRAPHIC(33107 as graphic, comp(501, 22));  // trh139:red_gem_graphic
            IF_SETGRAPHIC(33106 as graphic, comp(501, 24));  // trh139:orange_gem_graphic
            IF_SETGRAPHIC(33110 as graphic, comp(501, 26));  // trh139:yellow_gem_graphic
            IF_SETHIDE(false, comp(501, 21));  // trh139:red_gem_glow
            IF_SETHIDE(true, comp(501, 23));  // trh139:orange_gem_glow
            IF_SETHIDE(true, comp(501, 25));  // trh139:yellow_gem_glow
            break;
        }
        default: {
            IF_SETGRAPHIC(33108 as graphic, comp(501, 22));  // trh139:red_gem_graphic
            IF_SETGRAPHIC(33106 as graphic, comp(501, 24));  // trh139:orange_gem_graphic
            IF_SETGRAPHIC(33110 as graphic, comp(501, 26));  // trh139:yellow_gem_graphic
            IF_SETHIDE(true, comp(501, 21));  // trh139:red_gem_glow
            IF_SETHIDE(true, comp(501, 23));  // trh139:orange_gem_glow
            IF_SETHIDE(true, comp(501, 25));  // trh139:yellow_gem_glow
            break;
        }
    };
    return;
}