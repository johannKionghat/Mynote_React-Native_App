
const pallete = [
    {
        // Primary
        text: 'gray',
        black: `black`,
        primary: `#7EE4EC`,
        secondary: `#114B5F`,
        third: `#456990`,
        red: `#F45B69`,
        pink: `#FFD4CA`,
        white: `white`,
        green: `#42D96D`,
        yellow:`#FDFFA3`,
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