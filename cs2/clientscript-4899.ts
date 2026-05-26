//
function script4899(int0: number): void {
    varbitplayer_6679 = int0;
    script4935();
    script4940();
    switch (int0) {
        case 0: {
            IF_SETHIDE(1, 82640919);
            IF_SETHIDE(1, 82444403);
            IF_SETHIDE(1, 82444332);
            IF_SETHIDE(0, 82509829);
            IF_SETTEXT("", 82509974);
            IF_SETHIDE(1, 82509971);
            break;
        }
        case 1: {
            IF_SETHIDE(0, 82640919);
            IF_SETHIDE(1, 82444403);
            IF_SETHIDE(1, 82444332);
            IF_SETTEXT("", 82641245);
            IF_SETHIDE(1, 82641241);
            IF_SETHIDE(1, 82509829);
            script5009();
            script5011();
            break;
        }
        case 2: {
            script4860();
            script4863();
            script4859();
            IF_SETHIDE(1, 82640919);
            IF_SETHIDE(0, 82444403);
            IF_SETHIDE(0, 82444332);
            IF_SETTEXT("", 82444884);
            IF_SETHIDE(1, 82444881);
            IF_SETHIDE(1, 82509829);
            script5009();
            break;
        }
        case 4: {
            IF_SETHIDE(0, 82640919);
            IF_SETHIDE(1, 82444403);
            IF_SETHIDE(1, 82444332);
            IF_SETTEXT("Please select an available spot from the map.", 82641245);
            IF_SETHIDE(0, 82641241);
            IF_SETHIDE(1, 82509829);
            script5010();
            script4935();
            break;
        }
        case 3: {
            IF_SETHIDE(0, 82640919);
            IF_SETHIDE(1, 82444403);
            IF_SETHIDE(1, 82444332);
            IF_SETTEXT("Please select a spot from the map.", 82641245);
            IF_SETHIDE(0, 82641241);
            IF_SETHIDE(1, 82509829);
            script5010();
            break;
        }
        case 5: {
            IF_SETHIDE(1, 82640919);
            IF_SETHIDE(0, 82444403);
            IF_SETHIDE(0, 82444332);
            IF_SETTEXT("Please select an available spot from the map.", 82444884);
            IF_SETHIDE(0, 82444881);
            IF_SETHIDE(1, 82509829);
            script5009();
            break;
        }
    };
    script4853();
    return;
}