
const pallete = [
    {
        // Primary
        text: 'gray',
        black: `black`,
        primary: `#7EE4EC`,
        secondary: `#114B5F`,
        third: `#456990`,
        white: `white`,
        primaryOpacity: opacity=>`rgba(126, 228, 236,${opacity})`,
        grayOpacity: opacity=>`rgba(128, 128, 128, ${opacity})`,

    },
    {
        // Primary
        text: 'gray',
        black: `black`,
        primary: `red`,
        secondary: `#114B5F`,
        third: `#456990`,
        white: `white`,
        primaryOpacity: opacity=>`rgba(126, 228, 236,${opacity})`,
        grayOpacity: opacity=>`rgba(128, 128, 128, ${opacity})`,

    },
   
]

export const themeColors = {
    ...pallete[0]
}