//
function script18180(int0: number, int1: number): number {
    if ((int1 != -1)) {
        if ((int0 == -1)) {
            var int0 = int1;
        } else {
            int0 = IF_SETPLAYERHEAD_SELF(int0, int1);
        };
    };
    return int0;
}