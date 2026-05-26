//
function script2192(): void {
    var int0 = varplayer_3415;
    switch (varbitplayer_17129) {
        case 0: {
            script13972(62259421, 62259422, 28595, "Standard Voyages", script9670(0, varbitplayer_17129));
            break;
        }
        case 1: {
            if (((varbitplayer_17495 >= 38) && (varbitplayer_17495 < 50))) {
                int0 = 1;
            };
            script13972(62259419, 62259420, 28595, `Special Voyages (${inttostring(int0, 10)})`, script9670(1, varbitplayer_17129));
            break;
        }
    };
    return;
}