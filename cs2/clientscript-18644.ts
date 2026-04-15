//
function script18644(int0: struct, int1: unknown_int, string0: string): string {
    switch (int0) {
        case 47129: {
            var string0 = `${string0}<br>- Move up to ${script17709(10)} towards tile.`;
            break;
        }
        case 1488: {
            string0 = `${string0}<br>- Move up to ${script17709(10)} towards enemy or tile.`;
            string0 = `${string0}<br>- ${script17720(int0, 75, (75 + 20), 0, int1)} to the target and up to ${script18561(8)} within ${script17709(1)} of you.`;
            string0 = `${string0}<br>- Enemies hit will reset the cooldown of <sprite=30331><nbsp><col=ffffff>${struct_getparam(1488, 2794)}</col> if they die within <col=ffffff>${script15973(10, 1)}</col>.`;
            break;
        }
    };
    return string0;
}