//
function script18486(int0: dbrow): string {
    switch (int0) {
        case 1012: {
            return `Drag here to disassemble, or select to view your invention pouch.<br>Current charge: <col=FFFFFF>${script12069(varplayer_5984, 0)}</col><br>Combat drain rate: <col=FFFFFF>${script12069(SCALE(varplayer_5991, 6, 10), 2)}/s</col><br>Approximate time remaining: <col=FFFFFF>${script17049(varplayer_5991, 1)}</col>`;
        }
    };
    return dbrow_getfield(int0, 114736, 0);
}