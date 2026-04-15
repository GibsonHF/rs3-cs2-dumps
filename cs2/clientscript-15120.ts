//
function script15120(int0: int): int {
    switch (int0) {
        case 1: {
            return varplayer_9525;
        }
        case 2: {
            return varplayer_9551;
        }
    };
    script12478(`npc id ${inttostring(int0, 10)} does not have a progression var set up`);
    return -1;
}