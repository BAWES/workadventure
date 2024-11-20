import type { Translation } from "../i18n-types";
import type { DeepPartial } from "../DeepPartial";

const actionbar: DeepPartial<Translation["actionbar"]> = {
    chat: "Chat wótcyniś / zacyniś",
    follow: "Folgen",
    unfollow: "Entfolgen",
    lock: "Diskusiju blokěrowaś / naspjet aktiwěrowaś",
    screensharing: "Pśenosowanje wobrazowki aktiwěrowaś/deaktiwěrowaś",
    layout: "Kachlowy naglěd aktiwěrowaś/deaktiwěrowaś",
    camera: "Kameru startowaś / zastajiś",
    microphone: "Mikrofon aktiwěrowaś/deaktiwěrowaś",
    emoji: "Emojije wótcyniś / zacyniś",
    menu: "Menij wótcyniś / zacyniś",
    calendar: "Kalender wótcyniś / zacyniś",
    mapEditor: "Editor kórty wótcyniś / zacyniś",
    bo: "Běrow we slězynje wótcyniś / zacyniś",
    subtitle: {
        microphone: "Mikrofon",
        speaker: "Głosniki",
    },
    help: {
        follow: {
            title: "Folgen"
        },
        unfollow: {
            title: "Entfolgen"
        }
    }
};

export default actionbar;
