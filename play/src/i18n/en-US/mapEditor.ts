import type { BaseTranslation } from "../i18n-types";

const mapEditor: BaseTranslation = {
    map: {
        refreshPrompt: "New version of map detected. Refresh needed",
    },
    sideBar: {
        areaEditor: "Area editor tool",
        entityEditor: "Entity editor tool",
        tileEditor: "Tile editor tool",
        configureMyRoom: "Configure my room",
        trashEditor: "Trash",
    },
    properties: {
        silentProperty: {
            label: "Silent",
            description: "Do not allow for conversations inside.",
        },
        textProperties: {
            label: "Header Text",
            placeholder: "Input here text which will be displayed when interacting with the object",
        },
        focusableProperties: {
            label: "Focusable",
            description: "Focus camera on this area on enter.",
            zoomMarginLabel: "Zoom Margin",
            defaultButtonLabel: "Focus on",
        },
        jitsiProperties: {
            label: "Jitsi Room",
            description: "Start Jitsi meeting on enter.",
            roomNameLabel: "Room Name",
            jitsiUrl: "Jitsi URL",
            jitsiUrlPlaceholder: "meet.jit.si",
            roomNamePlaceholder: "Room Name",
            defaultButtonLabel: "Open Jitsi Room",
            audioMutedLabel: "Muted by default",
            moreOptionsLabel: "More Options",
            trigger: "Interaction",
            triggerMessage: "Toast Message",
            triggerShowImmediately: "Show immediately on enter",
            triggerOnClick: "Start as minimized in bottom bar",
            triggerOnAction: "Show action toast with message",
            closable: "Can be closed",
            noPrefix: "Share with other rooms",
            width: "Width",
            jitsiRoomConfig: {
                addConfig: "Add an option",
                startWithAudioMuted: "Start with microphone muted",
                startWithVideoMuted: "Start with video closed",
                cancel: "Cancel",
                validate: "Validate",
            },
        },
        audioProperties: {
            label: "Play Audio File",
            description: "Play audio with adjustable volume.",
            volumeLabel: "Volume",
            audioLinkLabel: "Audio Link",
            audioLinkPlaceholder: "https://xxx.yyy/smthing.mp3",
            defaultButtonLabel: "Play music",
        },
        linkProperties: {
            label: "Open Link",
            description: "Open website within WorkAdventure or as a new tab.",
            linkLabel: "Link URL",
            newTabLabel: "Open in new tab",
            trigger: "Interaction",
            triggerMessage: "Toast Message",
            triggerShowImmediately: "Show immediately on enter",
            triggerOnClick: "Start as minimized in bottom bar",
            triggerOnAction: "Show action toast with message",
            closable: "Can be closed",
            allowAPI: "Allow Scripting API",
            linkPlaceholder: "https://example.com",
            defaultButtonLabel: "Open Link",
            width: "Width",
            policy: "iFrame Allow",
            policyPlaceholder: "fullscreen",
            errorEmbeddableLink: "The link is not embeddable",
            messageNotEmbeddableLink: "The link is not embeddable. It can only open in a new tab",
            warningEmbeddableLink: "This link cannot be embedded.",
            errorInvalidUrl: 'Please enter a valid URL (starting with "https://")',
            findOutMoreHere: "Find out more here",
            openPickerSelector: "Open picker selector",
        },
        advancedOptions: "Advanced Options",
        speakerMegaphoneProperties: {
            id: "Speaker zone identfier use for create unique room",
            label: "Speaker zone for megaphone",
            description: "",
            nameLabel: "Name",
            namePlaceholder: "MySpeakerZone",
        },
        listenerMegaphoneProperties: {
            label: "ListenerZone for megaphone",
            description: "",
            nameLabel: "SpeakerZone Name",
            namePlaceholder: "MySpeakerZone",
        },
        chatEnabled: "Associate a dedicated chat channel",
        startProperties: {
            label: "Start area",
            description: "Where people can start in the map.",
            nameLabel: "Start name",
            namePlaceholder: "Enter1",
            type: "Start position type",
            defaultMenuItem: "Use by default",
            hashMenuItem: "Use if URL contains #[area name]",
        },
        exitProperties: {
            label: "Exit area",
            description: "Where people can exit the map to another one.",
            exitMap: "Exit map",
            exitMapStartAreaName: "Start area name",
        },
        youtubeProperties: {
            label: "Open Youtube Video",
            description: "Open Youtube video within WorkAdventure or as a new tab.",
            error: "Please enter a valid Youtube URL",
            disabled: "Youtube integration is disabled.",
        },
        googleDocsProperties: {
            label: "Open Google Docs",
            description: "Open Google Docs within WorkAdventure or as a new tab.",
            error: "Please enter a valid Google Docs URL",
            disabled: "Google Docs integration is disabled.",
        },
        klaxoonProperties: {
            label: "Open Klaxoon",
            description: "Open Klaxoon within WorkAdventure or as a new tab.",
            error: "Please enter a valid Klaxoon URL",
            disabled: "Klaxoon integration is disabled.",
        },
        googleSheetsProperties: {
            label: "Open Google Sheets",
            description: "Open Google Sheets within WorkAdventure or as a new tab.",
            error: "Please enter a valid Google Sheets URL",
            disabled: "Google Sheets integration is disabled.",
        },
        googleSlidesProperties: {
            label: "Open Google Slides",
            description: "Open Google Slides within WorkAdventure or as a new tab.",
            error: "Please enter a valid Google Slides URL",
            disabled: "Google Slides integration is disabled.",
        },
        eraserProperties: {
            label: "Eraser",
            description: "Erase all drawings on the map.",
            defaultButtonLabel: "Erase",
            error: "Please enter a valid Eraser URL",
            disabled: "Eraser integration is disabled.",
        },
        googleDriveProperties: {
            label: "Open Google Drive",
            description: "Open Google Drive within WorkAdventure or as a new tab.",
            error: "Please enter a valid Google Drive URL",
            disabled: "Google Drive integration is disabled.",
        },
    },
    areaEditor: {
        editInstructions: "Click an area to modify its properties.",
        nameLabel: "Name",
    },
    areaEditorInstructions: {
        title: "How it works ?",
        description: "Draw a zone on the map to create a new one.",
    },
    entityEditor: {
        itemPicker: {
            searchPlaceholder: "Search",
            backToSelectObject: "Back to select object",
        },
        trashTool: {
            delete: "Click on the object to delete it!",
        },
        deleteButton: "Delete",
        testInteractionButton: "Test Interaction",
        buttonLabel: "Button Label",
        editInstructions: "Click an entity to modify its properties.",
        selectObject: "Click on an object to select it",
    },
    settings: {
        loading: "Loading",
        megaphone: {
            title: "Megaphone",
            description:
                "The megaphone is a tool that allows you to broadcast a video/audio stream to all players in the room/world.",
            inputs: {
                spaceName: "Space name",
                spaceNameHelper:
                    "If you want to broadcast a stream to all the users that are on different rooms but in the same world, you must set the same SpaceName for all the megaphone settings in each room and set the scope to 'World'.",
                scope: "Scope",
                world: "World",
                room: "Room",
                rights: "Rights",
                rightsHelper:
                    "The rights define who can use the megaphone. If you leave it empty, anyone can use it. If you set it, only users that have one of those 'tag' can use it.",
                error: {
                    title: "Please enter a title",
                    save: {
                        success: "Megaphone settings saved",
                        fail: "Error while saving megaphone settings",
                    },
                },
            },
        },
    },
};

export default mapEditor;
