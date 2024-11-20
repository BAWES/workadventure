import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const mapEditor: DeepPartial<Translation["mapEditor"]> = {
    map: {
        refreshPrompt: "Nuova versione della mappa rilevata. È necessario aggiornare",
    },
    sideBar: {
        areaEditor: "Strumento di modifica dell'area",
        entityEditor: "Strumento di modifica dell'entità",
        tileEditor: "Strumento di modifica delle tessere",
        configureMyRoom: "Configura la mia stanza",
        trashEditor: "Cestino",
        exploreTheRoom: "Esplora la stanza",
        closeMapEditor: "Chiudi l'editor della mappa",
        mapManagerActivated: "Gestore della mappa attivato",
        mapExplorerActivated: "Panoramica della mappa",
        exploreTheRoomActivated: "Esplora la stanza attivata",
        areaEditorActivated: "Editor dell'area attivato",
        entityEditorActivated: "Editor dell'entità attivato",
        trashEditorActivated: "Editor del cestino attivato",
        configureMyRoomActivated: "Configura la mia stanza attivata",
    },
    properties: {
        silentProperty: {
            label: "Silenzioso",
            description: "Non consentire conversazioni all'interno.",
        },
        textProperties: {
            label: "Testo Intestazione",
            placeholder: "Inserisci qui il testo che verrà visualizzato quando interagisci con l'oggetto",
        },
        focusableProperties: {
            label: "Focalizzabile",
            description: "Metti a fuoco la telecamera su quest'area all'ingresso.",
            zoomMarginLabel: "Margine Zoom",
            defaultButtonLabel: "Metti a fuoco",
        },
        jitsiProperties: {
            label: "Stanza Jitsi",
            description: "Avvia una riunione Jitsi all'ingresso.",
            roomNameLabel: "Nome Stanza",
            jitsiUrl: "URL Jitsi",
            jitsiUrlPlaceholder: "meet.jit.si",
            roomNamePlaceholder: "Nome Stanza",
            defaultButtonLabel: "Apri Stanza Jitsi",
            audioMutedLabel: "Disattivato per impostazione predefinita",
            moreOptionsLabel: "Più Opzioni",
            trigger: "Attiva",
            triggerMessage: "Messaggio Toast",
            triggerShowImmediately: "Mostra immediatamente all'ingresso",
            triggerOnClick: "Avvia come minimizzato nella barra inferiore",
            triggerOnAction: "Mostra toast azione con messaggio",
            closable: "Può essere chiuso",
            noPrefix: "Condividi con altre stanze",
            width: "Larghezza",
            jitsiRoomConfig: {
                addConfig: "Aggiungi un'opzione",
                startWithAudioMuted: "Avvia con microfono disattivato",
                startWithVideoMuted: "Avvia con video disattivato",
                jitsiRoomAdminTag: "Tag moderatore per la stanza della riunione",
                cancel: "Annulla",
                validate: "Convalida",
            },
        },
        audioProperties: {
            label: "Riproduci File Audio",
            description: "Riproduci audio con volume regolabile.",
            volumeLabel: "Volume",
            audioLinkLabel: "Link Audio",
            audioLinkPlaceholder: "https://xxx.yyy/smthing.mp3",
            defaultButtonLabel: "Riproduci musica",
            error: "Impossibile caricare il suono",
        },
        linkProperties: {
            label: "Apri Link",
            description: "Apri sito web all'interno di WorkAdventure o come nuova scheda.",
            linkLabel: "URL Link",
            newTabLabel: "Apri in una nuova scheda",
            trigger: "Interazione",
            triggerMessage: "Messaggio Toast",
            triggerShowImmediately: "Mostra immediatamente all'ingresso",
            triggerOnClick: "Avvia come minimizzato nella barra inferiore",
            triggerOnAction: "Mostra toast azione con messaggio",
            closable: "Può essere chiuso",
            allowAPI: "Consenti API di Scripting",
            linkPlaceholder: "https://example.com",
            defaultButtonLabel: "Apri Link",
            width: "Larghezza",
            policy: "iFrame Allow",
            policyPlaceholder: "fullscreen",
            errorEmbeddableLink: "Il link non è incorporabile",
            messageNotEmbeddableLink: "Il link non è incorporabile. Può essere aperto solo in una nuova scheda",
            warningEmbeddableLink: "Questo link non può essere incorporato.",
            errorInvalidUrl: 'Inserisci un URL valido (che inizi con "https://")',
            findOutMoreHere: "Scopri di più qui",
            openPickerSelector: "Apri selettore",
            forcedInNewTab: "Forzato in una nuova scheda",
            openApplication: "Apri applicazione",
        },
        advancedOptions: "Opzioni Avanzate",
        speakerMegaphoneProperties: {
            label: "Zona Altoparlante",
            description: "",
            nameLabel: "Nome",
            namePlaceholder: "MiaZonaAltoparlante",
        },
        listenerMegaphoneProperties: {
            label: "Zona Partecipanti",
            description: "",
            nameLabel: "NomeZonaAltoparlante",
            namePlaceholder: "MiaZonaAltoparlante",
        },
        chatEnabled: "Associa un canale di chat dedicato",
        startProperties: {
            label: "Area di Partenza",
            description: "Dove le persone possono iniziare nella mappa.",
            nameLabel: "Nome di Partenza",
            namePlaceholder: "Entra1",
            type: "Tipo di posizione di partenza",
            defaultMenuItem: "Usa per impostazione predefinita",
            hashMenuItem: "Usa se l'URL contiene #[nome area]",
        },
        exitProperties: {
            label: "Area di Uscita",
            description: "Dove le persone possono uscire dalla mappa verso un'altra.",
            exitMap: "Mappa di Uscita",
            exitMapStartAreaName: "Nome area di partenza",
            defaultStartArea: "Area di partenza predefinita",
        },
        youtubeProperties: {
            label: "Apri Video Youtube",
            description: "Apri video Youtube all'interno di WorkAdventure o come nuova scheda.",
            error: "Inserisci un URL Youtube valido",
            disabled: "Integrazione Youtube disabilitata.",
        },
        googleDocsProperties: {
            label: "Apri Google Docs",
            description: "Apri Google Docs all'interno di WorkAdventure o come nuova scheda.",
            error: "Inserisci un URL Google Docs valido",
            disabled: "Integrazione Google Docs disabilitata.",
        },
        klaxoonProperties: {
            label: "Apri Klaxoon",
            description: "Apri Klaxoon all'interno di WorkAdventure o come nuova scheda.",
            error: "Inserisci un URL Klaxoon valido",
            disabled: "Integrazione Klaxoon disabilitata.",
        },
        googleSheetsProperties: {
            label: "Apri Google Sheets",
            description: "Apri Google Sheets all'interno di WorkAdventure o come nuova scheda.",
            error: "Inserisci un URL Google Sheets valido",
            disabled: "Integrazione Google Sheets disabilitata.",
        },
        googleSlidesProperties: {
            label: "Apri Google Slides",
            description: "Apri Google Slides all'interno di WorkAdventure o come nuova scheda.",
            error: "Inserisci un URL Google Slides valido",
            disabled: "Integrazione Google Slides disabilitata.",
        },
        eraserProperties: {
            label: "Gomma",
            description: "Cancella tutti i disegni sulla mappa.",
            defaultButtonLabel: "Cancella",
            error: "Inserisci un URL Gomma valido",
            disabled: "Integrazione Gomma disabilitata.",
        },
        googleDriveProperties: {
            label: "Apri Google Drive",
            description: "Apri Google Drive all'interno di WorkAdventure o come nuova scheda.",
            error: "Inserisci un URL Google Drive valido",
            disabled: "Integrazione Google Drive disabilitata.",
        },
        restrictedRightsProperties: {
            label: "Aggiungi diritti",
            rightTitle: "Diritti di accesso / modifica per tag utente",
            rightDescription:
                "I diritti definiscono chi può interagire con l'area. Se lo lasci vuoto, tutti possono usarlo. Se lo imposti, solo gli utenti che hanno almeno uno di questi 'tag' possono usarlo.",
            rightWriteTitle: "Diritti di modifica",
            rightWriteDescription:
                "I diritti di modifica definiscono chi può modificare l'area. Gli utenti che corrispondono a uno di questi tag possono creare, aggiornare o eliminare un oggetto nell'area.",
            rightReadTitle: "Diritti di accesso",
            rightReadDescription:
                "I diritti di accesso definiscono chi può interagire con l'area. Gli utenti che corrispondono a uno di questi tag possono entrare nell'area e utilizzare gli oggetti all'interno dell'area.",
        },
        personalAreaConfiguration: {
            label: "Area personale",
            description:
                "Gli utenti possono rivendicare aree personali come loro spazio. Come amministratore, puoi impostare/revocare la proprietà di un'area",
            accessClaimMode: "Modalità di rivendicazione accesso",
            dynamicAccessClaimMode: "Dinamico",
            staticAccessClaimMode: "Statico",
            dynamicAccessDescription: "Chiunque con i tag utente appropriati può rivendicare la proprietà della zona.",
            staticAccessDescription: "Definisci manualmente il proprietario della zona.",
            allowedTags: "Tag utente consentiti",
            allowedUser: "Utente consentito",
            owner: "Proprietario",
            revokeAccess: "Revoca accesso",
        },
        excalidrawProperties: {
            label: "Apri Excalidraw",
            description:
                "Una lavagna virtuale open source in stile disegnato a mano. Collaborativa e crittografata end-to-end.",
            error: "Inserisci un URL Excalidraw valido",
            disabled: "Integrazione Excalidraw disabilitata.",
        },
        cardsProperties: {
            label: "Apri Cards",
            description:
                "La soluzione più rapida e semplice per condividere la tua conoscenza in pochissimo tempo, online, su MS Teams e su mobile.",
            error: "Inserisci un URL Cards valido",
            disabled: "Integrazione Cards disabilitata.",
        },
        matrixProperties: {
            label: "Collega stanza Matrix",
            description: "Collega stanza Matrix alla tua area",
            openAutomaticallyChatLabel: "Apri automaticamente la chat",
            roomNameLabel: "Nome visualizzato della stanza",
            roomNameLabelPlaceholder: "La mia stanza",
            defaultChatRoomAreaName: "Area Stanza",
        },
    },
    areaEditor: {
        editInstructions: "Clicca su un'area per modificarne le proprietà.",
        nameLabel: "Nome",
        nameLabelPlaceholder: "LaMiaArea",
        areaDescription: "Descrizione",
        areaDescriptionPlaceholder: "La mia area è un...",
        areaSerchable: "Ricercabile in modalità esplorazione",
        addDescriptionField: "Aggiungi campo descrizione",
        actionPopupOnPersonalAreaWithEntities: {
            title: "Azione richiesta",
            description: "Quest'area personale contiene uno o più oggetti. Cosa vuoi fare con essi?",
            buttons: {
                keep: "Mantieni",
                remove: "Rimuovi",
                cancel: "Annulla",
            },
        },
    },
    areaEditorInstructions: {
        title: "Come funziona?",
        description: "Disegna una zona sulla mappa per crearne una nuova.",
    },
    entityEditor: {
        header: {
            title: "Aggiungi oggetto alla tua mappa",
            description: "Cerca, carica o seleziona un oggetto esistente e aggiungilo alla mappa.",
        },
        title: "Posiziona il tuo oggetto",
        editing: "Modifica: {name}",
        itemPicker: {
            searchPlaceholder: "Cerca",
            backToSelectObject: "Torna a selezionare oggetto",
        },
        trashTool: {
            delete: "Clicca sull'oggetto per eliminarlo!",
        },
        deleteButton: "Elimina",
        testInteractionButton: "Testa Interazione",
        buttonLabel: "Etichetta Pulsante",
        editInstructions: "Clicca su un'entità per modificarne le proprietà.",
        selectObject: "Clicca su un oggetto per selezionarlo",
        objectName: "Nome Oggetto",
        objectNamePlaceholder: "IlMioOggetto",
        objectDescription: "Descrizione Oggetto",
        objectDescriptionPlaceholder: "Il mio oggetto è un...",
        objectSearchable: "Ricercabile in modalità esplorazione",
        addDescriptionField: "Aggiungi campo descrizione",
        uploadEntity: {
            title: "Aggiungi la tua immagine",
            description: "Trascina e rilascia o scegli la tua immagine per aggiungerla alla mappa",
            dragDrop: "Trascina e Rilascia o",
            chooseFile: "Scegli file",
            errorOnFileFormat: "Formato file non supportato",
            errorOnFileNumber: "Il rilascio di più file non è supportato",
        },
        images: "Immagine{{s}}",
        noImage: "Nessuna immagine",
        customEntityEditorForm: {
            imageName: "Nome immagine",
            tags: "Tag",
            writeTag: "Scrivi tag...",
            objectType: "Tipo di oggetto",
            floatingObject: "Oggetto fluttuante",
            floatingObjectDescription:
                "Un oggetto fluttuante può essere posizionato liberamente sulla mappa. Altrimenti, sarà allineato sulla griglia della mappa.",
            depth: "Profondità",
            groundLevel: "Livello del suolo",
            custom: "Personalizzato",
            standing: "In piedi",
            collision: "Collisione",
            wokaAbove: "Woka sopra",
            wokaBelow: "Woka sotto",
        },
        buttons: {
            editEntity: "Modifica",
            back: "Indietro",
            cancel: "Annulla",
            delete: "Elimina",
            save: "Salva",
            upload: "Carica",
        },
    },
    settings: {
        loading: "Caricamento",
        megaphone: {
            title: "Megafono",
            description:
                "Il megafono è uno strumento che ti permette di trasmettere un flusso video/audio a tutti i giocatori nella stanza/mondo.",
            inputs: {
                spaceName: "Nome spazio",
                spaceNameHelper:
                    "Se vuoi trasmettere un flusso a tutti gli utenti che sono in stanze diverse ma nello stesso mondo, devi impostare lo stesso NomeSpazio per tutte le impostazioni del megafono in ogni stanza e impostare l'ambito su 'Mondo'.",
                scope: "Ambito",
                world: "Mondo",
                room: "Stanza",
                rights: "Diritti",
                rightsHelper:
                    "I diritti definiscono chi può usare il megafono. Se lo lasci vuoto, chiunque può usarlo. Se lo imposti, solo gli utenti che hanno uno di questi 'tag' possono usarlo.",
                error: {
                    title: "Per favore inserisci un titolo",
                    save: {
                        success: "Impostazioni del megafono salvate",
                        fail: "Errore durante il salvataggio delle impostazioni del megafono",
                    },
                },
            },
        },
        room: {
            title: "Impostazioni della stanza",
            description: "Configura la tua stanza",
            inputs: {
                name: "Nome stanza",
                description: "Descrizione stanza",
                tags: "Tag",
                copyright: "Licenza stanza",
                thumbnail: "Miniatura stanza",
            },
            helps: {
                description:
                    "Una descrizione della mappa. Può essere utilizzata nei social network quando si condivide un link alla mappa.",
                tags: "Un elenco di tag. Può essere utilizzato per concedere l'accesso alla mappa.",
                thumbnail:
                    "URL di un'immagine in miniatura. Questa immagine sarà utilizzata nei social network quando si condivide un link alla mappa.",
                copyright:
                    "Avviso di copyright per questa mappa. Può essere un link a una licenza. Parti di questa mappa come tileset o immagini possono avere il proprio copyright.",
            },
            actions: {
                save: "Salva",
                confirm: "Conferma",
                success: "Impostazioni della stanza salvate",
                error: "Errore durante il salvataggio delle impostazioni della stanza",
            },
            confirmSave:
                "Conferma che vuoi salvare le modifiche alla mappa. Questo creerà una nuova versione della mappa, disconnetterà tutti i giocatori e ricaricherà la mappa per tutti i giocatori.",
        },
    },
    explorer: {
        title: "Esplora la stanza",
        description:
            "Permetti di esplorare la stanza. Potrai muoverti nella stanza e interagire con gli oggetti. Sono disponibili 2 modalità: 'Esplorazione' e 'Ricerca'. La modalità 'Ricerca' ti proporrà di cercare o filtrare entità e aree nella stanza. La modalità 'Esplorazione' ti permetterà di muoverti liberamente nella stanza.",
        noEntitiesFound: "Nessuna entità trovata nella stanza 🙅‍♂️",
        entitiesFound: "oggetto{{s}} trovato",
        noAreasFound: "Nessuna area trovata nella stanza 🙅‍♀️",
        areasFound: "area{{s}} trovata",
        noDescriptionFound: "Nessuna descrizione trovata 🫥",
        details: {
            close: "Chiudi",
            moveToEntity: "Vai all'entità {name}",
            moveToArea: "Vai all'area {name}",
            errorMovingToObject: "L'oggetto non è ancora accessibile 🚫",
        },
    },
    listRoom: {
        isFetching: "Elenco stanze in caricamento... ⤵️",
        noRoomFound: "Nessuna stanza trovata 🙅‍♂️",
        items: "{countEntity} entità / {countArea} aree",
        close: "Chiudi",
        movingToRoom: "Spostamento nella stanza: {roomNameSelected}... A presto... 🫡",
        searchLabel: "Cerca una stanza",
        searchPlaceholder: "Scrivi...",
    },
};

export default mapEditor;
