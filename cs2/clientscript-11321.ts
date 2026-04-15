//
function script11321(int0: component): void {
    var int1 = 18541 as graphic;
    var int2 = 18543;
    if ((varbitplayer_22875 == 1)) {
        int1 = 32058 as graphic;
        int2 = 32061;
    };
    if ((IF_GETGRAPHIC(int0) == int1)) {
        stack(int2);
        stack(int0);
        IF_SETGRAPHIC();
    } else {
        stack(int1);
        stack(int0);
        IF_SETGRAPHIC();
    };
    return;
}