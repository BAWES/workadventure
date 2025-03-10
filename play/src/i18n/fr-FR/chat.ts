import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const chat: DeepPartial<Translation["chat"]> = {
    intro: "Voici l'historique de votre chat:",
    enter: "Entrez votre message...",
    menu: {
        visitCard: "Carte de visite",
        addFriend: "Ajouter un ami",
    },
    loader: "Chargement...",
    typing: "est en train d'écire...",
    users: "Utilisateurs",
    chat: "Chat",
    userList: {
        disconnected: "Non connecté au monde",
        isHere: "Sur cette map",
        inAnotherMap: "Dans une autre map",
        in: "Dans ",
        teleport: "Se téléporter",
        search: "Il suffit de chercher !",
        walkTo: "Marcher jusqu'à",
        teleporting: "Téléportation ...",
        businessCard: "Carte de visite",
        sendMessage: "Envoyer un message",
    },
    accept: "Accepter",
    decline: "Refuser",
    join: "Rejoindre",
    connecting: "Connexion au serveur ...",
    waitingInit: "Attente de l'initialisation du serveur ...",
    waitingData: "En attentes des informations de l'utilisateur ...",
    searchUser: "Rechercher un utilisateur, une map, etc ...",
    searchChat: "Rechercher un canal, un message, etc ...",
    people: "Personnes",
    rooms: "Salons",
    invitations: "Invitations",
    availableRooms: "Salon(s) disponible(s)",
    proximity: "Bulle de discussion",
    role: {
        admin: "Administrateur",
        member: "Membre",
        visitor: "Visiteur",
    },
    status: {
        online: "En ligne",
        away: "Absent",
        back_in_a_moment: "Revient dans un moment",
        do_not_disturb: "Ne pas déranger",
        busy: "Occupé",
        unavailable: "Non disponible",
        meeting: "En réunion",
        megaphone: "Utilise le mégaphone",
    },
    logIn: "Se connecter",
    signIn: "Inscrivez-vous ou connectez-vous pour profiter de toutes les fonctionnalités du chat !",
    invite: "Inviter",
    roomEmpty: "Cette salle est vide, invitez un collègue ou un ami à vous rejoindre !",
    userOnline: "utilisateur en ligne",
    usersOnline: "utilisateurs en ligne",
    open: "Ouvrir",
    me: "Moi",
    you: "Vous",
    ban: {
        title: "Bannir",
        content: "Bannir l'utilisateur {userName} du monde courant. Cela peut être annulé depuis l'administration.",
        ban: "Bannir cet utilisateur",
    },
    loading: "Chargement",
    loadingUsers: "Chargement des utilisateurs ...",
    load: "Charger",
    rankUp: "Promouvoir",
    rankDown: "Rétrograder",
    reinit: "Ré initialiser",
    enterText: "Écrire un message ...",
    timeLine: {
        title: "Votre historique",
        open: "Ouvrir votre historique de conversation !",
        description: "Historique de vos conversations",
        incoming: "{userName} a rejoint la conversation",
        outcoming: "{userName} a quitté la conversation",
        youLeft: "Vous avez quitté la conversation",
    },
    form: {
        placeholder: "Écrire votre message...",
        typing: " écrit...",
        application: {
            klaxoon: {
                title: "Klaxoon",
                description: "Envoyer un klaxoon dans le chat !",
                error: "L'URL Klaxoon n'est pas valide",
            },
            youtube: {
                title: "Youtube",
                description: "Envoyer une vidéo youtube dans le chat !",
                error: "L'URL Youtube n'est pas valide",
            },
            googleDocs: {
                title: "Google Docs",
                description: "Envoyer un document google docs dans le chat !",
                error: "L'URL Google Docs n'est pas valide",
            },
            googleSlides: {
                title: "Google Slides",
                description: "Envoyer une présentation google slides dans le chat !",
                error: "L'URL Google Slides n'est pas valide",
            },
            googleSheets: {
                title: "Google Sheets",
                description: "Envoyer un tableau google sheets dans le chat !",
                error: "L'URL Google Sheets n'est pas valide",
            },
            eraser: {
                title: "Eraser",
                description: "Envoyer un tableau eraser dans le chat !",
                error: "L'URL Eraser n'est pas valide",
            },
            weblink: {
                error: "L'URL n'est pas valide",
            },
        },
    },
    notification: {
        discussion: "veut discuter avec toi",
        message: "a envoyé un message",
        forum: "sur le forum",
    },
    see: "Voir",
    show: "Voir",
    less: "moins",
    more: "plus",
    sendBack: "Renvoyer",
    delete: "Supprimer",
    messageDeleted: "Message supprimé",
    emoji: {
        icon: "Emojis",
        search: "Chercher un emoji...",
        categories: {
            recents: "Emojis récents",
            smileys: "Smileys & emotions",
            people: "Personne & corps",
            animals: "Animaux & nature",
            food: "Nourriture & boissons",
            activities: "Activités",
            travel: "Voyage & endroits",
            objects: "Objets",
            symbols: "Symbols",
            flags: "Drapeaux",
            custom: "Personnalisés",
        },
        notFound: "Aucun emoji trouvé",
    },
    said: "a dit :",
    reply: "Répondre",
    react: "Réagir",
    copy: "Copier",
    copied: "Copié !",
    file: {
        fileContentNoEmbed: "Le contenue n'est pas lisible sur le navigateur. Vous pouvez télécharger le document",
        download: "Téléchargement",
        openCoWebsite: "Ouvrir en co-website",
        copy: "Copier le lien",
        tooBig: "{fileName} est trop volumineux {maxFileSize}.",
        notLogged: "Vous devez être connecté pour télécharger un fichier.",
    },
    needRefresh: "Votre connexion a expiré, vous devez actualiser la page pour vous reconnecter au chat.",
    refresh: "Rafraichir",
    upgrade: "Passez premium",
    upgradeToSeeMore: "Passez premium pour voir plus de messages",
    disabled: "Cette fonctionnalité est désactivée.",
    disabledByAdmin: "Cette fonctionnalité est désactivée par l'administrateur.",
    anAdmin: "un administrateur",
    messageDeletedByYou: "Vous avez supprimé ce message",
    messageEdited: "Modifié",
    messageEditedError: "Impossible de modifier le message. Veuillez réessayer.",
    waiting: "En attente",
    nothingToDisplay: "Rien à afficher",
    showMore: "En afficher {number} de plus",
    showLess: "En afficher moins",
    addRoomToFolderError: "Impossible d'ajouter la room au dossier",
    createRoom: {
        title: "Créer un nouveau salon",
        name: "Nom",
        visibility: {
            label: "Visibilité",
            private: "Privé",
            privateDescription: "Seules les personnes invitées pourront trouver et rejoindre ce salon.",
            public: "Public",
            publicDescription: "Quiconque pourra trouver et rejoindre ce salon.",
            restricted: "Membre du dossier",
            restrictedDescription: "Visible seulement pour les membres du dossier",
        },
        e2eEncryption: {
            label: "Activer le chiffrement de bout en bout",
            description: "Vous ne pourrez pas le désactiver plus tard.",
        },
        users: "Utilisateurs",
        historyVisibility: {
            label: "Qui peut lire l'historique",
            world_readable: "N'importe qui",
            joined: "Seulement les membres (depuis leur arrivée)",
            invited: "Seulement les membres (depuis leur invitation)",
        },
        buttons: {
            create: "Créer",
            cancel: "Annuler",
        },
        error: "Erreur lors de la création du salon",
        loadingCreation: "Salon en cours de création",
        creationSuccessNotification: "Salon créé",
    },
    createFolder: {
        title: "Créer un nouveau dossier",
        name: "Nom",
        description: {
            label: "Description",
            placeholder: "Description",
        },
        visibility: {
            label: "Visibilité",
            private: "Privé",
            privateDescription: "Seules les personnes invitées pourront trouver et rejoindre ce salon.",
            public: "Public",
            publicDescription: "Quiconque pourra trouver et rejoindre ce salon.",
            restricted: "Membre du dossier",
            restrictedDescription: "Visible seulement pour les membres du dossier",
        },
        e2eEncryption: {
            label: "Activer le chiffrement de bout en bout",
            description: "Vous ne pourrez pas le désactiver plus tard.",
        },
        users: "Utilisateurs",
        historyVisibility: {
            label: "Qui peut lire l'historique",
            world_readable: "N'importe qui",
            joined: "Seulement les membres (depuis leur arrivée)",
            invited: "Seulement les membres (depuis leur invitation)",
        },
        buttons: {
            create: "Créer",
            cancel: "Annuler",
        },
        error: "Erreur lors de la création du salon",
        loadingCreation: "Salon en cours de création",
        creationSuccessNotification: "Salon créé",
    },
    manageRoomUsers: {
        roomOption: "Participants",
        error: "Impossible d'envoyer les invitations",
        title: "Inviter des participants",
        invitations: "Invitations",
        participants: "Participants",
        join: "Présent",
        invite: "Invité",
        ban: "Banni",
        kick: "Expulsé",
        leave: "Parti",
        buttons: {
            sendInvitations: "Envoyer les invitations",
            cancel: "Annuler",
        },
        sendInvitationsSuccessNotification: "Invitation(s) envoyée(s)",
    },
    roomMenu: {
        leaveRoom: {
            label: "Quitter le salon",
            notification: "Vous avez quitté le salon",
        },
        muteRoom: "Couper les notification",
        unmuteRoom: "Activer les notifications",
    },
    e2ee: {
        encryptionNotConfigured: "Chiffrement non configuré",
        createRecoveryKey: {
            title: "Création d'une clé de récupération",
            description:
                "Afin d'utiliser le cryptage de bout en bout dans le chat, vous devez créer une clé de récupération. Veuillez entrer votre phrase de sécurité ci-dessous, une clé de récupération sera créée.",
            privateKeyDescription:
                "Il s'agit de votre clé privée, conservez-la quelque part pour retrouver les discussions cryptées après la déconnexion.",
            error: "Something went wrong on generateRecoveryKeyFromPassphrase",
            buttons: {
                generate: "Générer",
                continue: "Continuer",
                cancel: "Annuler",
            },
        },
        interactiveAuth: {
            title: "Chiffrement de bout en bout",
            description:
                "Pour des raisons de sécurité, une clé doit être téléchargée sur notre serveur pour vérifier votre identité. En confirmant votre identité, vous enregistrerez cette clé, ce qui vous permettra de lire les messages chiffrés provenant de WA et d'autres clients.",
            instruction: "Veillez à confirmer la connexion SSO avant de cliquer sur le bouton Terminer.",
            buttons: {
                cancel: "Annuler",
                continueSSO: "Continuer avec le SSO",
                finish: "Terminer",
            },
        },
        accessSecretStorage: {
            title: "Vérification de la session du chat",
            description:
                "Afin de vérifier votre session et récupérer vos messages cryptés, vous devez saisir votre clé de récupération ou votre phrase de sécurité.",
            passphrase: "Phrase de sécurité",
            recoveryKey: "Clé de récupération",
            placeholder: "Entrer votre",
            buttons: {
                cancel: "Annuler",
                usePassphrase: "Utiliser la phrase de sécurité",
                useRecoveryKey: "Utiliser la clé de récupération",
                confirm: "Confirmer",
            },
        },
    },
    connectionError: "Chat indisponible",
    requiresLoginForChatModal: {
        title: "Identifiez-vous pour utiliser le chat !",
        content_1: "Pour profiter pleinement de cette fonctionnalité du chat, vous devez être connecté.",
        content_2:
            "La connexion vous donne accès à toutes les fonctionnalités du chat et vous permet de continuer sans interruption.",
        content_3: "Veuillez vous connecter pour poursuivre l’expérience.",
    },
    requiresLoginForChat: "Identifiez-vous pour accéder aux messages du chat",
    featureComingSoon: "Prochainement disponible !",
};

export default chat;
