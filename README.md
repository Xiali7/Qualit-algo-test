# Examen - Complexité Algorithmique

Célian
Jublot
Groupe: A1


L’algorithme suivant permet de retrouver un artiste dans une liste triée alphabétiquement.

```js
interface Artist {
  id: string;
  name: string;
}

function findArtistIndex(artists, name) {
  for (let i = 0; i < artists.length; i++) {
    if (artists[i].name === name) {
      return artists[i].id;
    }
  }
  return -1;
}
```

```js

interface Artist {
  id: string;
  name: string;
}

// Génération de données de test
function generateArtists(count: number): Artist[] {
  const artists: Artist[] = [];
  for (let i = 0; i < count; i++) {
    artists.push({
      id: (i + 1).toString(),
      name: `Artist_${String.fromCharCode(65 + (i % 26))}${i}`
    });
  }
  return artists.sort((a, b) => a.name.localeCompare(b.name)); 
}

function findArtistIndex(artists: Artist[], name: string): string | -1 {
  let left = 0;                                                             // O(1) en complexité spatiale
  let right = artists.length - 1;                                           // O(1) en complexité spatiale

  while (left <= right) {                                                   // O(log n) en complexité temporelle (dichotomie)
    const mid = Math.floor((left + right) / 2);                             // O(1) en complexité temporelle
    const midName = artists[mid].name;                                      // O(1) en complexité temporelle

    if (midName === name) {                                                 // O(1) en complexité temporelle
      return artists[mid].id;                                               // O(1) en complexité spatiale et temporelle
    } else if (midName < name) {                                            // O(1) en complexité temporelle
      left = mid + 1;                                                       // O(1) en complexité spatiale
    } else {
      right = mid - 1;                                                      // O(1) en complexité spatiale
    }
  }

  return -1;                                                                // O(1) en complexité spatiale et temporelle
}


// Exemple de test
const artists = generateArtists(1000);
console.log(findArtistIndex(artists, 'Artist_A10'));

// Complexité temporelle : O(log n) pour la recherche
// Complexité spatiale : O(1) pour la recherche, O(n) pour le stockage des artistes
```

### Attribution des Scènes aux Artistes

Chaque artiste doit être assigné à une scène en fonction de son genre musical. Le code suivant attribue les artistes un par un en comparant chaque genre à une liste prédéfinie de scènes possibles.

Précision : un genre de musique n'est présent que sur une scène.

```js
interface Artist {
  id: string;
  name: string;
  genre: string;
  stage: string;
}

interface Stage {
  id: string;
  name: string;
  genres: Array<string>;
}

function assignStages(artists, stages) {
  for (let stage of stages) {
    for (let artist of artists) {
      if (stage.genres.includes(artist.genre)) {
        artist.stage = stage.id;
        break;
      }
    }
  }
}
```

```js 
interface Artist {
    id: string;
    name: string;
    genre: string;
    stage: string;
  }
  
  interface Stage {
    id: string;
    name: string;
    genres: Array<string>;
  }
  

  const toutlesartists: Artist[] = [
    { id: '1', name: 'Alice', genre: 'Rock', stage: '' },      
    { id: '2', name: 'Bob', genre: 'Pop', stage: '' },        
    { id: '3', name: 'Charlie', genre: 'Jazz', stage: '' },   
    { id: '4', name: 'Dave', genre: 'Hip-Hop', stage: '' },   
    { id: '5', name: 'Eve', genre: 'Classical', stage: '' }   
  ];
  
  const stages: Stage[] = [
    { id: '1', name: 'Main Stage', genres: ['Rock', 'Pop'] },        
    { id: '2', name: 'Jazz Corner', genres: ['Jazz'] },             
    { id: '3', name: 'Hip-Hop Arena', genres: ['Hip-Hop'] },        
    { id: '4', name: 'Classical Hall', genres: ['Classical'] }      
  ];
  
  function assignStages(artists: Artist[], stages: Stage[]) {
    const genreToStageMap: { [genre: string]: string } = {};        // O(n) Spatiale, O(1) Temporelle
  
    for (let stage of stages) {                                     // O(n) Temporelle
      stage.genres.forEach(genre => genreToStageMap[genre] = stage.id); // O(n) Spatiale, O(1) Temporelle par genre
    }
  
    for (let artist of artists) {                                  // O(n) Temporelle
      artist.stage = genreToStageMap[artist.genre] || '';          // O(1) Spatiale, O(1) Temporelle
    }
  }

  assignStages(toutlesartists, stages);                                   // O(1) Temporelle
  console.log(toutlesartists);                                            // O(1) Temporelle
  
  // Complexité temporelle : O(n) 
  // Complexité spatiale : O(n)
  ```
