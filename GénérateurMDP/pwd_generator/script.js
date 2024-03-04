/* récupération des éléments avec lesquels on va travailler, placer dans des constantes car ils ne changeront jamais */
const btn_gen = document.getElementById('btn_generer'); // document permet de travailler avec la page HTML, la fonction appelée ensuite parle d'elle même
const btn_copy = document.getElementById('btn_copier');
const zone_txt = document.getElementById('zoneText');
const slider_value = document.getElementById('slider_value');
const slider = document.getElementById('slider');

// Code permettant de donner la valeur du slider en temps réel 
slider_value.textContent = slider.value
slider.addEventListener("input", (event) => {
    slider_value.textContent = event.target.value
})

// Fonction pour générer un mot de passe aléatoire fort
function generate()
{
    // caractères possibles dans le mot de passe 
    // Notez qu'avec certaines fonctions, il est possible de générer ces listes sans tout taper, ici la méthode est simple et permet d'avoir une vue d'ensemble mais pas la plus rapide
    const min = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const maj = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const spe = ['$', '@', '£', '!', '?', '-', '_', '#', '&', '='];
    // On créé un tableau qui contient tout
    const all = min.concat(maj, num, spe);
    // on utilise DO / WHILE, on génère un MDP et si celui ci n'est pas fort on recommence jusqu'à ce qu'il le soit
    do 
    {
        // Declaration de mot de passe initialisé à vide
        var mdp = "";
        //on va choisir des caractères selon la taille du slider
        for (let i = 0; i < slider_value.textContent; i++)
        {
            mdp += all[Math.floor(Math.random() * all.length)];
        }
    } while (!pwd_strenght(mdp));
    //on affiche le mot de passe dans la zone de texte
    zone_txt.value = mdp;

}

function copy()
{
    /* selectionne le contenu de la zone de texte */
    zone_txt.select();
    /* fonction permettant de copier */
    document.execCommand("copy");
}

function pwd_strenght(pwd)
{
    // Jusqu'à preuve du contraire, notre MDP est considéré comme fort
    var res = true;
    // verifie s'il contient une MAJ puis min puis digit puis spécial
    if (!/[A-Z]/.test(pwd)) { res = false; }
    if (!/[a-z]/.test(pwd)) { res = false; }
    if (!/\d/.test(pwd)) { res = false; }
    if (!/[$@£!?-_#&=]/.test(pwd)) { res = false; }
    return res;
}
