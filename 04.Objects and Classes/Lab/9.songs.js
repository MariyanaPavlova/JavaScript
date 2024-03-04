function songs(input){
    class Songs {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = []
    let numSongs = input.shift()
    let typeSongs = input.pop()

    for (let i of input){
        let [type, name, time] = i.split('_');
        let song = new Songs(type, name, time);
        songs.push(song)
    }
    if(typeSongs === 'all'){
        songs.forEach((i) => console.log(i.name));
    }

}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )