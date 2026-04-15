//
function script2192(): void {
    var int0 = varplayer_3415;
    switch (varbitplayer_17129) {
        case 0: {
            script13972(comp(950, 221), comp(950, 222), 28595 as struct, "Standard Voyages", script9670(0, varbitplayer_17129));
            break;
        }
        case 1: {
            if (((varbitplayer_17495 >= 38) && (varbitplayer_17495 < 50))) {
                int0 = 1;
            };
            script13972(comp(950, 219), comp(950, 220), 28595 as struct, `Special Voyages (${inttostring(int0, 10)})`, script9670(1, varbitplayer_17129));
            break;
        }
    };
    return;
}