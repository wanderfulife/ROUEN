// 🏒 ENQUÊTE PATINOIRE
// Enquête de mobilité - Patinoire

export const templateSurveyQuestions = [
    // 📍 Q1 - Origine du déplacement
    {
        id: "Q1",
        text: "Quelle est votre commune de provenance (commune et code postal) ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Rouen", next: "Q1a" },
            { id: 2, text: "Autre commune", next: "Q1_Autre" }
        ]
    },

    // 🏘️ Q1a - Précision quartier/rue à Rouen
    {
        id: "Q1a",
        text: "Précisez votre quartier ou votre rue à Rouen :",
        type: 'freeText',
        next: "Q2"
    },

    // 🏙️ Q1_Autre - Autre commune
    {
        id: "Q1_Autre",
        text: "Préciser le nom de la commune et le code postal :",
        type: 'commune',
        next: "Q2"
    },

    // 🚗 Q2 - Mode de transport utilisé pour se rendre à la patinoire
    {
        id: "Q2",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la patinoire ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Voiture conducteur", next: "Q3" },
            { id: 2, text: "Voiture passager", next: "Q3" },
            { id: 3, text: "Application de covoiturage", next: "Q3" },
            { id: 4, text: "Bus Astuce – ligne 11", next: "end" },
            { id: 5, text: "Navette Bus", next: "end" },
             {id: 6, text: "Navette Fluviale", next: "end"},
            { id: 7, text: "P+R + réseau Astuce", next: "end" },
            { id: 8, text: "Vélo", next: "end" },
            { id: 9, text: "Marche à pied", next: "end" },
            { id: 10, text: "Autre", next: "Q2_Autre" }
        ]
    },

    // 📝 Q2_Autre - Autre mode de transport
    {
        id: "Q2_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Précisez votre mode de transport...",
        next: "end"
    },

    // 👥 Q3 - Occupation du véhicule
    {
        id: "Q3",
        text: "Combien de personnes étaient présentes dans le véhicule au total (vous compris) ?",
        type: 'freeText',
        freeTextPlaceholder: "Nombre de personnes (ex: 2)",
        next: "end"
    }
];
