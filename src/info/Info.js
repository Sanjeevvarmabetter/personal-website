import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export let singlePage = false;


export const info = {
    firstName: "Sanjeev",
    lastName: "Varma",
    initials: "SV", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Blockchain Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🇮🇳',
            text: 'From India'
        },
        {
            emoji: "🌐",
            text: "Love Decentralization"
        },
        {
            emoji: "🔐",
            text: "CyberSecurity Evangelist"
        }
    ],
    socials: [
        {
            link: "https://github.com/Sanjeevvarmabetter",
            icon: 'fa fa-github',
            label: 'github'
        },
        {
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=sanjeevvarmacode@gmail.com",
            icon: 'fa fa-envelope',
            label: 'email'
        },
        
        
        {
            link: "https://www.linkedin.com/in/sanjeev-varma7/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
     


    ],
    bio: "Passionate and dedicated final year Computer Science student with a strong focus on blockchain technology, software development, and secure programming.I’m actively seeking challenging roles to further develop as a better team player,thinker and disciplined professional.",
    
    skills:
        {
            proficientWith: ['C/C++', 'Python', 'Solidity', 'NodeJs', 'Ethereum', 'Linux', 'Git'],
            exposedTo: ['Backend', 'Dapps', 'Problem Solving','Research']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Decentralized Security Camera",
            live: "", 
            source: "https://github.com/Sanjeevvarmabetter/Securitycamera/", 
            image: mock1
        },
        {
            title: "Coffee Ordering Dapp",
            live: "",
            source: "https://github.com/Sanjeevvarmabetter/tea_dapp",
            image: mock2
        },
        {
            title: "Blog Application",
            live: "https://paytonpierce.dev",
            source: "https://github.com/Sanjeevvarmabetter/website_sanjeev",
            image: mock3
        },
        {
            title: "Local Music Player",
            live: "https://paytonpierce.dev",
            source: "https://github.com/Sanjeevvarmabetter/SANJEEV-S-COOL-MUSIC-PLAYER",
            image: mock4
        },
    ]
}