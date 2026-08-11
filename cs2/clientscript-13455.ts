//
function script13455(int0: number): void {
    var int1 = comp(-1, 65535);
    var int2 = -1 as graphic;
    var string0 = "Change selected faction";
    switch (int0) {
        case 1: {
            int1 = comp(1875, 18);  // repmodal:circular_bar_layer_worker_favourite
            break;
        }
        case 2: {
            int1 = comp(1875, 13);  // repmodal:circular_bar_layer_imperial_favourite
            break;
        }
        case 3: {
            int1 = comp(1875, 21);  // repmodal:circular_bar_layer_merchant_favourite
            break;
        }
        case 4: {
            int1 = comp(1875, 16);  // repmodal:circular_bar_layer_ports_favourite
            break;
        }
    };
    if ((int0 == varbitplayer_35973)) {
        int2 = 30871 as graphic;
    } else {
        int2 = 30868 as graphic;
    };
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    CC_CREATE(int1, 5, 0);
    CC_SETSIZE(24, 24, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(int2);
    CC_SETONVARTRANSMIT(callback(script13453, 6991, 1));
    script8800(string0, int1, 0);
    return;
}