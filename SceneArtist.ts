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
  