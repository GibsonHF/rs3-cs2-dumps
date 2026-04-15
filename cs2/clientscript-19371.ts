//
function script19371(int0: int, int1: obj, int2: unknown_int): void {
    if ((int2 == 1)) {
        return;
    };
    if (((script19634() == 0) || (script19579() > script19355(int1)))) {
        script19596();
        return;
    };
    if (((varplayer_11958 == -1) || (script19586(varplayer_11958) != -1 as obj))) {
        varplayer_11958 = int0;
    } else {
        varplayer_11958 = MIN(varplayer_11958, int0);
    };
    return;
}