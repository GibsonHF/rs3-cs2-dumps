//
function script15791(): void {
    switch (varbitplayer_49044) {
        case 10: {
            if ((script6431() == true)) {
                IF_SETTEXT("Pinch to<br>zoom your camera", comp(845, 9));
                script15792(15496 as cs2enum);
            } else {
                IF_SETTEXT("Use Scroll-wheel to<br>zoom your camera", comp(845, 9));
                script15792(16207 as cs2enum);
            };
            break;
        }
        case 15: {
            if ((script6431() == true)) {
                IF_SETTEXT("Touch and Drag to<br>rotate your camera", comp(845, 9));
                script15792(16208 as cs2enum);
            } else {
                IF_SETTEXT("Press Scroll-wheel and Drag to<br>rotate your camera", comp(845, 9));
                script15792(16209 as cs2enum);
            };
            break;
        }
    };
    script13969(comp(845, 8), comp(-1, 65535), 28554 as struct, "Continue");
    return;
}