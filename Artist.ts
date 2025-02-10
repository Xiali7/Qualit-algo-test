interface Artist {
  id: string;
  name: string;
}
const artists: Artist[] = [
  { id: '1', name: 'Alice', genre: 'Rock', stage: '' },      // O(1) Spatiale, O(1) Temporelle
  { id: '2', name: 'Bob', genre: 'Pop', stage: '' },        // O(1) Spatiale, O(1) Temporelle
  { id: '3', name: 'Charlie', genre: 'Jazz', stage: '' },   // O(1) Spatiale, O(1) Temporelle
  { id: '4', name: 'Dave', genre: 'Hip-Hop', stage: '' },   // O(1) Spatiale, O(1) Temporelle
  { id: '5', name: 'Eve', genre: 'Classical', stage: '' }   // O(1) Spatiale, O(1) Temporelle
];


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



console.log(findArtistIndex(artists, 'Artist_A10'));

// Complexité temporelle : O(log n) pour la recherche
// Complexité spatiale : O(1) pour la recherche, O(n) pour le stockage des artistes