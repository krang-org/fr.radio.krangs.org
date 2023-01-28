window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "shuffle_on": true,
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Nguyen Et Faure",
      "url": "./commercials/fr-FR/s-curit-et-enqu-tes/nguyen-et-faure/1673508772331/commercial.mp3",
      "artist": "S Curit Et Enqu Tes",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Dumont Et Petit",
      "url": "./commercials/fr-FR/automobile/dumont-et-petit/1673508267615/commercial.mp3",
      "artist": "Automobile",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Caron Et Boyer",
      "url": "./commercials/fr-FR/philanthropie/caron-et-boyer/1673508968048/commercial.mp3",
      "artist": "Philanthropie",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Simon Et R My",
      "url": "./commercials/fr-FR/pharmaceutique/simon-et-r-my/1673508054186/commercial.mp3",
      "artist": "Pharmaceutique",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Dupont Et Jacquet",
      "url": "./commercials/fr-FR/architecture-et-planification/dupont-et-jacquet/1673509987428/commercial.mp3",
      "artist": "Architecture Et Planification",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Bertrand Sem",
      "url": "./commercials/fr-FR/m-decine-alternative/bertrand-sem/1673508931454/commercial.mp3",
      "artist": "M Decine Alternative",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Cousin Et Marchand",
      "url": "./commercials/fr-FR/biens-de-consommation/cousin-et-marchand/1673508568363/commercial.mp3",
      "artist": "Biens De Consommation",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Bernard Sa",
      "url": "./commercials/fr-FR/textiles/bernard-sa/1673508369823/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Roche Gie",
      "url": "./commercials/fr-FR/services-de-m-dias/roche-gie/1673508505960/commercial.mp3",
      "artist": "Services De M Dias",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Marie Et Moulin",
      "url": "./commercials/fr-FR/sports/marie-et-moulin/1673508092618/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Renard Et Gauthier",
      "url": "./commercials/fr-FR/pharmacie/renard-et-gauthier/1673509451151/commercial.mp3",
      "artist": "Pharmacie",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Barbier Et Roux",
      "url": "./commercials/fr-FR/vins-et-spiritueux/barbier-et-roux/1673509072047/commercial.mp3",
      "artist": "Vins Et Spiritueux",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Lemaire Et Baron",
      "url": "./commercials/fr-FR/biens-de-consommation/lemaire-et-baron/1673509382952/commercial.mp3",
      "artist": "Biens De Consommation",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Gu Rin Eurl",
      "url": "./commercials/fr-FR/sans-fil/gu-rin-eurl/1673509491341/commercial.mp3",
      "artist": "Sans Fil",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Breton Et Masson",
      "url": "./commercials/fr-FR/mat-riel-informatique/breton-et-masson/1673509555619/commercial.mp3",
      "artist": "Mat Riel Informatique",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Dupuy Et Bonnet",
      "url": "./commercials/fr-FR/institutions-religieuses/dupuy-et-bonnet/1673508560346/commercial.mp3",
      "artist": "Institutions Religieuses",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Jean Sa",
      "url": "./commercials/fr-FR/articles-de-sport/jean-sa/1673509044253/commercial.mp3",
      "artist": "Articles De Sport",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Lop Z Sem",
      "url": "./commercials/fr-FR/services-publics/lop-z-sem/1673509781505/commercial.mp3",
      "artist": "Services Publics",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Fontaine Et Schneider",
      "url": "./commercials/fr-FR/organisation-politique/fontaine-et-schneider/1673508298765/commercial.mp3",
      "artist": "Organisation Politique",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Pons Et Barre",
      "url": "./commercials/fr-FR/immobilier-commercial/pons-et-barre/1673509929533/commercial.mp3",
      "artist": "Immobilier Commercial",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Charpentier Ei",
      "url": "./commercials/fr-FR/soins-de-sant-mentale/charpentier-ei/1673509719516/commercial.mp3",
      "artist": "Soins De Sant Mentale",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Rodriguez Et Chevalier",
      "url": "./commercials/fr-FR/restaurants/rodriguez-et-chevalier/1673510038939/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Dvnis Sarl",
      "url": "./commercials/fr-FR/relations-publiques-et-communications/dvnis-sarl/1673509890851/commercial.mp3",
      "artist": "Relations Publiques Et Communications",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Lambert Sas",
      "url": "./commercials/fr-FR/militaire/lambert-sas/1673508848891/commercial.mp3",
      "artist": "Militaire",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Blanchard Et Arnaud",
      "url": "./commercials/fr-FR/production-alimentaire/blanchard-et-arnaud/1673508357511/commercial.mp3",
      "artist": "Production Alimentaire",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Rodriguez Sa",
      "url": "./commercials/fr-FR/m-dias-en-ligne/rodriguez-sa/1673508450823/commercial.mp3",
      "artist": "M Dias En Ligne",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Charpentier Eurl",
      "url": "./commercials/fr-FR/services-de-l-ducation/charpentier-eurl/1673508023002/commercial.mp3",
      "artist": "Services De L Ducation",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Renard Gie",
      "url": "./commercials/fr-FR/h-tellerie/renard-gie/1673509643998/commercial.mp3",
      "artist": "H Tellerie",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Roux Et Robin",
      "url": "./commercials/fr-FR/soins-de-sant-mentale/roux-et-robin/1673508516614/commercial.mp3",
      "artist": "Soins De Sant Mentale",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Gaillard Eurl",
      "url": "./commercials/fr-FR/recherche-de-march/gaillard-eurl/1673509187821/commercial.mp3",
      "artist": "Recherche De March ",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Rodriguez Et Rey",
      "url": "./commercials/fr-FR/consulting-en-gestion/rodriguez-et-rey/1673509754205/commercial.mp3",
      "artist": "Consulting En Gestion",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Moulin Et No L",
      "url": "./commercials/fr-FR/services-de-m-dias/moulin-et-no-l/1673508687499/commercial.mp3",
      "artist": "Services De M Dias",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Caron Sem",
      "url": "./commercials/fr-FR/articles-de-sport/caron-sem/1673509316145/commercial.mp3",
      "artist": "Articles De Sport",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Henry Et Perrot",
      "url": "./commercials/fr-FR/gestion-d-investissement/henry-et-perrot/1673509710783/commercial.mp3",
      "artist": "Gestion D Investissement",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Roux Et Brun",
      "url": "./commercials/fr-FR/services-de-t-l-communications/roux-et-brun/1673509570369/commercial.mp3",
      "artist": "Services De T L Communications",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Masson Et Gonzalez",
      "url": "./commercials/fr-FR/logistique-et-cha-ne-d-approvisionnement/masson-et-gonzalez/1673508999353/commercial.mp3",
      "artist": "Logistique Et Cha Ne D Approvisionnement",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Vidal Et Fabre",
      "url": "./commercials/fr-FR/p-trole-et-nergie/vidal-et-fabre/1673508424151/commercial.mp3",
      "artist": "P Trole Et Nergie",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Leclerc Et Poirier",
      "url": "./commercials/fr-FR/philanthropie/leclerc-et-poirier/1673508382547/commercial.mp3",
      "artist": "Philanthropie",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Leclerc Et Petit",
      "url": "./commercials/fr-FR/jeux-vid-o/leclerc-et-petit/1673509703158/commercial.mp3",
      "artist": "Jeux Vid O",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Lef Vre Sas",
      "url": "./commercials/fr-FR/cosm-tique/lef-vre-sas/1673509268094/commercial.mp3",
      "artist": "Cosm Tique",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "No L Sarl",
      "url": "./commercials/fr-FR/d-veloppement-de-programmes/no-l-sarl/1673508259143/commercial.mp3",
      "artist": "D Veloppement De Programmes",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Moulin Sas",
      "url": "./commercials/fr-FR/banque/moulin-sas/1673508674685/commercial.mp3",
      "artist": "Banque",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Roussel Sem",
      "url": "./commercials/fr-FR/p-che/roussel-sem/1673509205752/commercial.mp3",
      "artist": "P Che",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Perrot Et Benoit",
      "url": "./commercials/fr-FR/exploitation-mini-re-et-m-tallurgie/perrot-et-benoit/1673508629780/commercial.mp3",
      "artist": "Exploitation Mini Re Et M Tallurgie",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Boyer Et Blanc",
      "url": "./commercials/fr-FR/g-nie-civil/boyer-et-blanc/1673508808119/commercial.mp3",
      "artist": "G Nie Civil",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Marchal Sas",
      "url": "./commercials/fr-FR/services-de-l-a-rospatiale/marchal-sas/1673509089947/commercial.mp3",
      "artist": "Services De L A Rospatiale",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "M Nard Sas",
      "url": "./commercials/fr-FR/e-learning/m-nard-sas/1673509534077/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Leclercq Eurl",
      "url": "./commercials/fr-FR/sports/leclercq-eurl/1673510153520/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Giraud Et Maillard",
      "url": "./commercials/fr-FR/services-de-m-dias/giraud-et-maillard/1673509874640/commercial.mp3",
      "artist": "Services De M Dias",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Rey Et Guillaume",
      "url": "./commercials/fr-FR/logiciel-informatique/rey-et-guillaume/1673509431657/commercial.mp3",
      "artist": "Logiciel Informatique",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Hubert Gie",
      "url": "./commercials/fr-FR/pharmaceutique/hubert-gie/1673508163994/commercial.mp3",
      "artist": "Pharmaceutique",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Philippe Sas",
      "url": "./commercials/fr-FR/d-tail/philippe-sas/1673508334157/commercial.mp3",
      "artist": "D Tail",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Le Gall Et Lop Z",
      "url": "./commercials/fr-FR/services-de-l-internet/le-gall-et-lop-z/1673509651918/commercial.mp3",
      "artist": "Services De L Internet",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Carre Et Garnier",
      "url": "./commercials/fr-FR/services-de-la-d-fense-nationale/carre-et-garnier/1673509241662/commercial.mp3",
      "artist": "Services De La D Fense Nationale",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Poirier Sas",
      "url": "./commercials/fr-FR/d-veloppement-de-programmes/poirier-sas/1673508782026/commercial.mp3",
      "artist": "D Veloppement De Programmes",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Leroux Et Michel",
      "url": "./commercials/fr-FR/production-m-diatique/leroux-et-michel/1673508157230/commercial.mp3",
      "artist": "Production M Diatique",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Caron Et Roy",
      "url": "./commercials/fr-FR/practique-juridique/caron-et-roy/1673509739011/commercial.mp3",
      "artist": "Practique Juridique",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Julien Sem",
      "url": "./commercials/fr-FR/edition/julien-sem/1673508142939/commercial.mp3",
      "artist": "Edition",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Mercier Sa",
      "url": "./commercials/fr-FR/services-aux-consommateurs/mercier-sa/1673510050607/commercial.mp3",
      "artist": "Services Aux Consommateurs",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Barbier Et Lemaire",
      "url": "./commercials/fr-FR/m-dias-de-diffusion/barbier-et-lemaire/1673509547915/commercial.mp3",
      "artist": "M Dias De Diffusion",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Gonzalez Et Paul",
      "url": "./commercials/fr-FR/automobile/gonzalez-et-paul/1673508536840/commercial.mp3",
      "artist": "Automobile",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "R My Sarl",
      "url": "./commercials/fr-FR/g-nie-civil/r-my-sarl/1673509659214/commercial.mp3",
      "artist": "G Nie Civil",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Carre Eurl",
      "url": "./commercials/fr-FR/d-fense-et-espace/carre-eurl/1673508586769/commercial.mp3",
      "artist": "D Fense Et Espace",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Moulin Gie",
      "url": "./commercials/fr-FR/impression/moulin-gie/1673510170583/commercial.mp3",
      "artist": "Impression",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Dumas Sarl",
      "url": "./commercials/fr-FR/animation/dumas-sarl/1673508285383/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Moulin Ei",
      "url": "./commercials/fr-FR/journaux/moulin-ei/1673508666241/commercial.mp3",
      "artist": "Journaux",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Vincent Gie",
      "url": "./commercials/fr-FR/soins-de-sant-mentale/vincent-gie/1673508209020/commercial.mp3",
      "artist": "Soins De Sant Mentale",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Le Gall Eurl",
      "url": "./commercials/fr-FR/m-dias-de-diffusion/le-gall-eurl/1673509796475/commercial.mp3",
      "artist": "M Dias De Diffusion",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Baron Et Petit",
      "url": "./commercials/fr-FR/recrutement-et-placement/baron-et-petit/1673508328067/commercial.mp3",
      "artist": "Recrutement Et Placement",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Collet Et Richard",
      "url": "./commercials/fr-FR/services-de-sant/collet-et-richard/1673510081660/commercial.mp3",
      "artist": "Services De Sant ",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Rousseau Sa",
      "url": "./commercials/fr-FR/impression/rousseau-sa/1673508439300/commercial.mp3",
      "artist": "Impression",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Fabre Sa",
      "url": "./commercials/fr-FR/gros/fabre-sa/1673508462719/commercial.mp3",
      "artist": "Gros",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Barre Sem",
      "url": "./commercials/fr-FR/services-de-l-a-rospatiale/barre-sem/1673509037444/commercial.mp3",
      "artist": "Services De L A Rospatiale",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Picard Et Meyer",
      "url": "./commercials/fr-FR/textiles/picard-et-meyer/1673509540575/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Francois Et Vasseur",
      "url": "./commercials/fr-FR/comptabilit/francois-et-vasseur/1673508240321/commercial.mp3",
      "artist": "Comptabilit ",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Boyer Et Breton",
      "url": "./commercials/fr-FR/elevage/boyer-et-breton/1673509730483/commercial.mp3",
      "artist": "Elevage",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "No L Sas",
      "url": "./commercials/fr-FR/juges/no-l-sas/1673509221205/commercial.mp3",
      "artist": "Juges",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Barre Scop",
      "url": "./commercials/fr-FR/aviation-et-a-ronautique/barre-scop/1673508493285/commercial.mp3",
      "artist": "Aviation Et A Ronautique",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Cl Ment Et Paris",
      "url": "./commercials/fr-FR/recrutement-et-placement/cl-ment-et-paris/1673508119048/commercial.mp3",
      "artist": "Recrutement Et Placement",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Picard Ei",
      "url": "./commercials/fr-FR/divertissement/picard-ei/1673508499337/commercial.mp3",
      "artist": "Divertissement",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "M Nard Sas",
      "url": "./commercials/fr-FR/nanotechnologie/m-nard-sas/1673508901161/commercial.mp3",
      "artist": "Nanotechnologie",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Barre Ei",
      "url": "./commercials/fr-FR/p-che/barre-ei/1673508063060/commercial.mp3",
      "artist": "P Che",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Charles Et Bertrand",
      "url": "./commercials/fr-FR/services-informatiques/charles-et-bertrand/1673509161834/commercial.mp3",
      "artist": "Services Informatiques",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Duval Ei",
      "url": "./commercials/fr-FR/articles-de-sport/duval-ei/1673509808707/commercial.mp3",
      "artist": "Articles De Sport",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Gonzalez Et M Unier",
      "url": "./commercials/fr-FR/gros/gonzalez-et-m-unier/1673508197083/commercial.mp3",
      "artist": "Gros",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Maillard Et Picard",
      "url": "./commercials/fr-FR/maritime/maillard-et-picard/1673508470399/commercial.mp3",
      "artist": "Maritime",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Perrot Sem",
      "url": "./commercials/fr-FR/r-seaux-informatiques/perrot-sem/1673509564397/commercial.mp3",
      "artist": "R Seaux Informatiques",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Breton Et Richard",
      "url": "./commercials/fr-FR/practique-juridique/breton-et-richard/1673509684978/commercial.mp3",
      "artist": "Practique Juridique",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Garnier Et Renard",
      "url": "./commercials/fr-FR/jeux-vid-o/garnier-et-renard/1673509258398/commercial.mp3",
      "artist": "Jeux Vid O",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Guillaume Et Martin",
      "url": "./commercials/fr-FR/maritime/guillaume-et-martin/1673508414374/commercial.mp3",
      "artist": "Maritime",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Dupuy Eurl",
      "url": "./commercials/fr-FR/recrutement-et-placement/dupuy-eurl/1673509058052/commercial.mp3",
      "artist": "Recrutement Et Placement",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Vincent Et Barbier",
      "url": "./commercials/fr-FR/t-l-communications/vincent-et-barbier/1673509635897/commercial.mp3",
      "artist": "T L Communications",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Moreau Et Henry",
      "url": "./commercials/fr-FR/services-de-l-ducation/moreau-et-henry/1673508855785/commercial.mp3",
      "artist": "Services De L Ducation",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Dumont Et Leclerc",
      "url": "./commercials/fr-FR/g-nie-civil/dumont-et-leclerc/1673510073389/commercial.mp3",
      "artist": "G Nie Civil",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Barre Et Giraud",
      "url": "./commercials/fr-FR/produits-de-papier-et-de-for-t/barre-et-giraud/1673509746004/commercial.mp3",
      "artist": "Produits De Papier Et De For T",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Dumont Sa",
      "url": "./commercials/fr-FR/installations-et-services-de-loisirs/dumont-sa/1673508737372/commercial.mp3",
      "artist": "Installations Et Services De Loisirs",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Olivier Et Richard",
      "url": "./commercials/fr-FR/traduction-et-localisation/olivier-et-richard/1673508341906/commercial.mp3",
      "artist": "Traduction Et Localisation",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Jean Et Da Silva",
      "url": "./commercials/fr-FR/animation/jean-et-da-silva/1673509007096/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Baron Sa",
      "url": "./commercials/fr-FR/mat-riaux-de-construction/baron-sa/1673508008665/commercial.mp3",
      "artist": "Mat Riaux De Construction",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Aubert Et Le Roux",
      "url": "./commercials/fr-FR/bureau-l-gislatif/aubert-et-le-roux/1673509817497/commercial.mp3",
      "artist": "Bureau L Gislatif",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Giraud Gie",
      "url": "./commercials/fr-FR/services-de-l-industrie-textile/giraud-gie/1673508292376/commercial.mp3",
      "artist": "Services De L Industrie Textile",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Roussel Et Giraud",
      "url": "./commercials/fr-FR/d-tail/roussel-et-giraud/1673509114082/commercial.mp3",
      "artist": "D Tail",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Lemoine Et Dumont",
      "url": "./commercials/fr-FR/produits-de-papier-et-de-for-t/lemoine-et-dumont/1673509098480/commercial.mp3",
      "artist": "Produits De Papier Et De For T",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Meyer Ei",
      "url": "./commercials/fr-FR/textiles/meyer-ei/1673508938684/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Charles Gie",
      "url": "./commercials/fr-FR/supermarch-s/charles-gie/1673508219345/commercial.mp3",
      "artist": "Supermarch S",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Deschamps Scop",
      "url": "./commercials/fr-FR/biblioth-ques/deschamps-scop/1673509172490/commercial.mp3",
      "artist": "Biblioth Ques",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Girard Gie",
      "url": "./commercials/fr-FR/sports/girard-gie/1673509464717/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Baron Et Garnier",
      "url": "./commercials/fr-FR/a-rien-aviation/baron-et-garnier/1673508644903/commercial.mp3",
      "artist": "A Rien Aviation",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Roger Et Meyer",
      "url": "./commercials/fr-FR/capital-risque-et-financement-priv/roger-et-meyer/1673509353744/commercial.mp3",
      "artist": "Capital Risque Et Financement Priv ",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Dvnis Et Olivier",
      "url": "./commercials/fr-FR/installations-et-services-de-loisirs/dvnis-et-olivier/1673509414377/commercial.mp3",
      "artist": "Installations Et Services De Loisirs",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Durand Et Le Gall",
      "url": "./commercials/fr-FR/services-de-m-dias/durand-et-le-gall/1673509865421/commercial.mp3",
      "artist": "Services De M Dias",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Schneider Sarl",
      "url": "./commercials/fr-FR/construction/schneider-sarl/1673508800776/commercial.mp3",
      "artist": "Construction",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Jacquet Sas",
      "url": "./commercials/fr-FR/renouvelables-et-environnement/jacquet-sas/1673509970903/commercial.mp3",
      "artist": "Renouvelables Et Environnement",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Joly Sarl",
      "url": "./commercials/fr-FR/a-rien-aviation/joly-sarl/1673508883863/commercial.mp3",
      "artist": "A Rien Aviation",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Roux Sa",
      "url": "./commercials/fr-FR/lev-e-de-fonds/roux-sa/1673508983100/commercial.mp3",
      "artist": "Lev E De Fonds",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Lef Vre Et Bourgeois",
      "url": "./commercials/fr-FR/march-s-de-capitaux/lef-vre-et-bourgeois/1673509836097/commercial.mp3",
      "artist": "March S De Capitaux",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Jacquet Sarl",
      "url": "./commercials/fr-FR/produits-de-papier-et-de-for-t/jacquet-sarl/1673510064364/commercial.mp3",
      "artist": "Produits De Papier Et De For T",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Nicolas Et Jacquet",
      "url": "./commercials/fr-FR/jeux-vid-o/nicolas-et-jacquet/1673509677929/commercial.mp3",
      "artist": "Jeux Vid O",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Bourgeois Sarl",
      "url": "./commercials/fr-FR/divertissement/bourgeois-sarl/1673509847494/commercial.mp3",
      "artist": "Divertissement",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Maillard Sem",
      "url": "./commercials/fr-FR/services-aux-consommateurs/maillard-sem/1673508694562/commercial.mp3",
      "artist": "Services Aux Consommateurs",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Philippe Sem",
      "url": "./commercials/fr-FR/jeu-et-casinos/philippe-sem/1673508081297/commercial.mp3",
      "artist": "Jeu Et Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Blanc Et Pr Vost",
      "url": "./commercials/fr-FR/arts-et-artisanat/blanc-et-pr-vost/1673509277302/commercial.mp3",
      "artist": "Arts Et Artisanat",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Duval Sas",
      "url": "./commercials/fr-FR/relations-publiques-et-communications/duval-sas/1673507980004/commercial.mp3",
      "artist": "Relations Publiques Et Communications",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Chevalier Et Fabre",
      "url": "./commercials/fr-FR/divertissement/chevalier-et-fabre/1673510144021/commercial.mp3",
      "artist": "Divertissement",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Hubert Et Bernard",
      "url": "./commercials/fr-FR/ressources-humaines/hubert-et-bernard/1673509628738/commercial.mp3",
      "artist": "Ressources Humaines",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Garcia Et Carpentier",
      "url": "./commercials/fr-FR/jeux-vid-o/garcia-et-carpentier/1673508030508/commercial.mp3",
      "artist": "Jeux Vid O",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Pierre Scop",
      "url": "./commercials/fr-FR/d-tail/pierre-scop/1673509477789/commercial.mp3",
      "artist": "D Tail",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Rey Et Brun",
      "url": "./commercials/fr-FR/soins-de-sant-mentale/rey-et-brun/1673509825758/commercial.mp3",
      "artist": "Soins De Sant Mentale",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Marty Et Bourgeois",
      "url": "./commercials/fr-FR/juges/marty-et-bourgeois/1673508399404/commercial.mp3",
      "artist": "Juges",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Lucas Et Lemoine",
      "url": "./commercials/fr-FR/animation/lucas-et-lemoine/1673509359770/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Francois Et Lemaire",
      "url": "./commercials/fr-FR/livraison-de-colis-fret/francois-et-lemaire/1673510005045/commercial.mp3",
      "artist": "Livraison De Colis Fret",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Leroux Et Henry",
      "url": "./commercials/fr-FR/traduction-et-localisation/leroux-et-henry/1673508990376/commercial.mp3",
      "artist": "Traduction Et Localisation",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Roussel Sem",
      "url": "./commercials/fr-FR/banque/roussel-sem/1673509323499/commercial.mp3",
      "artist": "Banque",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Roche Scop",
      "url": "./commercials/fr-FR/services-de-la-d-fense-nationale/roche-scop/1673509021640/commercial.mp3",
      "artist": "Services De La D Fense Nationale",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Adam Et Philippe",
      "url": "./commercials/fr-FR/v-t-rinaire/adam-et-philippe/1673509768198/commercial.mp3",
      "artist": "V T Rinaire",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Garcia Sas",
      "url": "./commercials/fr-FR/livraison-de-colis-fret/garcia-sas/1673509996230/commercial.mp3",
      "artist": "Livraison De Colis Fret",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Maillard Sem",
      "url": "./commercials/fr-FR/m-dias-de-diffusion/maillard-sem/1673508918348/commercial.mp3",
      "artist": "M Dias De Diffusion",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Paris Sas",
      "url": "./commercials/fr-FR/sans-fil/paris-sas/1673508615670/commercial.mp3",
      "artist": "Sans Fil",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Charpentier Et Garcia",
      "url": "./commercials/fr-FR/services-de-la-d-fense/charpentier-et-garcia/1673509603065/commercial.mp3",
      "artist": "Services De La D Fense",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "G Rard Ei",
      "url": "./commercials/fr-FR/mat-riel-informatique/g-rard-ei/1673509668439/commercial.mp3",
      "artist": "Mat Riel Informatique",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Laine Scop",
      "url": "./commercials/fr-FR/recherche-de-march/laine-scop/1673509122666/commercial.mp3",
      "artist": "Recherche De March ",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Mathieu Et Rousseau",
      "url": "./commercials/fr-FR/philanthropie/mathieu-et-rousseau/1673508251860/commercial.mp3",
      "artist": "Philanthropie",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Robert Ei",
      "url": "./commercials/fr-FR/services-d-v-nements/robert-ei/1673508315244/commercial.mp3",
      "artist": "Services D V Nements",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "M Unier Et Rolland",
      "url": "./commercials/fr-FR/vins-et-spiritueux/m-unier-et-rolland/1673508349264/commercial.mp3",
      "artist": "Vins Et Spiritueux",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Royer Sarl",
      "url": "./commercials/fr-FR/banque-d-investissement/royer-sarl/1673508657022/commercial.mp3",
      "artist": "Banque D Investissement",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Francois Et Cl Ment",
      "url": "./commercials/fr-FR/application-de-la-loi/francois-et-cl-ment/1673508480224/commercial.mp3",
      "artist": "Application De La Loi",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Rousseau Gie",
      "url": "./commercials/fr-FR/sports/rousseau-gie/1673509304582/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Lop Z Et Bonnet",
      "url": "./commercials/fr-FR/production-alimentaire/lop-z-et-bonnet/1673508231320/commercial.mp3",
      "artist": "Production Alimentaire",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Laurent Et Lacroix",
      "url": "./commercials/fr-FR/organisation-civique-et-sociale/laurent-et-lacroix/1673509614335/commercial.mp3",
      "artist": "Organisation Civique Et Sociale",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Renard Sa",
      "url": "./commercials/fr-FR/g-nie-civil/renard-sa/1673508601453/commercial.mp3",
      "artist": "G Nie Civil",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Chevalier Sarl",
      "url": "./commercials/fr-FR/services-de-la-d-fense-nationale/chevalier-sarl/1673508817678/commercial.mp3",
      "artist": "Services De La D Fense Nationale",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Roux Scop",
      "url": "./commercials/fr-FR/assurance/roux-scop/1673509899071/commercial.mp3",
      "artist": "Assurance",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Michel Et Dupuis",
      "url": "./commercials/fr-FR/aliments-et-boissons/michel-et-dupuis/1673509347282/commercial.mp3",
      "artist": "Aliments Et Boissons",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Moreau Sem",
      "url": "./commercials/fr-FR/t-l-communications/moreau-sem/1673510025291/commercial.mp3",
      "artist": "T L Communications",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Garcia Et Dumas",
      "url": "./commercials/fr-FR/capital-risque-et-financement-priv/garcia-et-dumas/1673508180389/commercial.mp3",
      "artist": "Capital Risque Et Financement Priv ",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Blanchard Et Guillot",
      "url": "./commercials/fr-FR/aviation-et-a-ronautique/blanchard-et-guillot/1673508392921/commercial.mp3",
      "artist": "Aviation Et A Ronautique",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Hubert Ei",
      "url": "./commercials/fr-FR/entreposage/hubert-ei/1673508960995/commercial.mp3",
      "artist": "Entreposage",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Gonzalez Sarl",
      "url": "./commercials/fr-FR/s-curit-publique/gonzalez-sarl/1673509129587/commercial.mp3",
      "artist": "S Curit Publique",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Blanchard Et Dvnis",
      "url": "./commercials/fr-FR/banque/blanchard-et-dvnis/1673508546503/commercial.mp3",
      "artist": "Banque",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Guyot Sa",
      "url": "./commercials/fr-FR/logistique-et-cha-ne-d-approvisionnement/guyot-sa/1673509137562/commercial.mp3",
      "artist": "Logistique Et Cha Ne D Approvisionnement",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Mercier Gie",
      "url": "./commercials/fr-FR/traduction-et-localisation/mercier-gie/1673510018710/commercial.mp3",
      "artist": "Traduction Et Localisation",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Guillot Scop",
      "url": "./commercials/fr-FR/biblioth-ques/guillot-scop/1673509107654/commercial.mp3",
      "artist": "Biblioth Ques",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Paul Et Fernandez",
      "url": "./commercials/fr-FR/maritime/paul-et-fernandez/1673508945526/commercial.mp3",
      "artist": "Maritime",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Nicolas Et Pr Vost",
      "url": "./commercials/fr-FR/entreposage/nicolas-et-pr-vost/1673508757273/commercial.mp3",
      "artist": "Entreposage",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "R My Ei",
      "url": "./commercials/fr-FR/agroalimentaire/r-my-ei/1673508190224/commercial.mp3",
      "artist": "Agroalimentaire",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Carpentier Et Guillot",
      "url": "./commercials/fr-FR/sans-fil/carpentier-et-guillot/1673509914627/commercial.mp3",
      "artist": "Sans Fil",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Paris Sarl",
      "url": "./commercials/fr-FR/jeux-vid-o/paris-sarl/1673509082999/commercial.mp3",
      "artist": "Jeux Vid O",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Masson Et Richard",
      "url": "./commercials/fr-FR/restaurants/masson-et-richard/1673508001828/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Robert Et Vincent",
      "url": "./commercials/fr-FR/services-de-sant/robert-et-vincent/1673509152282/commercial.mp3",
      "artist": "Services De Sant ",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Martin Sas",
      "url": "./commercials/fr-FR/organisation-civique-et-sociale/martin-sas/1673508104299/commercial.mp3",
      "artist": "Organisation Civique Et Sociale",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Gu Rin Ei",
      "url": "./commercials/fr-FR/services-de-la-d-fense-nationale/gu-rin-ei/1673508305319/commercial.mp3",
      "artist": "Services De La D Fense Nationale",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Lop Z Eurl",
      "url": "./commercials/fr-FR/think-tanks/lop-z-eurl/1673509332689/commercial.mp3",
      "artist": "Think Tanks",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Rodriguez Eurl",
      "url": "./commercials/fr-FR/t-l-communications/rodriguez-eurl/1673509979972/commercial.mp3",
      "artist": "T L Communications",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Petit Sem",
      "url": "./commercials/fr-FR/services-de-transport/petit-sem/1673508045165/commercial.mp3",
      "artist": "Services De Transport",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Adam Et Francois",
      "url": "./commercials/fr-FR/recrutement-et-placement/adam-et-francois/1673509248978/commercial.mp3",
      "artist": "Recrutement Et Placement",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Poirier Et Barre",
      "url": "./commercials/fr-FR/p-trole-et-nergie/poirier-et-barre/1673508111428/commercial.mp3",
      "artist": "P Trole Et Nergie",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Gauthier Et Jean",
      "url": "./commercials/fr-FR/services-de-la-d-fense-nationale/gauthier-et-jean/1673510031042/commercial.mp3",
      "artist": "Services De La D Fense Nationale",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Paul Ei",
      "url": "./commercials/fr-FR/commerce-international-et-d-veloppement/paul-ei/1673508579952/commercial.mp3",
      "artist": "Commerce International Et D Veloppement",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Marie Et Pr Vost",
      "url": "./commercials/fr-FR/services-publics/marie-et-pr-vost/1673509295100/commercial.mp3",
      "artist": "Services Publics",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Innovation And Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-innovation-and-advertising-come-together.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Future Of Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-future-of-advertising-is-now.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Power Of AI",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-power-of-ai-technology-meets-the-world-of-advertising.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Technology Leads",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-leads-the-way-in-advertisemen.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Meets Advertising",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-meets-advertising-excellence.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    }
  ]
});

