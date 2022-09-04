export const DATA = {
  audioUrl:
    'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_07_-_Interception.mp3',
  imageUrl:
    'https://images.squarespace-cdn.com/content/v1/5f57cc6a087bc82106aaab0e/1601638913071-8JO9OYM22LRPWDRUQ5LN/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/augustin-de-montesquiou-RqMIFcDLeos-unsplash.jpg?format=2500w',
  canvasHeight: 1080,
  canvasWidth: 1920,
  duration: 143, //ergi tevman jamanaky varkianov
  audioChunks: [
    {
      id: 0,
      start: 0,
      end: 63,
      textParams: {
        text: 'Lorem Ipsum',
        fontName: 'Montserrat',
        color: '00000',
        size: 16,
        coordinates: [120, 190],
        opacity: 1,
        styles: ['bold', 'italic', 'underlined'],
      },
    },
  ],
}

export const AUDIO_CHUNK = {
  id: Date.now(),
  start: 0,
  end: 0,
  textParams: {
    text: '',
    fontName: 'Montserrat',
    color: '00000',
    size: 16,
    coordinates: [null, null],
    opacity: 1,
    styles: ['bold', 'italic', 'underlined'],
  },
}
