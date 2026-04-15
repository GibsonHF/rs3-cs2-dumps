//
function script5516(int0: struct): string {
    switch (struct_getparam(int0, 7679)) {
        case 1: {
            return "Grants <col=00ffff>slight protection</col> from <col=00ffff>Dragonfire</col>.";
        }
        case 2: {
            return "Grants <col=00ffff>immunity</col> from <col=00ffff>Dragonfire</col>.";
        }
        case 3: {
        }
        default: {
            return "";
        }
    };
    return "Grants <col=00ffff>immunity</col> from <col=00ffff>Dragonfire</col> and <col=00ffff>Wyvernfire</col>.";
}