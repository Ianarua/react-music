export function getSongPlayUrl (id: number) {
    console.log('function Id', id);
    return `https://music.163.com/song/media/outer/url?id=${ id }.mp3`;
}
