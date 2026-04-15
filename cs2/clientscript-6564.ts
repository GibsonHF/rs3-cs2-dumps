//
function script6564(): void {
    var int0 = script18960();
    var string0 = "Graphics Preset is set to: ";
    switch (int0) {
        case 0: {
            string0 = strconcat(string0, "Custom");
            break;
        }
        case 1: {
            string0 = strconcat(string0, "Min");
            break;
        }
        case 2: {
            string0 = strconcat(string0, "Low");
            break;
        }
        case 3: {
            string0 = strconcat(string0, "Mid");
            break;
        }
        case 4: {
            string0 = strconcat(string0, "High");
            break;
        }
        case 5: {
            string0 = strconcat(string0, "Ultra");
            break;
        }
        case 6: {
            string0 = strconcat(string0, "Ultra Plus");
            break;
        }
        default: {
            string0 = strconcat(string0, "Custom");
            break;
        }
    };
    MES_TYPED(99, 0, string0);
    return;
}