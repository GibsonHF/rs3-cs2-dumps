//
function script10560(int0: int, int1: component): void {
    SOUND_VORBIS_VOLUME(92 as vorbis, 1, 0, 120);
    SOUND_VORBIS_VOLUME(1959 as vorbis, 1, 0, 120);
    CC_DELETEALL(int1);
    CC_CREATE(int1, 5, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(36, 32, 0, 0);
    CC_SETOBJECT(enum_getvalue(0, 33, 9199 as cs2enum, int0), -1);
    CC_SETOP(1, "Remove");
    CC_SETONOP(callback());
    if (((int1 != 100401169) && (varbitplayer_24912 == int0))) {
        IF_SETTEXT("Base rune cost: <col=ffffff>???</col>.<br>+<col=ffffff>???</col> Total: <col=ffffff>???</col>.", comp(1532, 3));
        script10558(comp(1532, 17));
    };
    if (((int1 != comp(1532, 19)) && (varbitplayer_24913 == int0))) {
        IF_SETTEXT("Base rune cost: <col=ffffff>???</col>.<br>+<col=ffffff>???</col> Total: <col=ffffff>???</col>.", comp(1532, 4));
        script10558(comp(1532, 19));
    };
    if (((int1 != comp(1532, 21)) && (varbitplayer_24914 == int0))) {
        IF_SETTEXT("Base rune cost: <col=ffffff>???</col>.<br>+<col=ffffff>???</col> Total: <col=ffffff>???</col>.", comp(1532, 5));
        script10558(comp(1532, 21));
    };
    return;
}