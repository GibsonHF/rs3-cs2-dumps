//
function script12165(int0: unknown_int): string {
    switch (int0) {
        case 2: {
            return "Bag of Materials<br>A bag of materials gained from disassembly.";
        }
        case 1: {
            return "Inventor's Tools<br>A set of tools used to disassemble objects.";
        }
        case 3: {
            return `Charge Pack<br>A pack containing stored divine energy.<br>Current charge: ${script12069(varplayer_5984, 0)}<br>Max charge: ${script12069(script12067(), 0)}<br>Combat drain rate: ${script12069(SCALE(varplayer_5991, 6, 10), 2)}/s`;
        }
    };
    return "";
}